import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetch("inventories.json")
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2>Inventory Items</h2>

        <div className="inventoryItems-container">

          {inventoryItems.map(inventoryItem => 
            <InventoryItem
              key={inventoryItem.id}
              inventoryItem={inventoryItem}
            ></InventoryItem>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;
