import React from "react";
import Cart_Item from "./Cart_Item";

const Cart = (props) => {
    return(
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={props.onCart} className="remove_btn" src="/img/btn-remove.svg" alt="Close" /></h2>
                <div className="items">
                    <Cart_Item />
                    <Cart_Item />
                </div>
                <div className="cart_total_block">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>

                    <button className="green_button">Оформить заказ <img src="/img/btn-arrow.svg" alt="Arrow" /></button>
                </div>

            </div>
        </div>
    )
}

export default Cart;