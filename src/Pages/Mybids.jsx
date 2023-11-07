// import React from 'react';
// import { Toaster } from 'react-hot-toast';
// import { useLoaderData } from 'react-router-dom';

// const Mybids = () => {
//     const mybids = useLoaderData()
//     console.log(mybids)
//     return (
      
//         <><div className="overflow-x-auto">
//             <table className="table table-xs">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Title</th>
//                         <th>email</th>
//                         <th>Deadline</th>
//                         <th>status</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {mybids.map(bid => <tr key={bid._id}>
//                         <th></th>
//                         <th>{bid.title}</th>
//                         <td>{bid.email}</td>
//                         <td>{bid.deadline}</td>
//                         <td></td>
//                         <td><button  className='btn'>Delete</button></td>

//                     </tr>
//                     )}

//                 </tbody>

//             </table>
//             <Toaster />
//         </div></>
    
//     );
// };

// export default Mybids;
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Mybids = () => {
    const mybids = useLoaderData();
    const [bids, setBids] = useState(mybids);

    const handleCompleteClick = (bidId) => {
        // Update the status of the bid to 'Complete' and remove the complete button
        const updatedBids = bids.map((bid) => {
            if (bid._id === bidId) {
                return { ...bid, status: 'Complete' };
            }
            return bid;
        });

        setBids(updatedBids);
    };

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
                                {/* <td>{bid.status}</td> */}
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
