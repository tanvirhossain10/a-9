import React from 'react';

const Blog = () => {
    return (
        <div className='text-left flex justify-between mt-20' >
            <div className='border border-orange-500 ml-10 p-4'>
                <h3 className=' text-4xl bg-orange-950 text-slate-100 text-center '>What is Context API?</h3>
                <p>Context API allows to pass data to a component directly without pass props every level manually.</p>
                <p>This helps to share date between components easily</p>
                <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease</p>
                <p>Context API promotes component decoupling by reducing interdependencies between components. Components that need access to shared data can simply subscribe to the context and receive updates when the data changes, without needing to know where the data comes from.</p>
                <p> Context API can improve the performance of your application in certain scenarios. It allows you to optimize re-renders by providing control over when and how components re-render based on changes in the context. You can use techniques like memoization or shouldComponentUpdate to prevent unnecessary renders.</p>
            </div>
            <div className='border border-orange-500	ml-20 mr-10 p-4'>
                <h3 className=' text-4xl bg-orange-950 text-slate-100 text-center'>What is Semantic HTML tags? </h3>
                <p>Semantic HTML tags are tags that define the meaning of the content they contain.Like in header tag we can easily know that that tags contain header details</p>
                <p>It is very helpful for sighted users, it is easy to identify the various parts of a webpage</p>
                <p>Semantic tags also SEO friendly.It help our site to rank up</p>
                <p>Proper use of Semantic tags help readers to understand content of our site</p>
                <p>Some semantic tags examples are &lt;header&gt;, &lt;footer&gt; , &lt;h1-h6&gt; ,&lt;main&gt; and so on.     </p>
            </div>
        </div>
    );
};

export default Blog;