import React, {useState} from "react";
import {IQuiz} from "./Quiz";
import Unit from "./Unit";


interface IProps {
    tryAgain(): void;

    quiz: IQuiz[]
    quizResult: IQuiz[]
    inputAnswer: string;
    wrongAnswer: number
    correctAnswer: number

    addQuiz(): void

    setInputAnswer(value: string): void;

    acceptAnswer(id: number): void;
}

function Units(props: IProps) {
    const [startButton, setStartButton] = useState<boolean>(true)
    const [currentQuiz, setCurrentQuiz] = useState<number>(0)
    const [openResult, setOpenResult] = useState<boolean>(false)

    const startQuiz = () => {
        setStartButton(false)
        props.addQuiz()
    }

    const nextQuiz = () => {
        props.addQuiz()
        setCurrentQuiz(currentQuiz + 1)
    }

    return <div>
        {!openResult && <>
            {
                startButton ? <button onClick={startQuiz}>Start</button> :
                    <>
                        {props.quiz.map((el, i) => <div key={el.id}>
                            <Unit el={el} i={i} inputAnswer={props.inputAnswer} setInputAnswer={props.setInputAnswer}
                                  acceptAnswer={props.acceptAnswer} currentQuiz={currentQuiz}
                                  setOpenResult={setOpenResult} nextQuiz={nextQuiz}/>
                        </div>)}
                    </>
            }
        </>}
        {openResult && <>
            <span>Your Results</span>
            <hr/>
            {props.quizResult.map(el =>
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