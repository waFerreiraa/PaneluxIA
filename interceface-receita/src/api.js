import axios from "axios";

const API_url = import.meta.env.VITE_API_url;

export const api = async (pergunta) => {
  try {
    const response = await axios.post(`${API_url}receitas/perguntar`, {
      pergunta,
    });

    return response.data.resposta;
  } catch (error) {
    console.error("Erro ao buscar resposta no servidor", error);
    throw error;
  }
};
