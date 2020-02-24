import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-item">
                <div className="card_image"><img src={"https://robohash.org/"+props.monster.id+"?set=set4"} alt="Greska" /></div>
                <div className="card_content">
                    <h2 className="card_title"> {props.monster.name}</h2>
                    <p className="card_text">{props.monster.email}</p>
                    <button className="btn card_btn">Read More</button>
                </div>
            </div>
        </div>);
}