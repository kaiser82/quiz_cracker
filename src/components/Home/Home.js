import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics)
    return (
        <div className='bg-gray-100 p-2'>

            <div className="bg-[url('https://www.news-medical.net/images/news/ImageForNews_722328_16605707865419041.jpg')] h-[150px] md:h-[250px] mb-5 bg-cover flex items-center justify-center">
                <h2 className='text-3xl md:text-5xl font-semibold text-white'>Test Your Brain Size</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 lg:w-10/12 mx-auto'>
                {
                    topics.map(topic => <Topic topic={topic} key={topic.id}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;