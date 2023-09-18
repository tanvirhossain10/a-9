import React from 'react';
import useReview from '../../hooks/useReview';

const Home = () => {
    // const [review] = allReviewsArray;/
    const [reviews, setReviews] = useReview();
    const homePageReviews = reviews.slice(0, 3);
    // console.log(homePageReviews[0].body)
    // // console.log(b);

    return (
        <div>
            <div className="flex items-center justify-between mt-20">
                <div className='ml-20 text-left w-3/5 mt-8'>
                    <h2 className='text-5xl  text-emerald-600'>Waiting for best watch in the town</h2>
                    <h2 className='text-5xl  text-fuchsia-600'>Why are you waiting!Grab it from us</h2>
                    <p className=' mt-5 text-cyan-700 '>Discover exquisite timepieces that marry timeless elegance with precision engineering on our exclusive watch boutique. Elevate your style and make a statement with our curated collection of exceptional watches.</p>
                    <div className='mt-10 ml-20'><button className='bg-orange-500 px-4 py-2 rounded-lg  hover:bg-orange-400 hover:text-gray-200 text-blue-600'>Grab Now</button></div>
                </div>
                <div className='bg-slate-200 w-1/5 p-5 mr-10 rounded-lg '>
                    <img className=' rounded-s-full	 ' src="watch.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2 className='text-4xl text-cyan-600 mt-40 mb-40'>Customer Reviews:({homePageReviews.length})</h2>
                <div className="flex justify-center  mb-36 ">
                    {homePageReviews.map(review => <div key={review.id} className='bg-slate-400 p-5 mx-28 text-left drop-shadow-xl shadow-lg shadow-blue-500/50 rounded-xl'><h3 className=' text-3xl p-5'>Name:{review.name}</h3>
                        <p>{review.body}</p>
                        <p className='text-center mt-4 '><small className=' text-2xl bg-green-500 text-blue-700 rounded-full p-2  '>Star:{review.star}</small></p>
                    </div>)}
                </div>
                <button className='mb-10 bg-slate-600 text-slate-50 p-2 px-6 hover:bg-red-700 rounded-full'>See all Reviews</button>
            </div>
        </div>

    );
};

export default Home;