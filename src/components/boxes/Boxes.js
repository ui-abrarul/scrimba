import React from 'react'
import Box from './Box'
import boxesdata from './boxesdata'

const Boxes = () => {

  const [squares, setSquares] = React.useState(boxesdata)


  function toggleBox(id) {

    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })

  }


  return (
    <main>

      {squares.map((square) => {
        return <Box
          key={square.id}
          on={square.on}
          id={square.id}
          toggleBox={toggleBox}
        />
      })}

    </main>
  )
}

export default Boxes