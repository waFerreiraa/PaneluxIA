const Logo = () => (
  <div className="flex items-center space-x-6">
    {/* Texto maior também */}
    <h1 className="text-6xl font-bold text-amber-400 drop-shadow-lg">PaneluxIA</h1>
    
    {/* Logo maior e amarelo mais forte */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-amber-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* Base da panela */}
      <rect
        x="5"
        y="10"
        width="14"
        height="7"
        rx="3"
        ry="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tampa */}
      <path
        d="M7 10v-3a3 3 0 018 0v3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pegador da tampa */}
      <rect
        x="11"
        y="4"
        width="2"
        height="2"
        rx="1"
        ry="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Alças */}
      <line x1="5" y1="14" x2="3" y2="14" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="19" y1="14" x2="21" y2="14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default Logo;
