import React from 'react'

function BarraFerramentas({ inserirTexto }) {
  return (
    <div className="toolbar">
      <button onClick={() => inserirTexto("# ", "")}>h1</button>
      <button onClick={() => inserirTexto("## ", "")}>h2</button>
      <button onClick={() => inserirTexto("### ", "")}>h3</button>
      <button onClick={() => inserirTexto("\n> ", "")}>Citação</button>
      <button onClick={() => inserirTexto("**", "**")}>Bold</button>
      <button onClick={() => inserirTexto("~~", "~~")}>Riscado</button>
      <button onClick={() => inserirTexto("*", "*")}>Itálico</button>
      <button onClick={() => inserirTexto("[", "](https://)")}>Link</button>
      <button onClick={() => inserirTexto("\n```\n", "\n```\n")}>Code Block</button>
      <button onClick={() => inserirTexto("\n- ", "")}>List Item</button>
      <button onClick={() => inserirTexto("\n---\n", "")}>Horizontal Line</button>
    </div>
  );
}

export default BarraFerramentas