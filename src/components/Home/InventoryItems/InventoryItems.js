import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetch("inventories.json")
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center text-primary mb-3 mt-5">Inventory Items</h2>

      <div className="row">
        {
            inventoryItems.map(inventoryItem => <InventoryItem 
                key={inventoryItem.id}
                inventoryItem={inventoryItem}
          ></InventoryItem>)
        }
      </div>
    </div>
  );
};

export default InventoryItems;
