import React from 'react';
import './Snack.css'
import { BrowserRouter, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';


const Snack = ({item, imgLink}) => {
    // could pass down function here to handle the click

    return (
        <div className='snack'>
            <img className='snack-image' src={imgLink} />
            <button>Buy {item}</button>
            <button><Link to="/">Go Back</Link></button>
        </div>
    )
}

export default Snack;