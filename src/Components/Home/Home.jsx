import React from 'react';
import Banner from '../Banner/Banner';
import MyTabs from '../reacttabs/MyTabs';
import Popularcategories from '../popular/Popularcategories ';
import Statistics from '../stat/Statistics';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MyTabs></MyTabs>
           <Popularcategories></Popularcategories>
           <Statistics></Statistics>
        </div>
    );
};

export default Home;