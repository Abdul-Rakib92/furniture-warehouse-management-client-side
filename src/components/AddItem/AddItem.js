import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventoryItem`;
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
  };


  return (
    <div className="w-50 mx-auto">
      <h2>Please add a Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <textarea
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Supplier Name"
        //   type="number"
          {...register("supplierName")}
        />
        <input
          className="mb-3 border border-success rounded-pill p-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="bg-primary w-25 d-block border-0 rounded-pill p-3" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddItem;
