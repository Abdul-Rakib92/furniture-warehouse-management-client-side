import { useEffect, useState } from "react";

const useMyItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://stormy-island-92577.herokuapp.com/myItem")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};


export default useMyItem;