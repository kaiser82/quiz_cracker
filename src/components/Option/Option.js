import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, correctAnswer }) => {
    console.log(correctAnswer)
    const [quiz, setQuiz] = useState();
    // console.log(quiz)
    // if (quiz === correctAnswer) {
    //     alert("correct")
    // }
    // quiz === correctAnswer ? alert('correct') : alert('wrong');
    const handleRadio = (e) => {
        if (e.target.value === correctAnswer) {
            return toast('correct')
        }
        else {
            return toast('wrong')
        }
    }


    return (
        <div className='flex items-center border border-indigo-500 p-3 rounded-lg'>
            {/* <input onChange={(e) => setQuiz(e.target.value)} type="radio" name="quiz" value={option} className="radio radio-primary" /> */}
            <input onChange={(e) => handleRadio(e)} type="radio" name="quiz" value={option} className="radio radio-primary" />
            <p className='text-left pl-3'>{option}</p>
            <ToastContainer />
        </div>
    );
};

export default Option;