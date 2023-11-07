import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const Mypostedjob = () => {
  
    const addedjob=useLoaderData()
    const [jobs,setJobs]=useState(addedjob)
    const handledelete=id=>{
        const proceed=confirm('are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/addedjobs/${id}`,{
                method: "DELETE"
            })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.deletedCount>0){
                    toast.success('data deleted successfully')
                    const remaining=jobs.filter(job=>job._id !==id)
                    setJobs(remaining)
                }
        
       
        })
    }
    
    }


    return (
       

        <><h3>{addedjob.length}</h3>
        {
            addedjob.map(job=>
                <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2>{job.email}</h2>
                <h2 className="card-title">{job.jobTitle}</h2>
                <p>{job.deadline}</p>
                <p>{job.shortDescription}</p>
                <p>{job.jobCategory}</p>
                <p>{job.maximumprice}</p>
                <p>{job.mimnimumprice}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handledelete(job._id)}  className="btn btn-primary">Delete</button>
                    <button className="btn btn-primary">Upgate</button>
                </div>
            </div>
        </div>)
        }
        <Toaster/>
        </>
    );
};

export default Mypostedjob;