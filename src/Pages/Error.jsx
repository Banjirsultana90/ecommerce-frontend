import React from 'react';
import img from '../assets/404.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=''>
            <img className='mx-auto' src={img}alt="" />
          <Link to='/'> <button className='px-10  mx-20 text-center bg-green-500 text-lg'>Back to home</button></Link>


           
            
        </div>
    );
};

export default Error; 