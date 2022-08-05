import React from 'react'
import Box from './Box'
import boxesdata from './boxesdata'

const Boxes = () => {

    const [squares,setSquares] = React.useState(boxesdata)


  return (
    <main>

      {  squares.map((square) => {
      return <Box 
        key = {square.id}
        on = {square.on}
      />
    })}

    </main>
  )
}

export default Boxes