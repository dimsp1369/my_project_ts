import React from "react";
import {IExample} from "./Calculator";
import s from './Calculator.module.css'


interface IProps {
    currentResult: number;
    secondDigit: string;
    inputSing: string;
    firstDigit: string;
    example: IExample[]

    setFirstDigit(value: string): void;

    setInputSing(value: string): void;

    setSecondDigit(value: string): void;

    calcResult(): void;
}


function Examples(props: IProps) {
// console.log(props.example.map(el => el.result()))
console.log(props.example)
    return <div>
       a <input className={s.inputStyle} value={props.firstDigit} onChange={e => props.setFirstDigit(e.target.value)}/>
       sing <input className={s.inputStyle} value={props.inputSing} onChange={e => props.setInputSing(e.target.value)}/>
       b <input className={s.inputStyle} value={props.secondDigit}
               onChange={e => props.setSecondDigit(e.target.value)}/> = {props.example.map((el, i: number) =>
        props.currentResult === i && <span key={el.id}>{el.result()}</span>
    )}
        <button onClick={props.calcResult}>Calculate</button>


    </div>

}

export default Examples