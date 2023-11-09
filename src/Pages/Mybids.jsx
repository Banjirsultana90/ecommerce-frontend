
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
// import { ProgressBar, Step } from 'react-step-progress-bar';

const Mybids = () => {
    const mybids = useLoaderData();
    const [bids, setBids] = useState(mybids);


    return (
        <>  <h2 className='text-center text-4xl font-extrabold my-5'> My Bids</h2>
            <div className="overflow-x-auto my-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map((bid) => (
                            <tr key={bid._id}>
                                <th></th>
                                <td>{bid.title}</td>
                                <td>{bid.email}</td>
                                <td>{bid.deadline}</td>
                                <td>{bid.status || 'Pending'}</td> 
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

export default Mybids;
