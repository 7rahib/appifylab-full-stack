import React from 'react';
import CreatePostBox from './CreatePostBox';
import { useQuery } from 'react-query';
import NewsFeedRow from './NewsFeedRow';
import Loading from '../Shared/Loading';

const NewsFeed = () => {

    const { data: allPosts, isLoading, refetch } = useQuery('allPosts', () => fetch('https://appifylab-full-stack-server-production.up.railway.app/posts').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div class="box-border max-w-screen mx-4 sm:columns-1 md:columns-1 lg:columns-1 xl:columns-1">
            <CreatePostBox />
            {
                allPosts?.map((allPost, index) => <NewsFeedRow
                    key={allPost._id}
                    allPost={allPost}
                    refetch={refetch}
                >
                </NewsFeedRow>)
            }
        </div>
    );
};

export default NewsFeed;