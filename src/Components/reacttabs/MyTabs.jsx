
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTabs = () => {
    // const {jobCategory}=useParams
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("webDevelopment");

    useEffect(() => {
      
        fetch('https://ecommerce-project-server-dusky.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []); 

    return (
        <div >
            <Tabs>
                <TabList className=" mx-auto text-3xl font-extrabold text-center mb-5 pb-5  gap-5">
                    <Tab onClick={() => setSelectedCategory("webDevelopment")}>Web Development</Tab>
                    <Tab onClick={() => setSelectedCategory("digitalMarketing")}>Digital Marketing</Tab>
                    <Tab onClick={() => setSelectedCategory("graphicDesign")}>Graphic Design</Tab>
                </TabList>

                <TabPanel>
                    {renderJobList("webDevelopment")}
                </TabPanel>
                <TabPanel>
                    {renderJobList("digitalMarketing")}
                </TabPanel>
                <TabPanel>
                    {renderJobList("graphicDesign")}
                </TabPanel>
            </Tabs>
        </div>
    );

    function renderJobList(category) {
        const filteredJobs = jobs.filter((job) => job.jobCategory === category);

        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-5 my-5'>
                {filteredJobs.map((job, index) => (
                    <div key={job._id} className={`card w-96 bg-white shadow-xl`}>
                        <div className="card-body">
                            <h2 className="card-title">{job.jobTitle}</h2>
                            <p>{job.shortDescription}</p>
                            <p>{job.priceRange}</p>
                            <p>{job.deadline}</p>
                            <div className="card-actions justify-end">
                               
                                    <Link to={`/jobs/${job._id}`}><button className="btn bg-green-600 w-72 mx-auto ">Bid Now</button></Link>
                              
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

export default MyTabs;
