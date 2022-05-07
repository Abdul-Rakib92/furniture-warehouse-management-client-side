import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItemDetail = () => {
    const {inventoryItemId} = useParams()
    return (
        <div>
            <h2>wellcome to detail: {inventoryItemId}</h2>
        </div>
    );
};

export default InventoryItemDetail;