import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../Components/provider/Authprovider';
import { useNavigate } from 'react-router-dom';

const Addjob = () => {
    const navigate = useNavigate()
    const {  user ,email} = useContext(AuthContext);
    const handleadd= event => {
        event.preventDefault();
        const form =event.target
       const jobTitle=form.jobTitle.value
        const deadline=form.deadline.value
        const shortDescription=form.shortDescription.value
        const category=form.category.value
         const email=user?.email
       const minimumprice=form.minimumprice.value
       const maximumprice=form.maximumprice.value
       
  
      const newjob={jobTitle,deadline,shortDescription,category,email,minimumprice,maximumprice}
    //   console.log(newjob)
        
        
     
         fetch('http://https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/addedjobs',{
             method:'POST',
             headers:{
               "content-type":'application/json'
             },
             body:JSON.stringify(newjob)
         })
         .then(res=>res.json())
         .then(value=>{
             console.log(value)
             if(value.insertedId)
             toast.success("job added")
             navigate('/mypostedjob')
         })
        }
    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>

                <form onSubmit={handleadd} >
                    <div className='flex gap-2'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full  "readOnly />
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
                                <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full" required />
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
                                <select name="category" type='text' className="select select-bordered w-full" required>
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
                                <input type="text" name="minimumprice" placeholder="your minimum price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="maximumprice" placeholder="your maximum price" className="input input-bordered w-full" required />
                            </label>
                        </div>


                    </div>



                    <input type="submit" value="Add Job" className="btn btn-block mt-3" />
                </form>

                <Toaster />
            </div>

        </div>
    );
};

export default Addjob;