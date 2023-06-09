import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = true
    return (

        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isAdmin ? <>
                                <li><Link to='/dashboard/manageclass'>MANAGE CLASS</Link></li>
                                <li><Link to='/dashboard/manageuser'>MANAGE USERS</Link></li>
                            </>
                                :
                                <></>
                        }
                        {/* <!-- Sidebar content here --> */}
                        {/* <li><Link to='/dashboard/manageclass'>MANAGE CLASS</Link></li>
                        <li><Link to='/dashboard/manageuser'>MANAGE USERS</Link></li> */}

                        <div className='divider'></div>

                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/teacher'>INSTRUCTORS</Link></li>
                        <li><Link>ALL CLASSES</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;