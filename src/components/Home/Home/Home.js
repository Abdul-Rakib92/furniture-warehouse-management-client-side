import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <>
            <h2>This is Home</h2>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </>
    );
};

export default Home;