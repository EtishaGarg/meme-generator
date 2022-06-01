import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function handleClick(event) {
        const arr = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * arr.length)
        const url = arr[randomNumber].url;
        setMeme(prevMemeImage => ({
            ...prevMemeImage,
            randomImage : url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder = "Top Text" 
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder = "Bottom Text" 
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={handleClick} 
                    className="form--button">Get a new meme image🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}