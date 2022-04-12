import React from 'react'
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo'
import CounterOne from './components/CounterOne'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'

const App = () => {
  return (
    <div className='App'>
      <CounterOne>{(count, incrementCount) =>( <ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterOne>
      <CounterOne>
         { (count, incrementCount) =>( <HoverCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterOne>
    </div>
  )
}

export default App