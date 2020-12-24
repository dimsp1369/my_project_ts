import React from 'react';


interface IProps {
    removeDone: () => void
    addTodo: () => void
    todo: string

    setTodo(value: string): void;
}

function Controllers(props: IProps) {

    return (
        <div>
            <hr/>
            <input value={props.todo} onChange={(e) => props.setTodo(e.target.value)}/>
            <button onClick={props.addTodo}>Add todo</button>
            <button onClick={props.removeDone}>Remove done todos</button>
        </div>
    );
}

export default Controllers;
