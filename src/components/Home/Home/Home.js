import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InventoryItems from '../InventoryItems/InventoryItems';
import Owner from '../Owner/Owner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Owner></Owner>
            <Contact></Contact>
        </>
    );
};

export default Home;