import React from "react";
import {IQuiz} from "./Quiz";
import Unit from "./Unit";


interface IProps {
    startQuiz: () => void;
    currentQuiz: number;
    nextQuiz: () => void;
    startButton: boolean;
    openResult: boolean;
    setOpenResult: any;
    quiz: IQuiz[]
    inputAnswer: string;
    wrongAnswer: number
    correctAnswer: number

    setInputAnswer(value: string): void;

    acceptAnswer(id: number): void;

    tryAgain(): void;
}

function Units(props: IProps) {

    return <div>
        {!props.openResult && <>
            {
                props.startButton ? <button onClick={props.startQuiz}>Start</button> :
                    <>
                        {props.quiz.map((el, i) => <div key={el.id}>
                            <Unit el={el} i={i} inputAnswer={props.inputAnswer} setInputAnswer={props.setInputAnswer}
                                  acceptAnswer={props.acceptAnswer} currentQuiz={props.currentQuiz}
                                  setOpenResult={props.setOpenResult} nextQuiz={props.nextQuiz}/>
                        </div>)}
                    </>
            }
        </>}
        {props.openResult && <>
            <span>Your Results</span>
            <hr/>
            {props.quiz.map(el =>
                <div
                    key={el.id}>{el.firstNum} {el.sign} {el.secondNum} = {el.inputRes} {el.result() === +el.inputRes ? 'Correct' : 'Wrong'} {el.result()}</div>)}
            <hr/>
            Correct - {props.correctAnswer} / Wrong - {props.wrongAnswer}
            <div>
                <button onClick={props.tryAgain}>Try again</button>
            </div>
        </>}
    </div>
}

export default Units