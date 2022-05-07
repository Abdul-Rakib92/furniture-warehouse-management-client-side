import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({inventoryItem}) => {

    const {id, name, img, description, price, quantity, supplierName} = inventoryItem;
    const navigate = useNavigate();

    const navigateToInventoryItemDetail = id =>{
        navigate(`/inventoryItem/${id}`);
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='card inventoryItem'>
                <img src={img} className='card-img-top w-100' alt="" />
                <div className='card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>SupplierName: {supplierName}</p>
                    <p className='card-text'>{description}</p>
                    <button onClick={() => navigateToInventoryItemDetail(id)} className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;