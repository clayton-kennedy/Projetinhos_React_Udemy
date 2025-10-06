import './Citacao.css';
import { useEffect, useState } from "react";

function Citacao({ texto, autor }) {
  const [traducao, setTraducao] = useState("");

  async function traduzir(idioma) {
    try {
      const resposta = await fetch("/traduzir/translate", {
        method: "POST",
        body: JSON.stringify({
          q: texto,
          source: "pt",
          target: idioma,
          format: "text"
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!resposta.ok) {
        console.error("Erro HTTP:", resposta.status, resposta.statusText);
        return;
      }

      const dados = await resposta.json();
      console.log(dados);
      setTraducao(dados.translatedText);

    } catch (error) {
      console.log("Erro ao traduzir", error);
    }
  }

  useEffect(() => {
    setTraducao("");
  }, [texto])

  return (
    <div>
      <blockquote className='blockquote'>
        <p>{traducao ? traducao : texto}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>

      <button className='btn btn-primary mr-1' onClick={() => traduzir("en")}>Traduzir para Inglês</button>
      <button className='btn btn-secondary m-1' onClick={() => traduzir("es")}>Traduzir para Espanhol</button>
    </div>
  )
}

export default Citacao