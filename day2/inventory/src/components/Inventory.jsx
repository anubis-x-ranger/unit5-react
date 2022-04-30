import React from 'react'
import { useState } from 'react'
import "./inventory.css"
const Inventory = () => {
    const [books, setbooks] = useState(15);
    const [pens, setpens] = useState(20);
    const [notebooks, setnotebooks] = useState(25);
    const handleIncrementnb = (value) => {
        if(notebooks>0){
            setnotebooks(notebooks + value);
        }
      
    };
    const handleIncrementb = (value) => {
        if(books>0){
            setbooks(books + value);
        }
    };
    const handleIncrementp = (value) => {
        if(pens>0){
            setpens(pens + value);
        }
      
    };
    return (
      <>
      <div className='item'>
          <span>Books:</span>
          <button className="btn" onClick={() => handleIncrementb(1)}>
            +
          </button>
          <button className="btn" onclick={() => handleIncrementb(-1)}>
            -
          </button>
          <span className="total">{books}</span>
        </div>
        <div className='item'>
          <span>Pens:</span>
          <button className="btn" onClick={() => handleIncrementp(1)}>
            +
          </button>
          <button className="btn" onclick={() => handleIncrementp(-1)}>
            -
          </button>
          <span className="total">{pens}</span>
        </div>
        <div className='item'>
          <span>NoteBooks:</span>
          <button className="btn" onClick={() => handleIncrementnb(1)}>
            +
          </button>
          <button className="btn" onclick={() => handleIncrementnb(-1)}>
            -
          </button>
          <span className="total">{notebooks}</span>
        </div>
        <div>
            <h3>Total: {books+pens+notebooks}</h3>
        </div>
      </>
    );
}

export default Inventory