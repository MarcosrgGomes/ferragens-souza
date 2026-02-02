import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from './mockData';

// Inicialização segura: Verifica se a chave existe antes de tentar criar a instância
// Isso previne que o app inteiro quebre (tela branca) se a chave não estiver configurada
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Erro ao inicializar Gemini:", error);
  }
}

export const getAssistantResponse = async (userQuery: string): Promise<string> => {
    if (!ai) {
        return "O assistente está indisponível no momento (Chave de API não configurada). Por favor, entre em contato via WhatsApp.";
    }

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
            model: 'gemini-2.5-flash-latest',
            contents: prompt,
        });

        return response.text || "Não entendi, pode repetir?";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Desculpe, tive um problema técnico. Tente novamente em instantes.";
    }
};