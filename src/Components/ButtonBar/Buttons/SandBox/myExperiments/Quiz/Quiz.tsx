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
    const [quiz, setQuiz] = useState<IQuiz[]>([]) // Hook for the original's array
    const [inputAnswer, setInputAnswer] = useState<string>('') // hook for the input answer
    const [correctAnswer, setCorrectAnswer] = useState<number>(0) // hook for the correct answer
    const [wrongAnswer, setWrongAnswer] = useState<number>(0) // Hook for the wrong answer
    const [openResult, setOpenResult] = useState<boolean>(false) //Hook for the toggle to show results
    const [startButton, setStartButton] = useState<boolean>(true) // Hook for the toggle start button
    const [currentQuiz, setCurrentQuiz] = useState<number>(0) // hook for the show current example



    const addQuiz = () => { // function which generate the array of the examples
        const signs = ['+', '-', '*', '/']
        const newQuiz = [...quiz]
        do {
            newQuiz.push({
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
                        case '/':
                            return +(this.firstNum / this.secondNum).toFixed(1)
                    }
                },
                // result: function () {
                //     return eval(`${this.firstNum}${this.sign}${this.secondNum}`)
                // },
                inputRes: inputAnswer,
                inputToggle: true
            })
        }
        while (newQuiz.length < 4) // control of the example's quantity
        setQuiz(newQuiz)
    }

    const startQuiz = () => { //function which create and open quiz
        setStartButton(false)
        addQuiz()
    }


    const acceptAnswer = (id: number) => { // function which accept inputted and figure out correct or not
        setQuiz(quiz.map(el => {
            if (inputAnswer !== '' && !isNaN(+inputAnswer)) {
                if (el.id === id) {
                    if (el.result() === +inputAnswer) {
                        setCorrectAnswer(correctAnswer + 1)
                        el.inputRes = inputAnswer
                        el.inputToggle = false // off the current input
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
    }

    const tryAgain = () => { // function which overwrites quiz and start again
        setQuiz([])
        setOpenResult(false)
        setCurrentQuiz(0)
        setStartButton(true)
        setCorrectAnswer(0)
        setWrongAnswer(0)
    }

    const nextQuiz = () => {
        setCurrentQuiz(currentQuiz + 1)
    }



    return <div>
        <Units quiz={quiz}
               inputAnswer={inputAnswer}
               setInputAnswer={setInputAnswer}
               acceptAnswer={acceptAnswer}
               correctAnswer={correctAnswer}
               wrongAnswer={wrongAnswer}
               tryAgain={tryAgain}
               openResult={openResult}
               setOpenResult={setOpenResult}
               startButton={startButton}
               startQuiz={startQuiz}
               nextQuiz={nextQuiz}
               currentQuiz={currentQuiz}
        />
    </div>
}

export default Quiz