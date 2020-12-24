import React from "react";
import s from './SingUp.module.css'


function SingUp() {
    return <div className={s.Main}>
        <div className={s.item}>
            <form action="/singup">
                Sing Up
                <div>
                    <input type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <input type="text" placeholder='Email address'/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default SingUp