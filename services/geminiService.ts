import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from './mockData';

// API Key must be obtained exclusively from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAssistantResponse = async (userQuery: string): Promise<string> => {
    // Contexto do catálogo para a IA
    const productListString = PRODUCTS.map(p => `- ${p.name} (R$ ${p.price.toFixed(2)})`).join('\n');

    const prompt = `
    Você é o 'Luciano IA', assistente da 'Ferragens Souza'.
    Ajude o cliente com: "${userQuery}"
    
    Catálogo disponível:
    ${productListString}

    Regras:
    1. Seja breve e solícito.
    2. Se o cliente tiver um problema, sugira um produto da lista.
    3. Se não tivermos o produto, dê uma dica técnica.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
        });

        return response.text || "Não entendi, pode repetir?";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Erro técnico no assistente. Tente novamente mais tarde.";
    }
};