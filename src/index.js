import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleForm } from './components/02-useEfect/SimpleForm';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-useState/CounterApp'

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
