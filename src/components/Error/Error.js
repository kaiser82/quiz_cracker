import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Error = () => {
    return (
        <div className='m-5 p-5 space-y-5'>
            <h3 className='text-3xl'>Error! 404!!</h3>
            <FontAwesomeIcon className='text-5xl text-red-600' icon={faXmarkCircle} />
            <h4 className='text-xl'>Page not found !!!</h4>
        </div>
    );
};

export default Error;