import React from "react";
import {IQuiz} from "./Quiz";


interface IProps {
    el: IQuiz
    i: number
    inputAnswer: string;
    currentQuiz: number;

    setInputAnswer(value: string): void;

    acceptAnswer(id: number): void;

    setOpenResult(b: boolean): void;

    nextQuiz(): void
}

function Units(props: IProps) {

    const {el, i} = props
    return <div>

        {i === props.currentQuiz &&
        <>{el.inputToggle ?
            <>{el.firstNum} {el.sign} {el.secondNum} =
                <input type="text" value={props.inputAnswer} onChange={e => props.setInputAnswer(e.target.value)}/>
                <button onClick={() => props.acceptAnswer(el.id)}>Accept</button>
            </> : <>{el.firstNum} {el.sign} {el.secondNum} = {el.inputRes}
                {i < 3 ? <button onClick={props.nextQuiz}>Next</button> :
                    <button onClick={() => props.setOpenResult(true)}>Done</button>}
            </>}
        </>}

    </div>

}

export default Units