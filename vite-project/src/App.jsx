import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student'
import Student from './student'


function App() {
  const[count , setCount]=useState(0);

  const increment=()=>{
    setCount(count+1);
  };

  const decrement=()=>{
    setCount(count-1);
  };
  return (
    <>
     <Student name={'Vansh'} age={18}/>
                 
    </>
  )
}

export default App