import React from 'react';

const LeftSideBar = () => {
    return (
        <body class="min-h-screen hidden lg:block">

            <div class="w-80 px-2 min-h-screen flex flex-col py-2 shadow-lg">
                <div class="group">
                    <div class=" mt-1">
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-full overflow-hidden">
                                <img class="w-full" src="https://avatars.githubusercontent.com/u/61423411?v=4" alt="Naimur Rashid Rahib" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Naimur Rashid Rahib</h2>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Friends</h2>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                </svg>
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Pages</h2>
                                <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                                    <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                                    <span>9+ new</span>
                                </div>
                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Groups</h2>
                                <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                                    <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                                    <span>1 new</span>
                                </div>
                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Marketplace</h2>
                                <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                                    <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                                    <span>1 new</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="border-t border-gray-700 my-2"></div>

                <div class="group flex-1">
                    <div class="flex justify-between items-center">
                        <h3 class=" font-semibold text-lg">Your Shortcuts</h3>
                    </div>
                    <div class="mt-1">
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-lg overflow-hidden">
                                <img class="w-full" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/240355291_906587126873428_627206812571233428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bWnorf9FkdEAX9-wrHk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAQQrV7ZdqSBGjOYEh4BLnaDSK2xR_TVwpyH-dziOOzJA&oe=655D0541" alt="Appifylab" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Appifylab</h2>

                            </div>
                        </a><a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-lg overflow-hidden">
                                <img class="w-full" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/240355291_906587126873428_627206812571233428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bWnorf9FkdEAX9-wrHk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAQQrV7ZdqSBGjOYEh4BLnaDSK2xR_TVwpyH-dziOOzJA&oe=655D0541" alt="Appifylab" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Appifylab</h2>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-lg overflow-hidden">
                                <img class="w-full" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/240355291_906587126873428_627206812571233428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bWnorf9FkdEAX9-wrHk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAQQrV7ZdqSBGjOYEh4BLnaDSK2xR_TVwpyH-dziOOzJA&oe=655D0541" alt="Appifylab" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Appifylab</h2>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-lg overflow-hidden">
                                <img class="w-full" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/240355291_906587126873428_627206812571233428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bWnorf9FkdEAX9-wrHk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAQQrV7ZdqSBGjOYEh4BLnaDSK2xR_TVwpyH-dziOOzJA&oe=655D0541" alt="Appifylab" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Appifylab</h2>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-lg overflow-hidden">
                                <img class="w-full" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/240355291_906587126873428_627206812571233428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bWnorf9FkdEAX9-wrHk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAQQrV7ZdqSBGjOYEh4BLnaDSK2xR_TVwpyH-dziOOzJA&oe=655D0541" alt="Appifylab" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Appifylab</h2>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-gray-200 px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
                            <div class="w-10 h-10 rounded-lg overflow-hidden">
                                <img class="w-full" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/240355291_906587126873428_627206812571233428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bWnorf9FkdEAX9-wrHk&_nc_ht=scontent.fdac157-1.fna&oh=00_AfAQQrV7ZdqSBGjOYEh4BLnaDSK2xR_TVwpyH-dziOOzJA&oe=655D0541" alt="Appifylab" />
                            </div>
                            <div class="flex flex-col justify-center content-start">
                                <h2 class="font-semibold">Appifylab</h2>

                            </div>
                        </a>
                    </div>
                </div>

                <div class="text-gray-500 text-xs space-x-2">
                    <a href="/" class="hover:underline">Privacy</a>
                    <a href="/" class="hover:underline">Terms</a>
                    <a href="/" class="hover:underline">Advertising</a>
                    <a href="/" class="hover:underline">Ad Choices</a>
                    <a href="/" class="hover:underline">Cookies</a>
                    <a href="/" class="hover:underline">More</a>
                    <span class="cursor-text">Appifylab &copy; 2023</span>
                </div>
            </div>
        </body>
    );
};

export default LeftSideBar;