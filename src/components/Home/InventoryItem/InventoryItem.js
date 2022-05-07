import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({inventoryItem}) => {

    const {name, img, description, price, quantity, supplierName} = inventoryItem;

    return (
        <div className='inventoryItem'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>SupplierName: {supplierName}</p>
            <p>{description}</p>
            <button>Update</button>
        </div>
    );
};

export default InventoryItem;