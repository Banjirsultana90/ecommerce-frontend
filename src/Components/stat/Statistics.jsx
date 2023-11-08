import React from 'react';
import img1 from '../../assets/count1-70x75.png'
import img2 from '../../assets/count2-70x75.png'
import img3 from '../../assets/count3-70x75.png'
import img4 from '../../assets/count4-70x75.png'
const Statistics = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font font-extrabold py-5'>People point Site Stats</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5 ml-10'>
                <div className='flex gap-3 my-5'>
                    <div><img src={img1} alt="" /></div>
                    <div className='pt-2'>
                        <p className='font-bold text-2xl text-cyan-400'>6.389</p>
                        <p>Jobs Posted</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div><img src={img2} alt="" /></div>
                    <div className='pt-2'>
                        <p className='font-bold text-2xl text-cyan-400'>10.981</p>
                        <p>Companies</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div><img src={img3} alt="" /></div>
                    <div className='pt-2'>
                        <p className='font-bold text-2xl text-cyan-400'>2.038</p>
                        <p>Resumes Posted</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div><img src={img4} alt="" /></div>
                    <div className='pt-2'>
                        <p className='font-bold text-2xl text-cyan-400'>34.657</p>
                        <p>Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;