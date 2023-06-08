import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center">
                                {/* Replace 'Logo' with your website logo or name */}
                                <span className="text-white font-bold text-lg">

                                    <img src="https://stacywellsdesign.com/wp-content/uploads/2014/04/Trent_MagicianLogo_All_BlackBack_Wide.png" alt="" className='w-24' />

                                </span>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="text-yellow-700 uppercase hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold">Home</a>

                                <Link to="/teacher" className="text-yellow-700  uppercase hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold">Instructors</Link>

                                <a href="/classes" className="text-yellow-700 uppercase hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold">Classes</a>

                                <a href="/dashboard" className="text-yellow-700 uppercase hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold">Dashboard</a>

                                <a href="/login" className="text-yellow-700 uppercase hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold">Log In</a>

                                <Link to="/signup" className="text-yellow-700 uppercase hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold">Sign Up</Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="/instructors" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Instructors</a>
                            <a href="/classes" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Classes</a>
                            <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                            <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Log In</a>
                            <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Nabvar;