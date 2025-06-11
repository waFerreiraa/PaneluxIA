import main from "../services/gemini.service.js";

export const perguntarReceita = async (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta || typeof pergunta !== "string") {
      return res.status(400).json({
        erro: "É obrigatório enviar uma pergunta em texto.",
      });
    }

    const resposta = await main(pergunta);
    res.json({ resposta });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao processar sua pergunta. Tente novamente.",
    });
  }
};

export default perguntarReceita;
