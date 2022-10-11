import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const { name, logo, questions, total } = quizzes;
    // console.log(quizzes)
    // console.log(questions)
    let i = 1;

    return (
        <div>
            <h2 className='text-3xl font-semibold p-5 m-2'>Quiz of <span className='text-indigo-800 font-bold'>{name}</span></h2>
            <div className="avatar ">
                <div className="w-24 rounded-full bg-indigo-200">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div >
                {
                    questions.map(quest => <Question quest={quest} key={quest.id} total={total} i={i++}></Question>)
                }
            </div>
        </div>
    );
};

export default Quizzes;