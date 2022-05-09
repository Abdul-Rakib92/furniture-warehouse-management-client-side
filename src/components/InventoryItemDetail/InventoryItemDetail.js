import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryItemDetail.css";

const InventoryItemDetail = () => {
  const { inventoryItemId } = useParams();
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventoryItem/${inventoryItemId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
  }, []);

  return (
    <div>

      <div className="container mt-5 ">
        <div className="card inventory-item d-block  mx-auto w-50 h-50">
          <div>
              <img src={inventoryItem.img} className="card-img-top w-100" alt="" />
          </div>
          <div className="card-body">
            <h3 className="card-title">{inventoryItem.name}</h3>
            <p>Price: {inventoryItem.price}</p>
            <p>Quantity: {inventoryItem.quantity}</p>
            <p>SupplierName: {inventoryItem.supplierName}</p>
            <p className="card-text">{inventoryItem.description}</p>
            <button className='btn btn-primary d-block mb-3 mx-auto' >Delivery</button>

            <div>
            <input className="mb-3 d-block mx-auto" type="number" name="" id="" />
            <button className='btn btn-primary d-block mb-3 mx-auto'>Restock</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetail;
