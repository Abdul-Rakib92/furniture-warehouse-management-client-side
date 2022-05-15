import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetch("https://stormy-island-92577.herokuapp.com/inventoryItem")
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);
  return [inventoryItems, setInventoryItems];
};

export default useInventories;
