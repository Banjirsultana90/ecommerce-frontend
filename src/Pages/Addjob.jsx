import React from 'react';

const Addjob = () => {
    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>

                <form >
                    <div className='flex gap-2'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-full  " required />
                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Job title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="jobTitle" placeholder="Job title" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" placeholder="deadline" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-2'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescription" placeholder="job details" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <select name="category" className="select select-bordered w-full" required>
                                    <option value="">Select a category</option>
                                    <option value="webDevelopment">Web Development</option>
                                    <option value="digitalMarketing">Digital Marketing</option>
                                    <option value="graphicDesign">Graphic Design</option>
                                </select>

                            </label>
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="yout minimum price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="your maximum price" className="input input-bordered w-full" required />
                            </label>
                        </div>


                    </div>



                    <input type="submit" value="Add Job" className="btn btn-block mt-3" />
                </form>


            </div>

        </div>
    );
};

export default Addjob;