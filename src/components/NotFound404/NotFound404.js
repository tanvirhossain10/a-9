import React from 'react';

const NotFound404 = () => {
    return (
        <div className='h-screen bg-gradient-to-b
        from-green-200 to-green-500'>
            <div className='flex w-full  justify-evenly items-center pt-10'>
                <img className="w-3/5" src="/hamba.jpg" alt="" />

                <h2 className='text-4xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-orange-500 to-red-700
            animate-text' >Opps! 404 page not found</h2>


            </div >
        </div>
    );
};
export default NotFound404;