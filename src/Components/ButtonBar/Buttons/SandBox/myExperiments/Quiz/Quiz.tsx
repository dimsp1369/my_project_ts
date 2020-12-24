import React, {useState} from "react";
import Units from "./Units";


export interface IQuiz {
    id: number
    firstNum: number
    secondNum: number
    sign: string
    result: () => number | undefined
    inputRes: string
    inputToggle: boolean
}

function Quiz() {
    const [quiz, setQuiz] = useState<IQuiz[]>([])
    const [quizResult, setQuizResult] = useState<IQuiz[]>([])
    const [inputAnswer, setInputAnswer] = useState<string>('')
    const [correctAnswer, setCorrectAnswer] = useState<number>(0)
    const [wrongAnswer, setWrongAnswer] = useState<number>(0)


    const signs = ['+', '-', '*', '/']

    const addQuiz = () => {
        setQuiz([...quiz, {
            id: Math.random(),
            firstNum: Math.floor(Math.random() * 10),
            secondNum: Math.floor(Math.random() * 10),
            sign: signs[Math.floor(Math.random() * signs.length)],
            result: function () {
                switch (this.sign) {
                    case '+' :
                        return this.firstNum + this.secondNum;
                    case '-':
                        return this.firstNum - this.secondNum;
                    case '*':
                        return this.firstNum * this.secondNum;
                    case '/': return +(this.firstNum / this.secondNum).toFixed(1)
                }
            },
            // result: function () {
            //     return eval(`${this.firstNum}${this.sign}${this.secondNum}`)
            // },
            inputRes: inputAnswer,
            inputToggle: true
        }])
    }

    const addQuizResult = (id: number) => {
        const newResultsList = quiz.map(el => {
            if (el.id === id) {
                quizResult.push(el)
            }
            return el
        })
        setQuizResult(newResultsList)
    }

    const acceptAnswer = (id: number) => {
        setQuiz(quiz.map(el => {
            if (inputAnswer !== '' && !isNaN(+inputAnswer)) {
                if (el.id === id) {
                    if (el.result() === +inputAnswer) {
                        setCorrectAnswer(correctAnswer + 1)
                        el.inputRes = inputAnswer
                        el.inputToggle = false
                    } else if (el.result() !== +inputAnswer) {
                        setWrongAnswer(wrongAnswer + 1)
                        el.inputRes = inputAnswer
                        el.inputToggle = false
                    }
                }
            }
            return el

        }))
        setInputAnswer('')
        addQuizResult(id)
    }


    const tryAgain = () => {
        window.location.reload()
    }

    return <div>
        <Units quiz={quiz} addQuiz={addQuiz} inputAnswer={inputAnswer} setInputAnswer={setInputAnswer}
               acceptAnswer={acceptAnswer}
               correctAnswer={correctAnswer} wrongAnswer={wrongAnswer}
               quizResult={quizResult}
               tryAgain={tryAgain}
        />
    </div>
}

export default Quiz