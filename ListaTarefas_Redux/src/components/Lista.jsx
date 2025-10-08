import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleToDo, removeToDo, filtrarTodos } from '../slices/todoSlice';

const Lista = () => {
    const { list, filter } = useSelector((state) => state.todos)

    const dispatch = useDispatch();

    const filtrarLista = list.filter((todo) => {
        if (filter === "all") {
            return true;
        }
        if (filter === "completed") {
            return todo.completed;
        }
        if (filter === "incomplete") {
            return !todo.completed;
        }
        return true;
    })

    return (
        <div>
            <div className="listas">
                <button onClick={() => dispatch(filtrarTodos("all"))}>Todas</button>
                <button onClick={() => dispatch(filtrarTodos("completed"))}>Completas</button>
                <button onClick={() => dispatch(filtrarTodos("incomplete"))}>Incompletas</button>
            </div>
            <ul>
                {filtrarLista.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={() => dispatch(toggleToDo(todo.id))}
                            className={todo.completed ? "line-through" : ""}>
                            {todo.text}
                        </span>
                        <button className='btn-remover' onClick={() => dispatch(removeToDo(todo.id))}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lista