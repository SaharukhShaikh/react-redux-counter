import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import React from 'react'

function Counter() {
    const num = useSelector((state)=>state.num)
    const [num2, setNum2] = useState(0)
    const dispatch = useDispatch();
    
    // const num2=0
    const incrementNum = ()=> {
        dispatch({ type: 'INCREASE' })
    }
    const decrementNum = () => {
        dispatch({type: 'DECREASE'})
    }
    const handleChange = (e) => {
        setNum2(e.target.value) 
    }
    const incrementBy = () => {
        dispatch({type: 'INCREASEBY', payload:Number(num2)})
    }

    
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{num}</h2>
            <button onClick={incrementNum}>Increment by 1</button> <br/><br/>
            <button onClick={decrementNum}>Decrement by 1</button> <br /><br />
            <input type='number' onChange={handleChange} />
            <button type='submit' onClick={incrementBy}>Increment by {num2}</button>
        </div>
  )
}

export default Counter
