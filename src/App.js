import React, { useState, } from 'react'
import UpperComp from './components/UpperComp'
import { ToastContainer } from 'react-toastify'
import LowerComp from './components/LowerComp'
import { mainContext } from './ContextApi'
const App = () => {
  const[methods,setMethods] = useState([]);
  const addMethod=(item)=>{
    setMethods({...methods,...item});
  }
  const data={
    addMethod,
    ...methods
  }
  return (
    <div className='cont'>
      <mainContext.Provider value={data}>
        <ToastContainer/>
        <UpperComp/>
        <LowerComp/>
      </mainContext.Provider>
    </div>
  )
}

export default App
