import React from 'react';
import Banner from '../Banner/Banner';
import MyTabs from '../reacttabs/MyTabs';
import Popularcategories from '../popular/Popularcategories ';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MyTabs></MyTabs>
           <Popularcategories></Popularcategories>
        </div>
    );
};

export default Home;