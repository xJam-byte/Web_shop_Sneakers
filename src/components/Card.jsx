import React from "react";

const Card = () => {
    return(
    <div className="card">
        <div className="card_favorite">
            <img src="/img/without.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
            </div>            
            <img className="button" width={28} height={28} src="/img/Cross.svg" alt="Sneaker" />            
        </div>
      </div>
    )
}

export default Card;