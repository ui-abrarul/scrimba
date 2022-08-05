import React from 'react'
import Count from '../count/Count'

const Usestate = () => {

    const[isImportant,setIsImportant] = React.useState(true)
    const[count,setCount] = React.useState(0)
 
    function handleState(){
        setIsImportant(!isImportant)
    }

    function countMinus(){
        if(count !== 0){
        setCount(prevCount => prevCount - 1)
        }
    }

    function countPlus(){
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className='state'>
            <h1 className='state--title'>Is state important to know?</h1>
            <div className='state--value' onClick={handleState}>
                <h1>{isImportant ? "Yes" : "No"}</h1>
            </div>

            <div className="counter">
            <button onClick={countMinus} className="counter--minus">–</button>
           <Count count={count}/>
            <button onClick={countPlus} className="counter--plus">+</button>
        </div>
        </div>
    )
}

export default Usestate