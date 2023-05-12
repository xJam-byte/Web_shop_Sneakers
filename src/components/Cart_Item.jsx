import React from "react";
const Cart_Item = () => {
    return(
    <div className="cart_item d-flex align-center mb-20">                    
        <div style={{backgroundImage: "url(/img/sneakers/1.jpg)"}} className="cart_item_img"></div>
        <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>                        
        </div>
        <img className="remove_btn" src="/img/btn-remove.svg" alt="Remove" />
    </div>
    )
}

export default Cart_Item;