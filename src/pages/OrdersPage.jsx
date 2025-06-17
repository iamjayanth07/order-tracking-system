import React, { useEffect, useState } from "react";
import OrderTable from "../components/OrderTable";
import { db, ref, set, get, child } from "../firebase";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const snapshot = await get(child(ref(db), "orders"));
      if (snapshot.exists()) {
        setOrders(snapshot.val());
      } else {
        console.log("No orders available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const pushMockData = async () => {
    try {
      const response = await fetch("/mockData.json");
      const data = await response.json();
      await set(ref(db, "orders"), data);
      console.log("Mock data pushed to Firebase");
    } catch (error) {
      console.error("Error pushing mock data:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    // pushMockData(); //
  }, []);

  return loading ? (
    <p style={{ textAlign: "center", marginTop: "20px" }}>Loading orders...</p>
  ) : (
    <OrderTable orders={orders} />
  );
};

export default OrdersPage;

