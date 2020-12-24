import React, {useState} from "react";
import Controllers from "./Controller";
import TodoLists from "./TodoLists";
// import s from 'TodoList.module.css'


export interface ITodo {
    id: number
    value: string
    state: boolean
    editState: boolean
    deleteState: boolean
}

function TodoList() {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState<ITodo[]>([])
    const [editValue, setEditValue] = useState('')


    const addTodo = () => {
        if (todo !== '') {
            const newTodo = [...todoList, {
                id: Math.random(),
                value: todo,
                state: false,
                editState: false,
                deleteState: false
            }]
            setTodoList(newTodo)
            setTodo('')
        }
    }

    const removeDone = () => {
        setTodoList(todoList.filter(el => !el.state))
    }

    const saveEdit = (id: number) => {
        if (editValue !== '') {
            const newValue = (todoList.map(el => {
                if (el.id === id) {
                    el.value = editValue
                    el.editState = false
                }
                return el
            }))
            setTodoList(newValue)
            setEditValue('')
        }
    }

    const deleteTodo = (id: number) => {
        setTodoList(todoList.filter(el => el.id !== id))
    }

    const moveTodos = (i: number, move: number) => {
        const newTodoList = [...todoList]
        const currentEl = newTodoList[i]
        newTodoList[i] = newTodoList[i + move]
        newTodoList[i + move] = currentEl
        setTodoList(newTodoList)
    }

    return (
        <div>
            <TodoLists todoList={todoList}
                      setTodoList={setTodoList}
                      editValue={editValue}
                      setEditValue={setEditValue}
                      saveEdit={saveEdit}
                      deleteTodo={deleteTodo}
                      moveTodos={moveTodos}/>
            <Controllers addTodo={addTodo}
                         todo={todo}
                         setTodo={setTodo}
                         removeDone={removeDone}/>
        </div>
    );
}

export default TodoList;