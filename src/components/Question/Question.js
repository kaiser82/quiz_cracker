import React from 'react';
import Option from '../Option/Option';

const Question = ({ quest }) => {
    console.log(quest)
    const { question, correctAnswer, options } = quest;

    return (
        <div className='lg:w-2/3 mx-auto space-y-6 shadow-lg m-5 p-5 rounded-lg'>

            <h4 className='text-xl font-semibold'>Quiz: {question}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    options.map(option => <Option option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;