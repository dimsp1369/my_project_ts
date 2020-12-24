import React, {useState, useRef} from "react";


interface ICount {
    id: number
    value: number
    mode: boolean
}


function Counter() {

    const [list, setList] = useState<ICount[]>([])
    // const [mode, setMode] = useState<ICount[]>([])
    const handleCounterValue = useRef<HTMLInputElement>(null)
    // const editModeValue = useRef<HTMLInputElement>(null)

    const addCounter = () => {
        setList([...list, {id: Math.random() * 10, value: 0, mode: false}])
    }
    const onClickPlus = (counterID: number) => {
        const newList = list.map(el => {
            if (el.id === counterID) {
                el.value++
            }
            return el
        })

        setList(newList)
    }
    const onClickMinus = (counterID: number) => {
        const newList = list.map(el => {
            if (el.id === counterID) {
                el.value--
            }
            return el
        })
        setList(newList)
    }
    const onClickClear = (counterID: number) => {
        setList(list.map(el => {
            if (el.id === counterID) el.value = 0
            return el
        }))
    }
    const removeAllCounters = () => {
        setList(list.slice(0, 0))
    }
    const removeCounter = (counterID: number) => {
        setList(list.filter(el => {
            if (el.id !== counterID) return el
        }))
    }
    const addHandleCounter = () => {
        if (handleCounterValue.current) {
            const newValue = handleCounterValue.current.value
            if (newValue !== '')
                return setList([...list, {id: Math.random() * 10, value: +newValue, mode: false}])
            handleCounterValue.current.value = '';
        }
    }
    const activateEditMode = (counterID: number) => {
        setList(list.map(el => {
            if (el.id === counterID) {
                el.mode = true
            }
            return el
        }))
    }
    const deactivateEditMode = () => {
        const newList = list.map(el => {
            el.mode = false
            return el
        })
        setList(newList)
    }

    // const handleEditCounter = (counterID: number) => {
    //     const newList = list.map(el => {
    //         if (el.id === counterID) {
    //             if (editModeValue.current) {
    //                 const editValue = editModeValue.current.value
    //                 if (editValue !== '')
    //                     return setList([...list, {id: Math.random() * 10, value: +editValue, mode: false}])
    //             }
    //         }
    //         setList(newList)
    //     })
    // }


    const editModeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newList = list.map(el => {
            el.value = +e.target.value
            return el
        })
        setList(newList)
        // console.log(+e.target.value)
    }


    return <div>
        <button onClick={addCounter}>Add counter</button>
        <button onClick={removeAllCounters}>Remove all counters</button>
        <div>
            <input ref={handleCounterValue} type="text"/>
            <button onClick={addHandleCounter}>Add</button>
        </div>
        <hr/>
        {list.map(el => <div key={el.id}>
            <button onClick={() => onClickMinus(el.id)}>-</button>
            {!el.mode &&
            <span onDoubleClick={() => activateEditMode(el.id)}>{el.value}</span>
            }
            {el.mode &&
            // <span> <input ref={editModeValue} type="text" autoFocus={true} value={el.value}/> <button
            //     onClick={() => handleEditCounter(el.id)}>Edit</button>
            // </span>
            <span> <input onChange={editModeValue} type="text" autoFocus={true} value={el.value}
                          onBlur={deactivateEditMode}/> </span>
            }
            <button onClick={() => onClickPlus(el.id)}>+</button>
            <button onClick={() => onClickClear(el.id)}>clear</button>
            <button onClick={() => removeCounter(el.id)}>Remove</button>
        </div>)}
    </div>
}

export default Counter