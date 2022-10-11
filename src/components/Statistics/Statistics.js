import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Statistics = () => {
    const quizData = useLoaderData().data;
    console.log(quizData)



    return (
        <div className='lg:w-2/3 mx-auto m-5 p-5'>
            <h1 className="text-heading text-xl p-5">
                Number of Quiz in Each Category
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={quizData} margin={{ right: 60 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="total"
                        stroke="blue" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;