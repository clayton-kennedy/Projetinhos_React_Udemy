import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

function Adicionar() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();

  const ClickSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") { return; }
    dispatch(addTodo(input))
    setInput("");
  }
  return (
    <form onSubmit={ClickSubmit}>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Adicione uma tarefa...' required />
      <button type='submit' className='btn-enviar'>Enviar</button>
    </form>
  )
}

export default Adicionar