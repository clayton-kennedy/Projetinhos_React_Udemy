import { BuscaContainer, BuscaCidade, BotaoBuscar } from "./BuscaStyles";

function Busca({cidade, setCidade, buscarClima}) {
  return (
    <BuscaContainer>
      <BuscaCidade type='text' value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder='Digite uma cidade'/>
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  )
}

export default Busca