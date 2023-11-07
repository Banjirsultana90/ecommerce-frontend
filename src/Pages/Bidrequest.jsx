import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Bidrequests = () => {
    const bidRequests = useLoaderData();
    const [requests, setRequests] = useState(bidRequests);

    const handleAcceptClick = (requestId) => {
        // Update the status of the bid request to 'In Progress' and hide buttons
        const updatedRequests = requests.map((request) => {
            if (request._id === requestId) {
                return { ...request, status: 'In Progress' };
            }
            return request;
        });

        setRequests(updatedRequests);
    };

    const handleRejectClick = (requestId) => {
        // Update the status of the bid request to 'Rejected' and hide buttons
        const updatedRequests = requests.map((request) => {
            if (request._id === requestId) {
                return { ...request, status: 'Rejected' };
            }
            return request;
        });

        setRequests(updatedRequests);
    };

    return (
        <>
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
                                <td>
                                    {request.status === 'Pending' && (
                                        <>
                                            <button
                                                className='btn'
                                                onClick={() => handleAcceptClick(request._id)}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className='btn'
                                                onClick={() => handleRejectClick(request._id)}
                                            >
                                                Reject
                                            </button>
                                        </>
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

export default Bidrequests;
