import { useState } from 'react'

import Bar from"./components/Bar"

import './App.css'

function App() {

  let [col,setCol] = useState("cyan")
  return (
    <div className='h-screen' style={{backgroundColor:col}}>

      <Bar colFun={setCol}/>
    </div>
  )
}

export default App
