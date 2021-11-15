import React from 'react';
import { Card } from './Card'
import './style.css'





export const Summary = () => {
    return (
        <div className={`card`} >
            <h2>Welcome!</h2>
            <em>This is my portfolio site! Feel free to explore, and tell me what you think.</em>
            <em>If you are seeing this, things are not quite fully finished: Don't panic!</em>
            {/* <img src={image} alt="" /> */}
        </div>
    )
}


