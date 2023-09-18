import React from 'react';

const Review = ({ review }) => {
    const { name, body, star } = review;
    return (

        <div key={review.id} className='bg-slate-400  mx-28 text-left  drop-shadow-xl shadow-lg shadow-blue-500/50 rounded-xl w-3/5'><h3 className=' text-3xl p-5'>Name:{name}</h3>
            <p className='ml-3'>{body}</p>
            <p className='text-center mt-4 my-10 '><small className=' text-2xl bg-green-500 text-blue-700 rounded-full p-2  mb-10'>Star:{star}</small></p>
        </div>

    );
};

export default Review;