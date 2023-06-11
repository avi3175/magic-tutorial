import React from 'react';
import userStack from '../hooks/Userstack';

const Extra = () => {
    const [cart] = userStack()
    // console.log(cart)
    return (
        <div>
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl uppercase font-extrabold text-rose-700 text-center mb-12 animate-pulse">Learn the Art of Magic{cart.length}</h2>
                    <img src="https://wallpaperaccess.com/full/3418534.jpg" className='opacity-30' alt="" />
                    {/* <h1 className='absolute text-white'>WELCOME</h1> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-black rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-circus-magician-top-hat-and-magic-wand-trick-with-sparkling-light-image_1396022.jpg"
                                alt="Magic Class"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Magic Classes</h3>
                            <p className="text-gray-600">Join our interactive magic classes taught by expert magicians. Learn various tricks and techniques to amaze your audience.</p>
                        </div>

                        <div className="bg-black rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://www.masterclass.com/course-images/attachments/hVjoZL1CTV8sXto6nTH871uu"
                                alt="Magic Workshops"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Magic Workshops</h3>
                            <p className="text-gray-600">Participate in our hands-on magic workshops where you'll learn advanced illusions and receive personalized guidance.</p>
                        </div>


                        <div className="bg-black rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7FGq5Vff8nAyCMXat3r98P4D1AHaHq_o8g&usqp=CAU"
                                alt="Magic Performances"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Magic Performances</h3>
                            <p className="text-gray-600">Witness mesmerizing magic performances by renowned magicians and get inspired by their skills and creativity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;