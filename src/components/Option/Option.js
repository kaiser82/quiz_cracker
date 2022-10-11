import React, { useState } from 'react';

const Option = ({ option, correctAnswer }) => {
    console.log(correctAnswer)
    const [quiz, setQuiz] = useState();
    console.log(quiz)
    // if (quiz === correctAnswer) {
    //     alert("correct")
    // }
    // quiz === correctAnswer ? alert('correct') : alert('wrong');

    return (
        <div className='flex items-center border border-indigo-500 p-3 rounded-lg'>
            <input onChange={(e) => setQuiz(e.target.value)} type="radio" name="quiz" value={option} className="radio radio-primary" />
            <p className='text-left pl-3'>{option}</p>

        </div>
    );
};

export default Option;