import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {

  const [user] = useAuthState(auth);


  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `https://stormy-island-92577.herokuapp.com/inventoryItem`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(result =>{
        console.log(result);
    })

    event.preventDefault();
    const myItem = {
      email: user.email,
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      supplierName: event.target.supplierName.value,
      img: event.target.img.value

    };
    axios.post('https://stormy-island-92577.herokuapp.com/myItem', myItem)
    .then((response) => {
      console.log(response);
      const {data} = response;
      if(data.insertedId) {
        toast("Your Item Is selected");
        event.target.reset();
      }
    });

  };


  return (
    <div className="w-50 mx-auto">
      <h2>Please add a Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 border border-success rounded-pill p-2"
          type="text"
          name="name"
          placeholder="Inventory Name"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Email"
          type="email"
          name="email"
          value={user?.email}
          {...register("email")}
        />
        <textarea
          className="mb-3 border border-success rounded-pill p-2"
          name="description"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Price"
          type="number"
          name="price"
          {...register("price")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Quantity"
          type="number"
          name="quantity"
          {...register("quantity")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Supplier Name"
          type="text"
          name="supplierName"
          {...register("supplierName")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Photo URL"
          type="text"
          name="img"
          {...register("img")}
        />
        <input className="bg-primary w-25 d-block border-0 rounded-pill p-3" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddItem;
