import React from "react";
import AppContext from "../context";

const Info = ({ title, description, image }) => {
  const { onClose } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center jstify-center flex-column flex">
      <img width={120} src={image} alt="empty box" className="mb-20" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={onClose} className="green_button">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
