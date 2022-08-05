import React from 'react'

const Things = () => {
    const thingsArray = ["Things 1", "Things 2"]

    function addThing(){
        const newThing = `Things ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        console.log(thingsArray)
    }

  return (
    <div>
        <button onClick={addThing}>Add Item</button>
        {thingsArray.map((thing) => <p key={thing}>{thing}</p>)}
    </div>
  )
}

export default Things