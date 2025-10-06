import React from 'react'

function BarraPesquisa({ setPesquisa, setCategoria, setBuscaAtivada }) {
  const categorias = [
    "",
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes",
    "Ciência",
    "Carros",
    "Arquitetura",
    "Cidades",
    "Comida",
    "Bebidas",
    "Música",
    "Moda",
    "Viagem",
    "Praia",
    "Astronomia",
    "Montanhas",
    "Floresta",
    "Deserto",
    "Espaço",
    "Setup Gamer",
    "Moda Feminina",
    "Moda Masculina",
    "Moda Infantil",
    "Aviões",
    "Navios",
    "Trens",
    "Minimalismo",
    "Arte",
    "Fotografia",
    "Inverno",
    "Verão",
    "Outono",
    "Primavera",
    "Noite",
    "Dia",
    "Chuva",
    "Neve",
    "Sol",
    "Lua",
    "Religião",
    "História",
    "Computadores",
    "Programação",
    "Jogos",
    "Filmes",
    "Séries",
    "Crianças",
    "Animais Selvagens",
    "Paisagens",
    "Esportes Radicais",
    "Negócios",
    "Educação",
    "Saúde"
  ];

  const mudarCategoria = (cat) => {
    setCategoria(cat);
    setBuscaAtivada(true)
    setPesquisa("")
  };

  return (
    <div className='barra-pesquisa'>
      <input type="text" placeholder='Pesquisar fotos...' onChange={(e) => setPesquisa(e.target.value)} />
      <button onClick={() => setBuscaAtivada(true)}>Pesquisar</button>
      <select name="" onChange={(e) => mudarCategoria(e.target.value)}>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )
}

export default BarraPesquisa