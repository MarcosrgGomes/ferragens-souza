import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from './mockData';

// Initialize the client
const apiKey = process.env.API_KEY || ''; 
// Note: In a real prod environment, handle missing key gracefully.
// For this demo, we assume the environment has it or we catch the error in the UI.

let ai: GoogleGenAI | null = null;
try {
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey });
    }
} catch (error) {
    console.error("Failed to initialize Gemini Client", error);
}

export const getAssistantResponse = async (userQuery: string): Promise<string> => {
    if (!ai) {
        return "Desculpe, o assistente inteligente está temporariamente indisponível (Chave de API não configurada).";
    }

    // Prepare a context-aware system instruction
    const productListString = PRODUCTS.map(p => `- ${p.name} (ID: ${p.id}, Categoria: ${p.category}, Preço: R$ ${p.price.toFixed(2)})`).join('\n');

    const prompt = `
    Você é o 'Luciano IA', o assistente virtual experiente da loja 'Ferragens Souza'.
    Seu objetivo é ajudar clientes a encontrar produtos para resolver problemas domésticos (bricolagem, reparos, obras).
    
    O cliente perguntou: "${userQuery}"

    Aqui está o nosso catálogo de produtos atual:
    ${productListString}

    Instruções:
    1. Seja simpático, breve e direto, como um atendente de balcão de loja de bairro.
    2. Se a dúvida do cliente for sobre um problema (ex: "torneira pingando"), sugira qual produto do nosso catálogo resolve.
    3. Se não tivermos o produto exato, sugira algo similar ou diga honestamente que não temos, mas dê uma dica de como resolver.
    4. Mencione os preços dos produtos que sugerir.
    5. Não invente produtos que não estão na lista acima.

    Responda em português do Brasil.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
        });

        return response.text || "Desculpe, não consegui entender. Pode reformular?";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Tive um problema técnico. Por favor, procure um atendente na loja.";
    }
};