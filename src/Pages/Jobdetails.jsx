
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Components/provider/Authprovider';

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    // Find the job based on the provided id
    const job = jobs.find((job) => job._id === id);

    const handlesubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const deadline = form.deadline.value;
        const email = user?.email;
        const buyeremail = job?.buyeremail; 
        const title = job?.jobTitle; 

        const formdata = { price, deadline, email, buyeremail, title };
        // console.log(formdata);

       
         fetch('https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/bidedjobs',{
             method:'POST',
             headers:{
               "content-type":'application/json'
             },
             body:JSON.stringify(formdata)
         })
         .then(res=>res.json())
         .then(value=>{
             console.log(value)
             if(value.insertedId)
             toast.success("Bid placed successfully");
             navigate('/mybids')
         })
        }
     
    const isJobOwner = job && user && job.buyeremail === user.email;

    return (
        <div>
            {job ? (
                <>
                    <div className="text-center ">
                        <h2 className='text-3xl font-bold'>Job Title: {job.jobTitle}</h2>
                        <p className='text-lg font-medium'>Price: {job.priceRange}</p>
                        <p className='font-medium'>Deadline: {job.deadline}</p>
                        <p>Details: {job.shortDescription}</p>
                    </div>

                    <div className="hero min-h-screen bg-base-200">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handlesubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your bidding amount"
                                        name="price"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Deadline</span>
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="Deadline"
                                        className="input input-bordered"
                                        name="deadline"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered"
                                        name="email"
                                        defaultValue={user?.email}
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Buyer Email"
                                        className="input input-bordered"
                                        name="buyeremail"
                                        defaultValue={job.buyeremail}
                                        readOnly
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    {/* Disable the button if the current user is the job owner */}
                                    {isJobOwner ? (
                                        <button
                                            type="button"
                                            className="btn btn-block mt-3 bg-gray-300"
                                            disabled
                                        >
                                            You cannot bid on your own project
                                        </button>
                                    ) : (
                                        <input
                                            type="submit"
                                            value="Bid on the project"
                                            className="btn btn-block mt-3 bg-green-600"
                                        />
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">Job not found</div>
            )}
        </div>
    );
};

export default Jobdetails;
