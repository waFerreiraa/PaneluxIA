// AgenteIA/interceface-receita/src/components/chatBox.jsx
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
      <form onSubmit={handleSubmit} className="flex flex-row space-x-2 sm:space-x-3 items-center"> {/* Ajustado espaçamento */}
        <input
          type="text"
          placeholder="Digite sua receita..."
          className="flex-1 px-4 sm:px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 min-w-0" // Ajustado padding horizontal
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          disabled={desabilitado}
        />
        <button
          type="submit"
          disabled={desabilitado}
          // AQUI você aplica as cores que escolheu, vou usar o gradiente que você gostou como exemplo
          className="px-4 sm:px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full flex items-center justify-center disabled:opacity-50 flex-shrink-0" // Ajustado padding horizontal
        >
          {desabilitado ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
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
          ) : (
            <>
              {/* Oculta o texto "Enviar" em telas pequenas, mostra apenas o ícone. */}
              <span className="hidden sm:inline">Enviar</span> {/* Usando sm:inline para o texto "Enviar" */}
              <svg /* Ícone de avião de papel */
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 sm:ml-2" // Adicionado margem à esquerda se houver texto
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatBox;