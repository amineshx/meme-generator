import React from 'react';
import troll from '../images/Troll Face.png';


function Nav (){
    return(
        <nav>
            <img src={troll} className='troll-pic' />
            <p className='title'>Meme Generator</p>
            <p className='idk'>React Course - Project 3</p>
        </nav>
    )
}; export default Nav