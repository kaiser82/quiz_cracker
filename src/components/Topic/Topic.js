import React from 'react';

const Topic = ({ topic }) => {
    const { logo, name, total } = topic
    return (
        <div className="card card-compact w-100 bg-base-100 shadow-xl">
            <div className='bg-indigo-100'>
                <figure><img src={logo} alt="logo" /></figure>
            </div>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Number of Quiz: {total}</p>
                    </div>
                    <div className="card-actions justify-end items-center">
                        <button className="btn btn-md btn-primary">Take Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;