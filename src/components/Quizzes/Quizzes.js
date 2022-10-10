import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const { name, logo, questions, total } = quizzes;
    // console.log(quizzes)
    // console.log(questions)
    return (
        <div>
            <h2 className='text-3xl'>Quiz of {name}</h2>
            <div>
                {
                    questions.map(quest => <Question quest={quest} key={quest.id}></Question>)
                }
            </div>
        </div>
    );
};

export default Quizzes;