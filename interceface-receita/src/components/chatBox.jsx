import { useState } from "react";

const ChatBox = ({ onEnviarMensagem, desabilitado }) => {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mensagem.trim()) return;
    onEnviarMensagem(mensagem);
    setMensagem("");
  };

  return (
    <div className="border-t border-gray-200 bg-gray-50/80 p-4">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          type="text"
          placeholder="Digite sua receita..."
          className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          disabled={desabilitado}
        />
        <button
          type="submit"
          disabled={desabilitado}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-emerald-500 text-white rounded-full flex items-center justify-center disabled:opacity-50"
        >
          {desabilitado && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
              />
            </svg>
          )}
          {desabilitado ? "Processando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
