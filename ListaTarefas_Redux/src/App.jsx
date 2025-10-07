import './App.css'
import Adicionar from './components/Adicionar'
import Lista from './components/Lista'

function App() {

  return (
    <div className='container'>
      <div className="titulo">
        <h1>Lista de Tarefas</h1><br />
        <h4>com Redux</h4>
      </div>
      <Adicionar />
      <Lista />
    </div>
  )
}

export default App
