import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './examples.css'

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1)

    const minCounter = 1;
    const maxCounter = 30;


    const getToURL = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { loading, data } = useFetch(getToURL);
    const { author, quote } = !!data && data[0]
    return (
        <>
            <h1 className="text-center">Multiple Custom Hooks</h1>
            <h3 className="text-center">BREAKING BAD QUOTES # {counter}</h3>
            <hr />
            {loading ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquoate text-center">
                        <p>{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                {counter > minCounter &&
                    (<button className="btn btn-primary btn-sm" type="button" onClick={() => decrement(minCounter)}>Prev Quote</button>)
                }
                {counter < maxCounter &&
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => increment(maxCounter)}>Next Quote</button>
                }

            </div>
        </>
    )
}
