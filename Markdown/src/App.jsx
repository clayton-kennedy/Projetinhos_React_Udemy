import { useState, useRef, useEffect } from "react";
import { marked } from "marked";
import BarraFerramentas from "./components/BarraFerramentas";

function App() {
  const [texto, setTexto] = useState(localStorage.getItem("markdownTexto") || "");
  const textAreaRef = useRef(null);

  const renderizarTexto = () => ({ __html: marked(texto) });

  useEffect(() => {
    localStorage.setItem("markdownTexto", texto);
  }, [texto]);

  const inserirTexto = (antes, depois) => {
    const textArea = textAreaRef.current;
    const inicio = textArea.selectionStart;
    const fim = textArea.selectionEnd;
    const textoCompleto = textArea.value;
    const textoAnterior = textoCompleto.substring(0, inicio);
    const textoSelecionado = textoCompleto.substring(inicio, fim);
    const textoPosterior = textoCompleto.substring(fim);

    const novoTexto = `${textoAnterior}${antes}${textoSelecionado}${depois}${textoPosterior}`;
    setTexto(novoTexto);
    textArea.focus();
  };

  return (
    <div className="app-container">
      <BarraFerramentas inserirTexto={inserirTexto} />
      <textarea
        ref={textAreaRef}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <div className="preview" dangerouslySetInnerHTML={renderizarTexto()} />
    </div>
  );
}

export default App;