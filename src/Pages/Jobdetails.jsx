// import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { AuthContext } from '../Components/provider/Authprovider';

// const Jobdetails = () => {
//     const jobs = useLoaderData()
//     // console.log(jobs)
//     const { id } = useParams
//     // console.log(id)
//     const job = jobs.find((job) => job.id === id);
//     // console.log(job);
//     const {  user ,email} = useContext(AuthContext);
//     const handlesubmit= event => {
//         event.preventDefault();
//         const form =event.target
//        const price=form.price.value
//         const deadline=form.deadline.value
//          const email=user?.email
//         const buyeremail=form.buyeremail.value
//         const title=job.jobTitle
       
  
//       const formdata={price,deadline,email,buyeremail,title}
//     //   console.log(formdata);
     
        
     
//         //  fetch('http://localhost:5000/addedjobs',{
//         //      method:'POST',
//         //      headers:{
//         //        "content-type":'application/json'
//         //      },
//         //      body:JSON.stringify(newjob)
//         //  })
//         //  .then(res=>res.json())
//         //  .then(value=>{
//         //      console.log(value)
//         //      if(value.insertedId)
//         //      toast.success("job added")
//         //     //  navigate('/mypostedjob')
//         //  })
//         }
//     return (

//         <>
//            { <div className='text-center text-3xl'>
//                 <h2>job title:{job.jobTitle}</h2>
//                 <p>Price:{job.priceRange}</p>
//                 <p>Deadline:{job.deadline}</p>
//                 <p>Details:{job.shortDescription}</p>
//             </div>}
//             <div className="hero min-h-screen bg-base-200">

//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form onSubmit={handlesubmit} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Price</span>
//                             </label>
//                             <input type="text" placeholder="your bidding amount" name='price' className="input input-bordered" required />

//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Deadline</span>
//                             </label>
//                             <input type="date" placeholder="deadline" className="input input-bordered" name='deadline' required />
//                         </div>
                       
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" placeholder="email" className="input input-bordered" name='email' defaultValue={user?.email} required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Buyer Email</span>
//                             </label>
//                             <input type="email" placeholder=" buyer email" className="input input-bordered" name='buyeremail' defaultValue={job.buyeremail} readOnly />
//                         </div>

//                         <div className="form-control mt-6">
//                         <input type="submit" value="Bid on the project" className="btn btn-block mt-3" />
                          
//                         </div>
//                     </form>
//                 </div>

//             </div></>
//     );
// };

// export default Jobdetails;
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Components/provider/Authprovider';

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const { user } = useContext(AuthContext);

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

       
         fetch('http://localhost:5000/bidedjobs',{
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
             toast.success("job added")
            //  navigate('/mypostedjob')
         })
        }
        toast.success("Bid placed successfully");

        // You can navigate to another page if needed
        // For example: history.push('/mybids');
    

    return (
        <div>
            {job ? ( // Check if job is defined before rendering
                <>
                    <div className="text-center text-3xl">
                        <h2>Job title: {job.jobTitle}</h2>
                        <p>Price: {job.priceRange}</p>
                        <p>Deadline: {job.deadline}</p>
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
                                    <input
                                        type="submit"
                                        value="Bid on the project"
                                        className="btn btn-block mt-3"
                                    />
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
