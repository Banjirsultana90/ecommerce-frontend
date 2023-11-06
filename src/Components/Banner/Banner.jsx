import React from 'react';
import img1 from '../../assets/hunters-race-MYbhN8KaaEc-unsplash.jpg'
import img2 from '../../assets/happy-male-candidate-greeting-member-human-resource-team-job-interview-office.jpg'
import img3 from '../../assets/young-happy-woman-having-job-interview-office.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center justify-center  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className=' text-white space-y-7 w-1/2 pl-4'>
                        <h2 className='text-7xl  '>Search Your job in One</h2>
                        {/* <p>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 mr-3'>Discover More</button>
                        <button className='btn outline'>Latest Project</button> */}

                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute h-full flex items-center justify-center  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className=' text-white space-y-7 w-1/2 pl-4'>
                        <h2 className='text-7xl  '>Search Your job in One</h2>
                        {/* <p>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 mr-3'>Discover More</button>
                        <button className='btn outline'>Latest Project</button> */}

                    </div>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute h-full flex items-center justify-center  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className=' text-white space-y-7 w-1/2 pl-4'>
                        <h2 className='text-7xl  '>Search Your job in One</h2>
                        {/* <p>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 mr-3'>Discover More</button>
                        <button className='btn outline'>Latest Project</button> */}

                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;