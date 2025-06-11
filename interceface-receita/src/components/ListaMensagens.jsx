import { useEffect, useState } from "react";

const ListaMensagens = ({ mensagens, isTyping }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);
      return () => clearInterval(interval);
    } else {
      setDots("");
    }
  }, [isTyping]);

  return (
    <div
      id="lista-mensagens"
      className="flex-1 overflow-y-auto p-4 space-y-4"
      style={{ scrollbarWidth: "thin" }}
    >
      {mensagens.map((mensagem) => (
        <div
          key={mensagem.id}
          className={`flex ${
            mensagem.remetente === "Usuario" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line shadow-md ${
              mensagem.remetente === "Usuario"
                ? "bg-emerald-500 text-white rounded-br-none"
                : "bg-orange-100 text-gray-800 rounded-bl-none"
            }`}
          >
            {mensagem.text}
          </div>
        </div>
      ))}

      {/* Balão com pontinhos grandes animados */}
      {isTyping && (
        <div className="flex justify-start">
          <div className="max-w-[75%] px-6 py-3 rounded-2xl bg-orange-100 text-gray-800 rounded-bl-none shadow-md text-2xl font-bold tracking-widest">
            {dots || "."}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaMensagens;
