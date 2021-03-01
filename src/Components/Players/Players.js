import React from 'react';
import './Player.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    const playerData = props.playersInfo;
    const button=props.eventHandler;
    return (

        <div>

            {playerData.map(pl =>
                <div className="each-player">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={pl.image} className="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 className="card-title">Name:{pl.fullname}</h5>
                            <h5>From {pl.country}</h5>
                            <p className="card-text">Email:{pl.email}</p>
                            <p className="card-text">Salary:${pl.salary}</p>

                            <hr />
                            <button onClick={()=>button(pl)} className="btn btn-primary" ><FontAwesomeIcon icon={faUserPlus} />Add This Player</button>
                        </div>
                    </div>
                </div>

            )

            }

        </div>
    );
};

export default Players;