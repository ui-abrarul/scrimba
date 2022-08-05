import React from 'react'
import memesData from './memesData'

const Meme = () => {

  const [memeImage,setMemeImage] = React.useState({
    firstName:"",
    lastName:"",
    randomImage:"https://i.imgflip.com/1g8my4.jpg"
  })


  const [allMemeImages,setAllMemeImages] = React.useState(memesData)

  function getMemeImage(){
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const randomUrl = memesArray[randomNumber].url
    setMemeImage(prevMeme => {
      return{
        ...prevMeme,
        randomImage: randomUrl
      }
    })
  }

  return (
    <main>
        <form>
            <input type="text" placeholder='First Text' className='form--input'/>
            <input type="text" placeholder='Second Text'className='form--input'/>
            <button onClick={getMemeImage} className='form--button' type='button'>Get a new meme image  🖼</button>
        </form>
        <img width={500} src={memeImage.randomImage} alt=""/>
    </main>
  )
}

export default Meme