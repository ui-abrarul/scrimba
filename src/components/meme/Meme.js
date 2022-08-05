import React from 'react'
import memesData from './memesData'

const Meme = () => {

  const [memeImage,setMemeImage] = React.useState()

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const randomImage = memesArray[randomNumber].url
    setMemeImage(randomImage)
  }

  return (
    <main>
        <form>
            <input type="text" placeholder='First Text' className='form--input'/>
            <input type="text" placeholder='Second Text'className='form--input'/>
            <button onClick={getMemeImage} className='form--button' type='button'>Get a new meme image  🖼</button>
        </form>
        {memeImage && <img width={500} src={memeImage} alt=""/>}
    </main>
  )
}

export default Meme