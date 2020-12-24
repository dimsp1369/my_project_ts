import React from "react";
import s from './ViewWindow.module.css'
import {Route} from 'react-router-dom'
import SingUp from "../ButtonBar/Buttons/SingUp/SingUp";
import PhoneBook from "../ButtonBar/Buttons/PhoneBook/PhoneBook";
import Calendar from "../ButtonBar/Buttons/Calendar/Calendar";
import Settings from "../ButtonBar/Buttons/Settings/Settings";
import SandBox from "../ButtonBar/Buttons/SandBox/SandBox";
import Counter from "../ButtonBar/Buttons/SandBox/myExperiments/Counter/Counter";
import TodoList from "../ButtonBar/Buttons/SandBox/myExperiments/TodoList/TodoList";
import Quiz from "../ButtonBar/Buttons/SandBox/myExperiments/Quiz/Quiz";
import Calculator from "../ButtonBar/Buttons/SandBox/myExperiments/Calculator/Calculator";

interface IContact {
    contacts: {
        id: number
        name: string
        phone: string
        email: string
        address: string
    }[]
}

function ViewWindow(props: IContact) {
    return <div className={s.ViewWindow}>
        <div className={s.content}>
            <Route path='/SingUp' component={SingUp}/>
            <Route path='/PhoneBook' render={ () => <PhoneBook contacts={props.contacts}/>}/>
            <Route path='/Calendar' component={Calendar}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/SandBox' component={SandBox}/>
        </div>
        <div>
            <Route path='/Counter' component={Counter}/>
            <Route path='/TodoList' component={TodoList}/>
            <Route path='/Quiz' component={Quiz}/>
            <Route path='/Calculator' component={Calculator}/>
        </div>
    </div>
}

export default ViewWindow