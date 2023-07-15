import React from "react";
import Card from "../components/Card";
import axios from "axios";
export const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://648aadcd17f1536d65e97176.mockapi.io/orders"
        );
        //   setOrders(data.map((obj) => obj.items).flat());
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="d-flex align-center mb-40 ml-30 justify-between mt-40 mr-30">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
};
