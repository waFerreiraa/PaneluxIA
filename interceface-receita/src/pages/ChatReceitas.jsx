import { useState } from "react";
import ListaMenssagens from "../components/ListaMensagens";
import ChatBox from "../components/chatBox";
import { api } from "../api";
import Logo from '../components/logo';



const ChatReceitas = () => {
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      text: "Olá, sou sua assistente de receitas, como posso te ajudar hoje?",
      remetente: "bot",
    },
  ]);

  const onEnviarMensagem = async (mensagem) => {
    setLoading(true);
    setIsTyping(true);
    try {
      setMensagens((prev) => [
        ...prev,
        { id: prev.length + 1, text: mensagem, remetente: "Usuario" },
      ]);

      const resposta = await api(mensagem);

      setMensagens((prev) => [
        ...prev,
        {
          id: prev.length + 2,
          text: resposta || "Aqui está sua receita!",
          remetente: "bot",
        },
      ]);
    } catch (error) {
      setMensagens((prev) => [
        ...prev,
        {
          id: prev.length + 2,
          text: "Erro ao buscar receita. Tente novamente.",
          remetente: "bot",
        },
      ]);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-amber-400 to-orange-500 p-4">
      <div className="container mx-auto max-w-4xl">
   <header className="text-center mb-8 flex flex-col items-center space-y-2">
  <Logo />
  <p className="text-amber-100 text-lg drop-shadow-sm">
    Sua chef digital que mistura inteligência com sabor! 🍲🤖
  </p>
</header>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[400px] border border-gray-50 flex flex-col">
          <ListaMenssagens mensagens={mensagens} isTyping={isTyping} />
          <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
        </div>
      </div>
    </div>
  );
};

export default ChatReceitas;