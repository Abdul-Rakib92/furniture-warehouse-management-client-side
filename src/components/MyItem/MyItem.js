import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useMyItem from "../../hooks/useMyItem";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [items, setItems] = useMyItem();

  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;
      const url = `https://stormy-island-92577.herokuapp.com/myItem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItems();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://stormy-island-92577.herokuapp.com/myItem/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter(
            (item) => item._id !== id
          );
          setItems(remaining);
        });
    }
  };

  return (
    <div className="row">
      <h2>Selected Items: {myItems.length}</h2>
      <h2 className="text-primary text-center mt-5">My Items</h2>

      {myItems.map((myItem) => (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4" key={myItem._id}>
          <div className="container mt-5">
            <div className="card my-item">
              <div>
                <img className="card-img-top w-100" src={myItem.img} alt="" />
              </div>
              <div className="card-body">
                <h2 className="card-title">{myItem.name}</h2>
                <p>Price: {myItem.price}</p>
                <p>Quantity: {myItem.quantity}</p>
                <p>SupplierName: {myItem.supplierName}</p>
                <p className="card-text">{myItem.description}</p>

                <button
                  className="btn btn-danger w-25 d-block border-0 rounded-2 p-2 mx-auto mb-2"
                  onClick={() => handleDelete(myItem._id)}
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

export default MyItem;
