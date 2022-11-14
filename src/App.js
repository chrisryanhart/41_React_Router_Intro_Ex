import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import { chipImg, sodaImg, gummyImg } from './imageLinks';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Snack from './Snack';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
                <Route exact path='/'>
                    <VendingMachine/>

                </Route>
                <Route exact path="/coke">
                    <Snack item="Coke" imgLink={sodaImg} price={1.25}/>
                </Route>
                <Route exact path="/chips">
                    <Snack item="Chips" imgLink={chipImg} price={1.50}/>
                </Route>
                <Route exact path="/gummies">
                    <Snack item="Gummies" imgLink={gummyImg} price={2.00}/>
                </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
