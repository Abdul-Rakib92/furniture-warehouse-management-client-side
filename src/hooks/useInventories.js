import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventoryItem")
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);
  return [inventoryItems, setInventoryItems];
};

export default useInventories;
