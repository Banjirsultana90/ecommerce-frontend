
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
// import { ProgressBar, Step } from 'react-step-progress-bar';

const Mybids = () => {
    const mybids = useLoaderData();
    const [bids, setBids] = useState(mybids);


    return (
        <>
            <div className="overflow-x-auto">
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
                                <td>{bid.status || 'Pending'}</td> {/* Display 'Pending' if status is not set */}
                                <td>
                                    {bid.status === 'Pending' && (
                                        <button
                                            className='btn'
                                            onClick={() => handleCompleteClick(bid._id)}
                                        >
                                            Complete
                                        </button>
                                    )}
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
