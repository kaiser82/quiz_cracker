import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {
    console.log(correctAnswer)

    const handleRadio = (e) => {
        if (e.target.value === correctAnswer) {
            return toast.success('correct answer.', { theme: "colored", })
        }
        else {
            return toast.error('wrong answer!!', { theme: "colored" })
        }
    }

    return (
        <div className='flex items-center border border-indigo-500 p-3 rounded-lg'>

            <input onChange={(e) => handleRadio(e)} type="radio" name="quiz" value={option} className="radio radio-primary" />
            <p className='text-left pl-3'>{option}</p>
            <ToastContainer />
        </div>
    );
};

export default Option;