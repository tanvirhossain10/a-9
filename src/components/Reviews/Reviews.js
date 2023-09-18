import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [Reviews, setReviews] = useReview([]);

    return (
        <div>
            <h2 className='text-4xl my-10 text-orange-600'>Our customer happy reviews</h2>
            <div className='grid grid-cols-3  gap-10 mb-20 '>
                {
                    Reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;