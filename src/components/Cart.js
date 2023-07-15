import React, { useState } from "react";
import axios from "axios";

import Info from "./Info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart(props) {
  const { onClose, setCartItems, cartItems } = React.useContext(AppContext);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setorderId] = useState(null);
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://648aadcd17f1536d65e97176.mockapi.io/orders",
        { items: cartItems }
      );

      setorderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://64662687228bd07b355d299f.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }

      // => catch
    } catch (error) {
      alert("Ошибка при создании заказа");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="remove_btn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {props.items.length > 0 ? (
          <div className="d-flex flex-column parent">
            <div className="items">
              {props.items.map((item, index) => (
                <div
                  key={index}
                  className="cart_item d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="cart_item_img"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} тг.</b>
                  </div>
                  <img
                    onClick={() => props.onRemove(item.id)}
                    className="remove_btn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cart_total_block">
              <ul>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice * 5) / 100} тг.</b>
                </li>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice * 0.95} тг.</b>
                </li>
              </ul>

              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="green_button"
              >
                Оформить заказ <img src="/img/btn-arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderCompleted
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
