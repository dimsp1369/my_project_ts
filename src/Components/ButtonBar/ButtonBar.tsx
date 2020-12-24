import React from "react";
import s from './ButtonBar.module.css'
import {NavLink} from "react-router-dom";


function ButtonBar() {
    return <div className={s.ButtonBar}>
        <div className={s.content}>
            <div className={s.item}>
                <NavLink to='/SingUp' activeClassName={s.active}>Sing Up</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/PhoneBook' activeClassName={s.active}>Phone Book</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Calendar' activeClassName={s.active}>Calendar</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/SandBox' activeClassName={s.active}>SandBox</NavLink>
            </div>
        </div>
    </div>
}

export default ButtonBar