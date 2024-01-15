import { useState } from 'react'
import './App.scss'
import Greeting from './components/Greeting/Greeting';
import Hilsen from './components/Greeting/Hilsen';
import Count from './components/Counter/Counter'
import CounterComponent from './components/Counter/Count'

function App() {

  return (
    <>
    <Greeting></Greeting>
    <Hilsen></Hilsen>
    <Count></Count>
    <CounterComponent></CounterComponent>
    </>
  )
}

export default App
