import React from "react";
import s from './SandBox.module.css'
import {NavLink} from "react-router-dom";


function SandBox() {

    return <div>
        <div className={s.content}>
            <div className={s.item}>
                <NavLink to='/Counter' activeClassName={s.active}>Counter</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/TodoList' activeClassName={s.active}>TodoList</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Quiz' activeClassName={s.active}>Quiz</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Calculator' activeClassName={s.active}>Calculator</NavLink>
            </div>
        </div>
    </div>
}

export default SandBox