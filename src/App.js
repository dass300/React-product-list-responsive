import { useState } from 'react'
import './App.css'



const App = () => {


  const [counter,setCounter] = useState(0)


  // const changeColor = ()=> {

  //   setState('Red')

    
  // }

const increment = ()=>{
  setCounter(counter+1)
}

const decrement = ()=>{
  setCounter(counter-1)

}

  

  return (
    < div className ='App'>
      <h1>React Samples</h1>
      <h2>Number changed to : {counter} </h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>
  )
  
}

export default App