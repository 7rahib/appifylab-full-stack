import React from 'react';
import LeftSideBar from '../Shared/LeftSideBar';
import NewsFeed from './NewsFeed';
import RightSideBar from '../Shared/RightSideBar';

const Home = () => {
    return (
        <div className="w-full grid lg:grid-cols-7 min-h-screen">
            <div className="col-span-2 flex justify-start ml-2">
                <LeftSideBar />
            </div>
            <div className="col-span-3 h-full ">
                <NewsFeed />
            </div>
            <div className="col-span-2 flex justify-end pr-2">
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;