import React from 'react';
import { useCounter } from '../../hooks/useCounter'
import './counter.css';


export const CounterWithCustomHook = () => {
    const incrementFactor = 6;
    const decrementFactor = 6;
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary mx-3" onClick={() => increment(incrementFactor)} >+ {incrementFactor}</button>
            <button className="btn btn-danger mx-3" onClick={reset}>RESET</button>
            <button className="btn btn-primary mx-3" onClick={() => decrement(decrementFactor)} >-{decrementFactor}</button>
        </>
    )
}
