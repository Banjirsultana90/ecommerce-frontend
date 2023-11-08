
// import { useContext, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { AuthContext } from "../Components/provider/Authprovider";
// import { Link, useLoaderData, } from "react-router-dom";
// import Swal from "sweetalert2";

// const Mypostedjob = () => {
//     const addedjob = useLoaderData();
//     const [jobs, setJobs] = useState(addedjob);
//     const { user } = useContext(AuthContext);
//     // const {_id}=useParams
//     // console.log(id)


//     const handleDelete = (id, email) => {
//         const proceed =   Swal.fire({
//             title: 'Are you sure you want to delete?',
//             text: 'This action cannot be undone.',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it',
//             cancelButtonText: 'Cancel',
//         })
//         if (proceed) {
//             if (user?.email === email) {
//                 fetch(`http://localhost:5000/addedjobs/${id}`, {
//                     method: 'DELETE',
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.deletedCount > 0) {
//                             Swal.fire({
//                                 icon: 'success',
//                                 title: 'Item has been deleted!',
//                                 showConfirmButton: false,
//                                 timer: 1500, // Auto-close after 1.5 seconds (adjust as needed)
//                             });
//                             // Update the state to remove the deleted job
//                             setJobs(jobs.filter((job) => job._id !== id));
//                         }
//                     });
//             } else {
//                 toast.error('You are not authorized to delete this job.');
//             }
//         }
//     };

//     return (
//         <>
//             <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10 mx-auto p-10">
//             {jobs.map((job) => (
//                 <div key={job._id} className="card w-96 bg-base-100 shadow-xl  ">
//                     <div className="card-body">
//                         <h2>{job.email}</h2>
//                         <h2 className="card-title">{job.jobTitle}</h2>
//                         <p>{job.deadline}</p>
//                         <p>{job.shortDescription}</p>
//                         <p>{job.jobCategory}</p>
//                         <p>Maximum price{job.maximumprice}</p> 
//                         <p>Minimumprice{job.minimumprice}</p>
//                         <div className="card-actions justify-end">
//                             {user?.email === job.email && (
//                                 <button onClick={() => handleDelete(job._id, job.email)} className="btn bg-green-600 ">
//                                     Delete
//                                 </button>
//                             )}
//                             {/* <Link to={`/update/${job._id}`}><button className="btn btn-primary">Update</button></Link>
//                              */}
//                             {user?.email === job.email && (
//                                 <Link to={`/update/${job._id}`}>
//                                     <button className="btn  bg-green-600 ">Update</button>
//                                 </Link>
//                             )}

//                         </div>
//                     </div>
//                 </div>
//             ))}
//             </div>
            
//             <Toaster />
//         </>
//     );
// };

// export default Mypostedjob;
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Components/provider/Authprovider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Mypostedjob = () => {
    const addedjob = useLoaderData();
    const [jobs, setJobs] = useState(addedjob);
    const { user } = useContext(AuthContext);

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
        }).then((result) => { // Use the result from the user's interaction
            if (result.isConfirmed) { // Check if the user clicked "Yes, delete it"
                if (user?.email === email) {
                    fetch(`http://localhost:5000/addedjobs/${id}`, {
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
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10 mx-auto p-10">
                {jobs.map((job) => (
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
                                {user?.email === job.email && (
                                    <button onClick={() => handleDelete(job._id, job.email)} className="btn bg-green-600">
                                        Delete
                                    </button>
                                )}
                                {user?.email === job.email && (
                                    <Link to={`/update/${job._id}`}>
                                        <button className="btn bg-green-600">Update</button>
                                    </Link>
                                )}
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

