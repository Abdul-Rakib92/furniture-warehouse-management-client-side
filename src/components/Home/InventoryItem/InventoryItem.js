import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({inventoryItem}) => {

    const {name, img, description, price, quantity, supplierName} = inventoryItem;

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='card inventoryItem'>
                <img src={img} className='card-img-top' alt="" />
                <div className='card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>SupplierName: {supplierName}</p>
                    <p className='card-text'>{description}</p>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;