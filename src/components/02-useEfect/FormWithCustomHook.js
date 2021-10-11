import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;


    useEffect(() => {
        console.log('Email Change')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)

    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-center">Form with Custom Hook</h1>
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

                <input type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    autoComplete="false"
                    value={password}
                    onChange={handleInputChange}
                />

            </div>
            <hr />

            <button type="submit" className="btn btn-large btn-success">Save Form</button>
        </form>
    )
}
