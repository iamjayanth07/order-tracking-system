import React, { useEffect, useState } from "react";
import OrderTable from "../components/OrderTable";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>Loading orders...</p>
      ) : (
        <OrderTable orders={orders} />
      )}
    </>
  );
};

export default OrdersPage;
