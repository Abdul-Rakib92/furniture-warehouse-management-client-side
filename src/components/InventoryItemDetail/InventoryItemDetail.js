import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetail";
import "./InventoryItemDetail.css";

const InventoryItemDetail = () => {
  const { inventoryItemId } = useParams();
  const [inventoryItem] = useInventoryDetail(inventoryItemId);
  

  const handleUpdateUser = event => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const updatedInventoryItem = {quantity, inventoryItem};
    

    const url = `http://localhost:5000/inventoryItem/${inventoryItemId}`;
    console.log(url)
    // console.log(newQuantity);
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedInventoryItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log('success', data);
      alert('users added successfully!');
      event.target.reset();

    })

  }

  const [quantity, setQuantity] = useState(0)

  const handleDelivery = event => {
    event.preventDefault();
    // const quantity = event.target.quantity.value;
    // const minusQuantity = parseInt(inventoryItem.quantity-1)

    // const deliveryInventoryItem = {quantity, minusQuantity}

    const deliveryInventoryItem = inventoryItem.quantity(quantity-1);




    const url = `http://localhost:5000/inventoryItem/${inventoryItemId}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(deliveryInventoryItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log('success', data);
    alert('users added successfully!');
    event.target.reset();
    setQuantity(data)
    })
    
  }

  

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
            
            <button onClick={() => handleDelivery(inventoryItem.inventoryItemId)} className='btn btn-primary d-block mb-3 mx-auto' >Delivery</button>


            <div>
              <form onSubmit={handleUpdateUser}>
              <input className="mb-3 d-block mx-auto" type="text" name="quantity" placeholder="Quantity" id="" />
              <input className='btn btn-primary d-block mb-3 mx-auto' type="submit" value="Restock" />
              </form>

              <Link to={`/manageInventories`}>
                    <button className='btn btn-primary me-3'>Manage Inventory</button>
                </Link>

                <Link to={`/select/${inventoryItemId}`}>
                    <button className='btn btn-primary'>Select</button>
                </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetail;
