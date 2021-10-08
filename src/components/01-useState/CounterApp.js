import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counterA: 10, counterB: 15, counterC: 1, counterD: 8
    });

    const { counterA, counterB, counterC, counterD } = counter;
    return (
        <>
            <h1>CounterA: {counterA}</h1>
            <h1>CounterB: {counterB}</h1>
            <h1>CounterC: {counterC}</h1>
            <h1>CounterD: {counterD}</h1>

            <hr />
            <button onClick={() => setCounter({ ...counter, counterB: counterB + 1 })} className="btn btn-primary">+1</button>
        </>
    )
}
