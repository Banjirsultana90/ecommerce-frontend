import React from 'react';
import { IoMdCode } from 'react-icons/io';
import { GiHealthNormal } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';

const Popularcategories = () => {
    return (
        <div >
            <h2 className='text-center text-3xl font font-extrabold py-5'>POPULAR CATEGORIES</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 ml-12'>
                <div className="card w-72 bg-white shadow-xl text-center">
                    <div className="card-body">
                        <p className=' mx-auto pt-5 h-20'> {/* Increase the height to center the icon */}
                            <IoMdCode className='text-4xl text-blue-500 text-center' /> {/* Increase the icon size and set the color */}
                        </p>

                        <h2 className="font-bold text-lg">Developer</h2>
                        <p>7jobs</p>

                    </div>

                </div>
                <div className="card w-72 bg-white shadow-xl  text-center">
                    <div className="card-body">
                        <p className=' mx-auto pt-5 h-20'> {/* Increase the height to center the icon */}
                            <GrTechnology className='text-4xl text-blue-500 text-center' />
                        </p>
                        <h2 className="font-bold text-lg">Medical</h2>
                        <p>3jobs</p>

                    </div>

                </div>
                <div className="card w-72 bg-white shadow-xl  text-center">
                    <div className="card-body">
                        <p className=' mx-auto pt-5 h-20'> {/* Increase the height to center the icon */}
                            <GiHealthNormal className='text-4xl text-blue-500 text-center' />
                        </p>
                        <h2 className="font-bold text-lg">Technology</h2>
                        <p>5jobs</p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Popularcategories;