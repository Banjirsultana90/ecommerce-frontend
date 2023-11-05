import React from 'react';
import { NavLink } from 'react-router-dom';




const Navbar = () => {

    const nav =
        <><li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addjob'>Add job</NavLink></li>
            <li><NavLink to='/mypostedjob'>My Posted job</NavLink></li>
            <li><NavLink to='/mybids'>My Bids</NavLink></li>
            <li><NavLink to='/bidrequest'>Bid Requests</NavLink></li>
            
            </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">

                        </label>

                    </div>
                    <div className="dropdown dropdown-end">

                        {/* {
                            user?.email ?

                                <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ">

                                        <img src={user.photoURL} alt={user.displayName} />

                                    </div>
                                    <button className='btn btn-sm btn-ghost'>{user.displayName}</button>
                                </label>
                                    <button onClick={handlesignout} className='btn'>Sign Out</button></> :
                                <Link to='/Login'><button className='btn'>Login</button></Link>
                        } */}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;