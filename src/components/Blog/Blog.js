import React from 'react';

const Blog = () => {
    return (
        <div className='text-left'>
            <div>
                <h3 className=' text-4xl bg-orange-950 text-slate-100 text-center'>What is Context API?</h3>
                <p>Context API allows to pass data to a component directly without pass props every level manually.</p>
                <p>This helps to share date between components easily</p>
                <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease</p>
                <p>Context API promotes component decoupling by reducing interdependencies between components. Components that need access to shared data can simply subscribe to the context and receive updates when the data changes, without needing to know where the data comes from.</p>
                <p> Context API can improve the performance of your application in certain scenarios. It allows you to optimize re-renders by providing control over when and how components re-render based on changes in the context. You can use techniques like memoization or shouldComponentUpdate to prevent unnecessary renders.</p>
            </div>
        </div>
    );
};

export default Blog;