import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Bidrequests = () => {
    const bidRequests = useLoaderData();
    const [requests, setRequests] = useState(bidRequests);

    const handleaccept=()=>{

        

    }
    const handledelete=()=>{

    }
    
    return (
        <> 

             <h2 className='text-center text-4xl font-extrabold my-5'>Bid Requests</h2>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Email (Bidder)</th>
                            <th>Deadline</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request._id}>
                                <th></th>
                                <td>{request.title}</td>
                                <td>{request.email}</td>
                                <td>{request.deadline}</td>
                                <td>{request.price}</td>
                                <td>{request.status}</td>
                                <td>{request.status}</td>
                                <td><button onClick={handleaccept} >Accept</button></td>
                                <td><button onClick={handledelete}>Reject</button></td>
                                <td>
                                  
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Toaster />
            </div>
        </>
    );
};

export default Bidrequests;
