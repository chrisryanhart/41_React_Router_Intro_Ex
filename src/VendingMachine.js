import React from 'react';
import './VendingMachine.css';
import { vendingMachineImg } from './imageLinks';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const VendingMachine = () => {


    return (
        <div>
            <h1>Welcome customers to the vending machine</h1>

            <h2>Pick a snack from the vending machine</h2>
            <img className='vendingMachine-image' src={vendingMachineImg} alt=''/>
            <div className='machine-buttons'>
                <button><Link to="/coke">Coke</Link></button>
                <button><Link to="/chips">Chips</Link></button>
                <button><Link to="/gummies">Gummies</Link></button>
            </div>

        </div>
    );
}

export default VendingMachine;

// Vending Machine
// https://images.unsplash.com/photo-1625650484478-113df4bfc370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// Chips
// https://images.unsplash.com/photo-1528751014936-863e6e7a319c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60

// Soda
// https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60

// Gummies
// https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80