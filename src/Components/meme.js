import React, { useState, useEffect } from "react";
import datas from "../data";

function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/43a45p.png"
    });

    const [allMemeImages, setAllMemeImages] = useState()

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    // useEffect(function () {
    //     fetch(`https://api.imgflip.com/get_memes`)
    //         .then(res => res.json())
    //         .then(data => setAllMemeImages(data.data.memes))
    // }, [])
    
        //another method 
    useEffect(()=> {
        async function getMemes (){
        const res = await fetch(`https://api.imgflip.com/get_memes`)
        const data = await res.json()
        setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])
    
    console.log(allMemeImages)

    function getmemeimg() {
        const Arrdata = allMemeImages;
        const randomNumber = Math.floor(Math.random() * Arrdata.length);
        // const {url} = Arrdata[randomNumber];
        const url = Arrdata[randomNumber].url;
        setMeme(preMeme => {
            return {
                ...preMeme,
                randomImage: url
            }
        })
    }

    return (
        <div>
            <div className="Meme">
                <input
                    type="text"
                    className="myinput"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="myinput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="mybtn" onClick={getmemeimg}>Get a new meme image  🖼</button>
            </div>
            <div className="picturs-container">
                <img src={meme.randomImage} className="mymemeimg" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}; export default Meme