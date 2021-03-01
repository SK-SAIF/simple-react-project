import React from 'react';
import './Budget.css'

const Budget = (props) => {
    const money=props.total;
    let sum=0;
    for (let i = 0; i < money.length; i++) {
        let newMoney = money[i].salary;
        sum=sum+newMoney;
    }
    return (
        <div className="budget">
            <h2>Total budget</h2>
            <p>${sum}</p>
        </div>
    );
};

export default Budget;<h2>This is total budget</h2>