import { useEffect, useState } from "react";
import BarraPesquisa from "./components/BarraPesquisa";
import FotoAmpliada from "./components/FotoAmpliada";
import ListaFotos from './components/ListaFotos';
import axios from 'axios';

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [buscaAtivada, setBuscaAtivada] = useState(false);

  const fetchFotos = async ({ pesquisa, categoria }) => {
    const apiKey = import.meta.env.VITE_API;
    let QueryBusca = pesquisa || categoria || "";

    try {
      let resposta;
      if (QueryBusca) {
        resposta = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: apiKey,
            query: QueryBusca,
            per_page: 100
          }
        });
        setFotos(resposta.data.results);
        return;
      } else {
        resposta = await axios.get("https://api.unsplash.com/photos/random", {
          params: {
            client_id: apiKey,
            count: 32
          }
        });
        setFotos(resposta.data);
      }
    } catch (error) {
      console.error("Erro ao buscar fotos:", error);
    }
  };

  useEffect(() => {
    fetchFotos({ pesquisa, categoria });
  }, []);

  useEffect(() => {
    if (buscaAtivada) {
      fetchFotos({ pesquisa, categoria });
      setBuscaAtivada(false);
    }
  }, [buscaAtivada]);

  return (
    <div className="container">
      <BarraPesquisa setPesquisa={setPesquisa} setCategoria={setCategoria} setBuscaAtivada={setBuscaAtivada} />
      <ListaFotos fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />}
    </div>
  );
}

export default App;
