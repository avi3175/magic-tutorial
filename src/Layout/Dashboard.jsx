import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    // const {user} = useContext(AuthContext)
    // console.log(user)
    // const isAdmin = false
    const [isAdmin] = useAdmin()
    // console.log(isAdmin)
    // console.log(useAdmin)



    const [isInstructor] = useInstructor()
    // console.log(isInstructor)
    // console.log(useInstructor)




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
                                <li><Link to='/dashboard/manageclasswithadmin'>MANAGE  CLASS</Link></li>
                                <li><Link to='/dashboard/manageuser'>MANAGE USERS</Link></li>

                            </>
                                :
                                <>
                                    {/* <li><Link to='/dashboard/myselectedclass'>MY SELECTED CLASS</Link></li>
                                    <li><Link to=''>MY ENROLLED CLASS</Link></li> */}
                                </>
                        }

                        {
                            isInstructor ? <>
                                <li><Link to='/dashboard/addclass'>ADD A CLASS</Link></li>
                                <li><Link to='/dashboard/allclass'>MY CLASS</Link></li>
                            </>
                                :
                                <>
                                    {/* <li><Link to='/dashboard/myselectedclass'>MY SELECTED CLASS</Link></li>
                                    <li><Link to=''>MY ENROLLED CLASS</Link></li> */}
                                </>
                        }

                        {
                            !isAdmin && !isInstructor ? <>
                                <li><Link to='/dashboard/myselectedclass'>MY SELECTED CLASS</Link></li>
                        <li><Link to=''>MY ENROLLED CLASS</Link></li>
                            </> : <></>
                        }










                        {/* <!-- Sidebar content here --> */}
                        {/* <li><Link to='/dashboard/manageclass'>MANAGE CLASS</Link></li>
                        <li><Link to='/dashboard/manageuser'>MANAGE USERS</Link></li> */}

                        <div className='divider'></div>

                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/teacher'>INSTRUCTORS</Link></li>
                        {/* <li><Link>ALL CLASSES</Link></li> */}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;