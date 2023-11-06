import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const jobs = useLoaderData()
    // console.log(jobs)
    const { id } = useParams
    const job = jobs.find((job) => job.id === id);
    // console.log(job);
    return (

        <>
            <div className='text-center text-3xl'>
                <h2>job name:{job.jobTitle}</h2>
                <p>Price:{job.priceRange}</p>
                <p>Deadline:{job.deadline}</p>
                <p>Details:{job.shortDescription}</p>
            </div>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="your bidding amaount" name='text' className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" placeholder="dedline" className="input input-bordered" name='date' required />
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input type="email" placeholder=" buyer email" className="input input-bordered" name='email' required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Bid on the project button</button>
                        </div>
                    </form>
                </div>

            </div></>
    );
};

export default Jobdetails;