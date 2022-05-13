import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventoryItem")
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center text-primary mb-3 mt-5">Inventory Items</h2>

      <div className="row">
        {inventoryItems.map((inventoryItem) => (
          <InventoryItem
            key={inventoryItem._id}
            inventoryItem={inventoryItem}
          ></InventoryItem>
        ))}
        <Link to={`/manageInventories`}>
          <button className="btn btn-primary w-25 d-block border-0 rounded-2 p-2 mx-auto mt-5">Manage Inventory</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryItems;
