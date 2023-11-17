import React from 'react';
import { GoHome, GoPeople, GoMail } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="navbar bg-base-10 mt-2">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost text-xl">Appifylab Social</a>
            </div>
            <div className="navbar-center hidden lg:flex gap-7">
                <div class="flex items-center gap-2">
                    <div className='p-3 bg-gray-300 rounded-md border-b-4 border-primary'>
                        <GoHome className='w-8 h-6 text-secondary' />
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div className='p-3'>
                        <GoPeople className='w-8 h-6 text-gray-400' />
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div className='p-3'>
                        <GoMail className='w-8 h-6 text-gray-400' />
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;