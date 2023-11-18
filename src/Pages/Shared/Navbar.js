import React from 'react';
import { GoHome, GoPeople, GoMail, GoBell } from "react-icons/go";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const user = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate(from, { replace: true })
    };

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
                    <div className="indicator">
                        <GoBell className='w-6 h-6' />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {(user[0]) ?
                    <>
                        <button onClick={logout} className="btn btn-sm btn-ghost">Sign Out</button>
                    </>
                    : <Link className="btn btn-sm btn-ghost" to="/login">Log In</Link>}
            </div>
        </div>
    );
};

export default Navbar;