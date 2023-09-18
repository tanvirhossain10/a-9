import React from 'react';

const NotFound404 = () => {
    return (
        <div className='h-screen bg-gradient-to-b
        from-green-200 to-green-500'>
            <div className='  flex w-full  justify-evenly items-center pt-10'>
                <img className="w-3/5" src="404.jpg" alt="" />

                <h2 className='text-4xl' >Opps 404 page not found</h2>


            </div >
        </div>
    );
};
{/* <div style={{ backgroundImage:`url(${image})` }}> */ }
export default NotFound404;