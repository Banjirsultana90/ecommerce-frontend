import React from 'react';
// import { IconName } from "react-icons/fa";
const Popularcategories = () => {
    return (
        <div >
           <h2 className='text-center text-3xl font font-extrabold py-5'>POPULAR CATEGORIES</h2> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                <div className="card w-72 bg-white shadow-xl text-center">
                    <div className="card-body">
                        <p></p>
                        <h2 className="font-bold text-lg">Developer</h2>
                        <p>7jobs</p>
                        
                    </div>
                    
                </div>
                <div className="card w-72 bg-white shadow-xl  text-center">
                    <div className="card-body">
                        <p></p>
                        <h2 className="font-bold text-lg">Accounting</h2>
                        <p>5jobs</p>
                        
                    </div>
                    
                </div>
                <div className="card w-72 bg-white shadow-xl  text-center">
                    <div className="card-body">
                        <p></p> 
                        <h2 className="font-bold text-lg">Medical</h2>
                        <p>3jobs</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Popularcategories;