
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Components/provider/Authprovider';
import { useLoaderData } from 'react-router-dom';

const Updatejob = () => {
    const { user, email } = useContext(AuthContext);
    // console.log(user?.email);
    const jobs = useLoaderData();
    console.log(jobs);
    const {
        _id,
        jobTitle,
        category,
        deadline,
        shortDescription,
        minimumprice,
        maximumprice,

    } = jobs;

    const handleupdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedjob = {
            jobTitle: form.jobTitle.value,
            deadline: form.deadline.value,
            shortDescription: form.shortDescription.value,
            category: form.category.value,
            email: user?.email,
            minimumprice: form.minimumprice.value,
            maximumprice: form.maximumprice.value,
        };
        console.log('user?.email:', user?.email);
        console.log('jobs.email:', jobs.email);

        if (user?.email === jobs.email) {fetch(`https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/addedjobs/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include credentials here
            body: JSON.stringify(updatedjob),
        })
        .then((res) => res.json())
        .then((value) => {
            if (value.modifiedCount > 0) {
                toast.success('Job updated successfully');
            }
            // You can add navigation code here
        });
        

            // fetch(`http://localhost:5000/addedjobs/${_id}`, { credentials: 'include' }, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },


            //     body: JSON.stringify(updatedjob),
            // })
            //     .then((res) => res.json())
            //     .then((value) => {
            //         // console.log(value);
            //         if (value.modifiedCount > 0) {
            //             toast.success('Job updated successfully');
            //         }
            //         // You can add navigation code here
            //     });
        }
        else { toast.error('You are not authorized to update this job.'); }
    };

    return (
        <>
            <h3>{jobs.length}</h3>
            <div>
                <div className="bg-[#F4F3F0] p-24">
                    <form onSubmit={handleupdate}>
                        <div className="flex gap-2">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        defaultValue={jobs?.email}
                                        className="input input-bordered w-full"
                                        readOnly
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Job title</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        placeholder="Job title"
                                        defaultValue={jobTitle}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="date"
                                        name="deadline"
                                        placeholder="deadline"
                                        defaultValue={deadline}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="shortDescription"
                                        placeholder="job details"
                                        defaultValue={shortDescription}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">
                                    <select
                                        name="category"
                                        defaultValue={category}
                                        className="select select-bordered w-full"
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        <option value="webDevelopment">Web Development</option>
                                        <option value="digitalMarketing">Digital Marketing</option>
                                        <option value="graphicDesign">Graphic Design</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="form-control md-w-1/2">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="minimumprice"
                                        placeholder="your minimum price"
                                        defaultValue={minimumprice}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="maximumprice"
                                        placeholder="your maximum price"
                                        defaultValue={maximumprice}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Update" className="btn btn-block mt-3" />
                    </form>
                    <Toaster />
                </div>
            </div>
        </>
    );
};

export default Updatejob;
