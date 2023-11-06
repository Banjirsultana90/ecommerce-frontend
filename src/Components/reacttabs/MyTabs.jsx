
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTabs = () => {
    // const {jobCategory}=useParams
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("webDevelopment");

    useEffect(() => {
        // Fetch job data from your API when the component mounts
        fetch('http://localhost:5000/categories')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []); // Empty dependency array to fetch data only once

    return (
        <div>
            <Tabs>
                <TabList>
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
            <div>
                {filteredJobs.map((job, index) => (
                    <div key={job._id} className={`card w-96 bg-${job.color} shadow-xl`}>
                        <div className="card-body">
                            <h2 className="card-title">{job.jobTitle}</h2>
                            <p>{job.shortDescription}</p>
                            <p>{job.priceRange}</p>
                            <p>{job.deadline}</p>
                            <div className="card-actions justify-end">
                               
                                    <Link to={`/jobs/${job._id}`}><button className="btn btn-primary">Bid Now</button></Link>
                              
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

export default MyTabs;
