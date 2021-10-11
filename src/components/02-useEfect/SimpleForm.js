import React, { useState, useEffect } from 'react'
import { Message } from './Message';
import './effects.css'


export const SimpleForm = () => {

    const [stateForm, setForm] = useState({
        name: '',
        email: '',
    });

    const { name, email } = stateForm;

    useEffect(() => {

        console.log('Hey... stateForm Change!!!')
    }, [stateForm])




    const handleInputChange = ({ target }) => {
        setForm({
            ...stateForm,
            [target.name]: target.value,
            [target.email]: target.value

        })
    }
    return (
        <>
            <h1 className="text-center">SimpleForm Use EFFECT</h1>
            <h6 className="text-center">(Put the words "Check Coordinates")</h6>
            <div className="form-group">
                <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="your name"
                    autoComplete="false"
                    value={name}
                    onChange={handleInputChange}
                />

                <input type="email"
                    name="email"
                    className="form-control"
                    placeholder="your email"
                    autoComplete="false"
                    value={email}
                    onChange={handleInputChange}
                />

            </div>
            <hr />
           <p className="text-center">{(name === 'Check' && email === 'Coordinates') && <Message />}</p> 
        </>
    )
}
