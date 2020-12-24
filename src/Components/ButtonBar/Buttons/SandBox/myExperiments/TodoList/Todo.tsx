import React from 'react';
import {ITodo} from "./TodoList";



interface IProps {
    editValue: string
    el: ITodo
    i: number
    todoList: ITodo[]

    doneUndone(id: number): void;

    setEditValue(value: string): void;

    saveEdit(id: number): void;

    deleteTodo(id: number): void;

    editMode(id: number): void;

    deleteMode(id: number): void;

    moveTodos(id: number, move: number): void;
}

function Todo(props: IProps) {

    const {el, i} = props


    return (
        <li>
            {
                <label key={el.id}>
                    <input type="checkbox" checked={el.state} onClick={() => props.doneUndone(el.id)}/>
                    {el.state ? <s>{el.value}</s> : el.value}
                </label>
            }
            <button disabled={i === 0} onClick={() => props.moveTodos(i, -1)}>up</button>
            <button disabled={i === props.todoList.length - 1} onClick={() => props.moveTodos(i, 1)}>down</button>
            {
                !el.editState ? <button onClick={() => props.editMode(el.id)}>Edit</button> :
                    <>
                        <input value={props.editValue} onChange={e => props.setEditValue(e.target.value)}/>
                        <button onClick={() => props.saveEdit(el.id)}>Add</button>
                        <button onClick={() => props.editMode(el.id)}>Cancel</button>
                    </>
            }
            {
                !el.deleteState ? <button onClick={() => props.deleteMode(el.id)}>Delete</button> :
                    <>
                        <span>Are you sure?</span>
                        <button onClick={() => props.deleteTodo(el.id)}>Yes</button>
                        <button onClick={() => props.deleteMode(el.id)}>No</button>
                    </>
            }


        </li>
    );
}

export default Todo;
