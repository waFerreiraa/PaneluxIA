import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.IA_key);

async function main(perguntaUsuario) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    const promptBase = `Você é um assistente culinário especializado em ajudar pessoas leigas a cozinharem receitas deliciosas com base em um ingrediente ou pedido informado pelo usuário.
Responda sempre em português brasileiro, com linguagem clara, amigável e fácil de entender, como se estivesse explicando para alguém que está começando a cozinhar.

Siga estas instruções de formatação obrigatórias para facilitar a leitura no chat:

- Use quebra de linha entre as seções (nome da receita, ingredientes, modo de preparo, dicas, etc.)
- Apresente os ingredientes em lista, com um item por linha
- Divida o modo de preparo em passos numerados, simples e objetivos
- Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável

A receita sugerida deve ser saborosa, fácil de preparar e bem explicada, mesmo para quem não tem experiência na cozinha.

Com base nisso, responda ao pedido a seguir, sem fazer perguntas ou pedir confirmação, somente se o usuario perguntar. Dê uma receita completa diretamente. Pedido do usuário: ${perguntaUsuario}
`;

    const result = await model.generateContent(promptBase);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Erro ao gerar conteúdo:", error);
    throw error;
  }
}

export default main;
