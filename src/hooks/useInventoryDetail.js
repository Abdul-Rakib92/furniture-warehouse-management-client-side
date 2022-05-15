import { useEffect, useState } from "react";

const useInventoryDetail = inventoryItemId => {
    const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    const url = `https://stormy-island-92577.herokuapp.com/inventoryItem/${inventoryItemId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
      
  }, [inventoryItemId]);
  return[inventoryItem]

}

export default useInventoryDetail;