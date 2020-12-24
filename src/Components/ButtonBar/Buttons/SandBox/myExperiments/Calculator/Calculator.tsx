import React, {useState} from "react";
import Examples from "./Examples";

export interface IExample {
    id: number
    firstNum: number
    secondNum: number
    sing: string
    result: () => number
}


function Calculator() {

    const [example, setExample] = useState<IExample[]>([])
    const [firstDigit, setFirstDigit] = useState('')
    const [secondDigit, setSecondDigit] = useState('')
    const [inputSing, setInputSing] = useState('')
    const [currentResult, setCurrentResult] = useState(-1)



    const calcResult = () => {
        setExample([...example, {
            id: Math.random(),
            firstNum: +firstDigit,
            secondNum: +secondDigit,
            sing: inputSing,
            result: function () {
                return eval(`${this.firstNum}${this.sing}${this.secondNum}`)
            }
        }])
        setCurrentResult(currentResult + 1)
    }
      return <div>
        <Examples example={example} firstDigit={firstDigit} secondDigit={secondDigit} inputSing={inputSing}
                  setFirstDigit={setFirstDigit} setSecondDigit={setSecondDigit} setInputSing={setInputSing}
                  calcResult={calcResult} currentResult={currentResult}/>

    </div>

}

export default Calculator