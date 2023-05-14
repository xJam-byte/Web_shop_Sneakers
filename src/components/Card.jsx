import React, { useState } from "react";

const Card = (props) => {

    const [checked, setChecked] = useState(false);
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setChecked(!checked);
    }
    const handleLikedClick = () => {
        setLiked(!liked);
    }
    return(
        <div className="card">
            <div className="card_favorite">
                <img src={liked ? "/img/with.svg" : "/img/without.svg"} alt="Unliked" onClick={handleLikedClick}/>
            </div>
            <img width={133} height={112} src={props.image} alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className="button" onClick={handleClick} width={28} height={28} src={checked ? "/img/checked.svg" : "/img/Cross.svg"} alt="Sneaker" />            
            </div>
        </div>
    )
}

export default Card;