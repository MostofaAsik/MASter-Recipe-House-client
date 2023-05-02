import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-5 '>
            <div className='bg-pink-300 py-10'>
                <h1 className='text-3xl'><span className='text-amber-700'>Q1.</span> What is the differences between uncontrolled and controlled components?</h1>
                <p className='text-xl mt-4'> Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='bg-pink-300 mt-4 py-10'>
                <h1 className='text-3xl'><span className='text-amber-700'>Q2.</span> How to validate React props using PropTypes?</h1>
                <p className='text-xl mt-4'>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.</p>
            </div>
            <div className='bg-pink-300 mt-4 py-10'>
                <h1 className='text-3xl'><span className='text-amber-700'>Q3.</span> What is the  difference between nodejs and express js.?</h1>
                <p className='text-xl mt-4'>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
            </div>
            <div className='bg-pink-300 mt-4 py-10'>
                <h1 className='text-3xl'><span className='text-amber-700'>Q4.</span> What is a custom hook, and why will you create a custom hook?</h1>
                <p className='text-xl mt-4'>Custom Hooks are a mechanism to reuse stateful logic  but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.</p>
            </div>
        </div>
    );
};

export default Blog;