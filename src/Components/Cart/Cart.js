import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
   
    return (
        <div className="player-cart">
            <div>
                <h1>Total Player:{props.added.length}</h1>
            </div>
            <div>
                <h3>Player list:</h3>
                <ul>
                    {
                        props.added.map(onePlayer=><li>{onePlayer.fullname}</li>)
                    }
                </ul>
            </div>
            
        </div>
    );
};
export default Cart;