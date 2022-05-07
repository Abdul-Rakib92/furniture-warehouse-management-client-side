import React from 'react';
import notfound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>This page is Not Available</h2>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;