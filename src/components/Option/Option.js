import React from 'react';

const Option = ({ option }) => {
    console.log(option)
    return (
        <div className='flex items-center border border-indigo-500 p-3 rounded-lg'>
            <input type="radio" name="radio-2" className="radio radio-primary" />
            <p className='text-left pl-3'>{option}</p>

        </div>
    );
};

export default Option;