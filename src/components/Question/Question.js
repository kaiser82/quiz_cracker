import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ({ quest, total }) => {
    // console.log(quest)

    const { question, correctAnswer, options } = quest;
    const showAnswer = () => toast(`Correct answer is: ${correctAnswer} `)

    return (
        <div className='lg:w-2/3 mx-auto space-y-6 shadow-lg m-5 p-5 rounded-lg'>

            <div className='grid grid-cols-6 gap-4 justify-center items-center '>
                <h4 className='col-span-6 md:col-span-5 text-xl font-semibold text-indigo-800'>Quiz: {question}</h4>
                <FontAwesomeIcon onClick={showAnswer} className=' text-lg text-indigo-700 ml-20 cursor-pointer' icon={faEye} />
                <ToastContainer />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    options.map(option => <Option option={option} key={Math.random()} correctAnswer={correctAnswer}></Option>)

                }
            </div>
        </div>
    );
};

export default Question;