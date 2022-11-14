import React, {useState} from 'react';
import './Snack.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Snack = ({item, imgLink, price}) => {
    // could pass down function here to handle the click

    const [qty, setQty] = useState(0);

    const total = (qty * price) || 0;

    const handleAdd = () => setQty(qty + 1);

    const handleCheckout = () => setQty(0);

    return (
        <div className='snack'>
            <img className='snack-image' src={imgLink} alt=''/>
            <div className='order-summary'>
                <div>Qty: {qty}</div>
                <div>Price: {price}</div>
                <div><b>Total: ${total}</b></div>
            </div>
            <div>
                <button onClick={handleAdd}>Add {item}</button>
                <button onClick={handleCheckout}><Link to='/'>Checkout</Link></button>
                <button><Link to="/">Go Back</Link></button>
            </div>
        </div>
    )
}

export default Snack;