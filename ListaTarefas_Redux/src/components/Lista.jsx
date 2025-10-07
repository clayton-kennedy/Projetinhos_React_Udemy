import React from 'react'

const Lista = () => {
    return (
        <div>
            <div className="listas">
                <button>Todas</button>
                <button>Completas</button>
                <button>Incompletas</button>
            </div>
            <ul>
                <li>
                    <span>algum textode tarefa</span>
                    <button className='btn-remover'>Remover</button>
                </li>
            </ul>
        </div>
    )
}

export default Lista