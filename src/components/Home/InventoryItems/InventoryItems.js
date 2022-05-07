import React, { useEffect, useState } from 'react';

const InventoryItems = () => {

    const [InventoryItems, setInventoryItems] = useState([]);

    useEffect( () => {
        fetch('inventories.json')
        .then(res => res.json())
        .then(data => setInventoryItems(data))
    }, [])


    return (
        <div>
            <h2>this is Inventory Items</h2>
        </div>
    );
};

export default InventoryItems;