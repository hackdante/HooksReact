import { useState } from "react";

export const useCounter = (initialCounter = 0) => {
    const [counter, setCounter] = useState(initialCounter);
    const increment = (factor = 1) => {
        setCounter(counter + factor)
    };
    const reset = () => {
        setCounter(initialCounter)
    };

    const decrement = (factor = 1) => {
        const minimalDecrement = counter - factor
        if (minimalDecrement < 0) {
            reset()
        } else {
            setCounter(counter - factor)
        }
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}



