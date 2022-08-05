import React from 'react'

const Box = (props) => {


    //Box challenge local state of box //// we dont directly modify the incoming props

    //we give each box state to handle //there is a better way to do this


    const [boxState, setBoxState] = React.useState(props.on)


    function flipBox() {
        setBoxState(prevstate => !prevstate)
    }


    const styles = {
        backgroundColor: boxState ? "#222222" : ""
    }

    return (
        <div onClick={flipBox} style={styles} className='box'></div>
    )
}

export default Box