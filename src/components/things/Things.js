import React from 'react'

const Things = () => {

  // Complex state Arrays
    const thingsData = ["Things 1", "Things 2"]

    const [thingsArray,setThingsArray] = React.useState(thingsData)

    function addThing(){
        setThingsArray(prevThingsArray => [...prevThingsArray, `Things ${prevThingsArray.length + 1}`])
    }

  return (
    <div>
        <button onClick={addThing}>Add Item</button>
        {thingsArray.map((thing) => <p key={thing}>{thing}</p>)}
    </div>
  )
}

export default Things