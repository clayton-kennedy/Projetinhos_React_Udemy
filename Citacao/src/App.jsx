import Citacao from "./components/Citacao";
import citacoes from "./data"
import { useState } from "react";

function App() {
  const [indice, setIndice] = useState(0);

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length)
  }
  const retormarCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual - 1))
  }

  return (
    <div className="container mt-5">
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      {indice > 0 && <button className="btn btn-back mt-2" onClick={retormarCitacao}>Voltar citação</button>}
      <button className="btn btn-success mt-2" onClick={proximaCitacao}>Próxima citação</button>
    </div>
  )
}

export default App
