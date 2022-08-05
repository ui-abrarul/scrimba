import React from 'react'

const Box = (props) => {


    //Box challenge local state of box //// we dont directly modify the incoming props

    //we give each box state to handle //there is a better way to do this

    console.log(props)

    const styles = {
        backgroundColor: props.on ? "#222" : ""
    }


    return (
        <div 
        onClick={() => props.toggleBox(props.id)} 
        style={styles} 
        className='box'
        >
        </div>
    )
}

export default Box