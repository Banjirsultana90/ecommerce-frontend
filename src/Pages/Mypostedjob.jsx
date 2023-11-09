

import { useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Components/provider/Authprovider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Mypostedjob = () => {
    const addedjob = useLoaderData();
    const [jobs, setJobs] = useState(addedjob);
    const { user } = useContext(AuthContext);

    // Filter the jobs based on the user's email
    const userJobs = jobs.filter((job) => job.email === user.email);

    const handleDelete = (id, email) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                if (user?.email === email) {
                    fetch(`https://ecommerce-project-server-dusky.vercel.app/addedjobs/${id}`, {
                        method: 'DELETE',
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Item has been deleted!',
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                // Update the state to remove the deleted job
                                setJobs(jobs.filter((job) => job._id !== id));
                            }
                        });
                } else {
                    toast.error('You are not authorized to delete this job.');
                }
            }
        });
    };

    return (
        <>   <h2 className='text-center text-4xl font-extrabold my-5'> My Posted jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10 mx-auto p-10">
                {userJobs.map((job) => ( // Display only jobs added by the current user
                    <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2>{job.email}</h2>
                            <h2 className="card-title">{job.jobTitle}</h2>
                            <p>{job.deadline}</p>
                            <p>{job.shortDescription}</p>
                            <p>{job.jobCategory}</p>
                            <p>Maximum price: {job.maximumprice}</p>
                            <p>Minimum price: {job.minimumprice}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(job._id, job.email)} className="btn bg-green-600">
                                    Delete
                                </button>
                                <Link to={`/update/${job._id}`}>
                                    <button className="btn bg-green-600">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Toaster />
        </>
    );
};

export default Mypostedjob;
