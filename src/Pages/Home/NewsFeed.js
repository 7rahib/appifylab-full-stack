import React from 'react';
import { GoHeartFill, GoSmiley } from "react-icons/go";
import { BiSend } from "react-icons/bi";
import CreatePostBox from './CreatePostBox';

const NewsFeed = () => {
    return (
        <div class="box-border max-w-screen mx-4 sm:columns-1 md:columns-1 lg:columns-1 xl:columns-1">
            <CreatePostBox />
            <article class="mb-4  p-6 rounded-xl bg-white flex flex-col shadow-md border-2">
                <div class="flex pb-6 items-center justify-between">
                    <div class="flex">
                        <a class="inline-block mr-4" href="/">
                            <img class="rounded-full max-w-none w-14 h-14" src="https://avatars.githubusercontent.com/u/61423411?v=4" alt='Naimur Rashid Rahib' />
                        </a>
                        <div class="flex flex-col">
                            <div class="flex items-center">
                                <a class="inline-block text-md font-bold mr-2" href="/">Naimur Rashid Rahib</a>
                                <span class="text-slate-500 text-sm">25 minutes ago</span>
                            </div>
                            <div class="text-slate-500 text-sm">
                                Software Developer
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="text-3xl font-extrabold">
                    Social App Full Stack Design
                </h2>
                <div class="py-4">
                    <a class="flex" href="/">
                        <img class="max-w-full rounded-lg"
                            src="https://images.pexels.com/photos/2128028/pexels-photo-2128028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='Naimur Rashid Rahib' />
                    </a>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="py-4">
                    <a class="inline-flex items-center" href="/">
                        <span class="mr-2">
                            <GoHeartFill className='text-rose-600 w-6 h-6' />
                        </span>
                        <span class="text-md">68</span>
                    </a>
                </div>
                <div class="relative">
                    <input
                        class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100  rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                        type="text" placeholder="Write a comment" />
                    <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                        <GoSmiley className=' w-6 h-6' />
                        <BiSend className='text-blue-500 w-6 h-6 ml-2' />
                    </span>
                </div>
                <div class="pt-6">
                    <div class="media flex pb-4">
                        <a class="mr-4" href="/">
                            <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-12 h-12" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
                        </a>
                        <div class="media-body">
                            <div>
                                <a class="inline-block text-base font-semibold mr-2" href="/">Naimur Rashid Rahib</a>
                                <span class="text-slate-500 text-sm">25 minutes ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                eiusmod
                            </p>
                            <div class="mt-2 flex items-center">
                                <a class="inline-flex items-center py-2 mr-3" href="/">
                                    <span class="mr-2">
                                        <GoHeartFill className='text-rose-600 w-6 h-6' />
                                    </span>
                                    <span class="text-base">2</span>
                                </a>
                                <button class="py-2 px-4 font-medium hover:bg-slate-200 rounded-lg">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="media flex pb-4">
                        <a class="mr-4" href="/">
                            <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-12 h-12" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
                        </a>
                        <div class="media-body">
                            <div>
                                <a class="inline-block text-base font-semibold mr-2" href="/">Naimur Rashid Rahib</a>
                                <span class="text-slate-500 text-sm">25 minutes ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                eiusmod
                            </p>
                            <div class="mt-2 flex items-center">
                                <a class="inline-flex items-center py-2 mr-3" href="/">
                                    <span class="mr-2">
                                        <GoHeartFill className='text-rose-600 w-6 h-6' />
                                    </span>
                                    <span class="text-base">2</span>
                                </a>
                                <button class="py-2 px-4 font-medium hover:bg-slate-200 rounded-lg">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="mb-4 p-6 rounded-xl bg-white flex flex-col shadow-md border-2">
                <div class="flex pb-6 items-center justify-between">
                    <div class="flex">
                        <a class="inline-block mr-4" href="/">
                            <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-14 h-14" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
                        </a>
                        <div class="flex flex-col">
                            <div class="flex items-center">
                                <a class="inline-block text-md font-bold mr-2" href="/">Naimur Rashid Rahib</a>
                                <span class="text-slate-500 text-sm">25 minutes ago</span>
                            </div>
                            <div class="text-slate-500 text-sm">
                                Software Developer
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="text-3xl font-extrabold">
                    Social App Full Stack Design
                </h2>
                <div class="py-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="py-4">
                    <a class="inline-flex items-center" href="/">
                        <span class="mr-2">
                            <GoHeartFill className='text-rose-600 w-6 h-6' />
                        </span>
                        <span class="text-md">34</span>
                    </a>
                </div>
                <div class="relative">
                    <input
                        class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                        type="text" placeholder="Write a comment" />
                    <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                        <GoSmiley className=' w-6 h-6' />
                        <BiSend className='text-blue-500 w-6 h-6 ml-2' />
                    </span>
                </div>
                <div class="pt-6">
                    <div class="media flex pb-4">
                        <a class="mr-4" href="/">
                            <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-12 h-12" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
                        </a>
                        <div class="media-body">
                            <div>
                                <a class="inline-block text-base font-semibold mr-2" href="/">Naimur Rashid Rahib</a>
                                <span class="text-slate-500 text-sm">25 minutes ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                eiusmod
                            </p>
                            <div class="mt-2 flex items-center">
                                <a class="inline-flex items-center py-2 mr-3" href="/">
                                    <span class="mr-2">
                                        <GoHeartFill className='text-rose-600 w-6 h-6' />
                                    </span>
                                    <span class="text-base">2</span>
                                </a>
                                <button class="py-2 px-4 hover:bg-slate-200  rounded-lg">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="media flex pb-4">
                        <a class="mr-4" href="/">
                            <img alt='Naimur Rashid Rahib' class="rounded-full max-w-none w-12 h-12" src="https://avatars.githubusercontent.com/u/61423411?v=4" />
                        </a>
                        <div class="media-body">
                            <div>
                                <a class="inline-block text-base font-semibold mr-2" href="/">Naimur Rashid Rahib</a>
                                <span class="text-slate-500 text-sm">25 minutes ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                eiusmod
                            </p>
                            <div class="mt-2 flex items-center">
                                <a class="inline-flex items-center py-2 mr-3" href="/">
                                    <span class="mr-2">
                                        <GoHeartFill className='text-rose-600 w-6 h-6' />
                                    </span>
                                    <span class="text-base">2</span>
                                </a>
                                <button class="py-2 px-4 hover:bg-slate-200 rounded-lg">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default NewsFeed;