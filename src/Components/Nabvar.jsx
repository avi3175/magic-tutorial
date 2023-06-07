import React from 'react';

const Nabvar = () => {
    return (
        <div>
            <nav className="bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-white font-bold text-xl">
                                My Website
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="/instructors"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Instructors
                                </a>
                                <a
                                    href="/classes"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Classes
                                </a>
                                <a
                                    href="/dashboard"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <a
                                href="/login"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Log In
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nabvar;