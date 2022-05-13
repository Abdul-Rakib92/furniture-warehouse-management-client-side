import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";

const ManageInventories = () => {
  const [inventoryItems, setInventoryItems] = useInventories();

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
      const url = `http://localhost:5000/inventoryItem/${id}`;
      console.log(url);
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = inventoryItems.filter(inventoryItem => inventoryItem._id !== id);
        setInventoryItems(remaining);
      })
    }
  }

  return (
    <div className="row">
      <h2 className="text-center">This is manage Inventories</h2>

      <Link to={`/additem`}>
          <button className="btn btn-primary w-25 d-block border-0 rounded-2 p-2 mx-auto mt-5">Add New Item</button>
        </Link>
      {inventoryItems.map((inventoryItem) => (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4" key={inventoryItem._id}>


          <div className="container mt-5">
            <div className="card inventory-item ">
              <div>
                <img
                  src={inventoryItem.img}
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{inventoryItem.name}</h3>
                <p>Price: {inventoryItem.price}</p>
                <p>Quantity: {inventoryItem.quantity}</p>
                <p>SupplierName: {inventoryItem.supplierName}</p>
                <p className="card-text">{inventoryItem.description}</p>

                <button
                  className="bg-primary w-25 d-block border-0 rounded-2 p-2 mx-auto mb-2"
                  onClick={() => handleDelete(inventoryItem._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageInventories;
