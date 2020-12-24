import React from "react";
import Todo from "./Todo";
import {ITodo} from "./TodoList";


interface IProps {

    editValue: string;

    todoList: ITodo[] // made the import from the App

    setTodoList(newState: ITodo[]): void;

    setEditValue(value: string): void;

    saveEdit(id: number): void;

    deleteTodo(id: number): void;

    moveTodos(id: number, move: number): void;

}

function TodoLists(props: IProps) {

    const doneUndone = (id: number) => {
        props.setTodoList(props.todoList.map(el => (el.id === id && !el.state) ? {...el, state: true}
            : (el.id === id && el.state) ? {...el, state: false} : el))
    }
    const editMode = (id: number) => {
        props.setTodoList(props.todoList.map(el => (el.id === id && el.editState) ? {...el, editState: false}
            : (el.id === id && !el.editState) ? {...el, editState: true} : el))
    }
    const deleteMode = (id: number) => {
        props.setTodoList(props.todoList.map(el => (el.id === id && el.deleteState) ? {...el, deleteState: false}
            : (el.id === id && !el.deleteState) ? {...el, deleteState: true} : el))
    }


    return (
        <>
            {props.todoList.map((el, i) =>
                <ul>
                    <Todo el={el}
                          i={i}
                          todoList={props.todoList}
                          doneUndone={doneUndone}
                          setEditValue={props.setEditValue}
                          editValue={props.editValue}
                          saveEdit={props.saveEdit}
                          editMode={editMode}
                          deleteTodo={props.deleteTodo}
                          deleteMode={deleteMode}
                          moveTodos={props.moveTodos}/>
                </ul>)}
        </>
    );
}

export default TodoLists;