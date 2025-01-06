import React from 'react';
import MountainDivider from "../img/triangle-asymmetrical-divider-inverse.png"; 

const Contact = () => {
    return (
        <section id="contact" className="relative py-16 bg-white dark:bg-gray-900">
            
            <div className="absolute top-0 left-0 w-full -mt-1">
                <img
                    src={MountainDivider}
                    alt="Divider"
                    className="w-full"
                />
            </div>

            
            <div className="container mx-auto px-6 pt-16">
                
                <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Contact
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    <div className="w-full lg:w-1/2 space-y-6">
                        
                        <div
                            className="flex items-center bg-gray-100 dark:bg-gray-800 p-5 rounded-md shadow-md group cursor-pointer"
                            onClick={() => (window.location.href = 'tel:+31621803724')}
                        >
                            <div
                                className="bg-green-500 p-4 rounded-full mr-4 flex items-center justify-center"
                                style={{ width: '48px', height: '48px' }}
                            >
                                <span className="text-white group-hover:animate-realistic-shake">
                                    📞
                                </span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-300 font-medium">
                                +31621803724
                            </p>
                        </div>
                        
                        <div
                            className="flex items-center bg-gray-100 dark:bg-gray-800 p-5 rounded-md shadow-md group cursor-pointer"
                            onClick={() =>
                                (window.location.href = 'mailto:amircrljenkovic@outlook.com')
                            }
                        >
                            <div
                                className="bg-green-500 p-4 rounded-full mr-4 flex items-center justify-center"
                                style={{ width: '48px', height: '48px' }}
                            >
                                <span className="text-white group-hover:animate-bounce-once">
                                    ✉️
                                </span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-300 font-medium">
                                amircrljenkovic@outlook.com
                            </p>
                        </div>
                        
                        <div
                            className="flex items-center bg-gray-100 dark:bg-gray-800 p-5 rounded-md shadow-md group cursor-pointer"
                            onClick={() =>
                                window.open(
                                    'https://www.google.com/maps?q=Purmerend,+Netherlands',
                                    '_blank'
                                )
                            }
                        >
                            <div
                                className="bg-green-500 p-4 rounded-full mr-4 flex items-center justify-center"
                                style={{ width: '48px', height: '48px' }}
                            >
                                <span className="text-white group-hover:animate-pulse-location">
                                    📍
                                </span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-300 font-medium">
                                Purmerend, Netherlands
                            </p>
                        </div>
                    </div>

                    
                    <div className="w-full lg:w-1/2">
                        <form
                            action="https://formspree.io/f/YOUR_FORM_ID"
                            method="POST"
                            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-md shadow-md space-y-6"
                        >
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Naam
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Bericht
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md transition"
                            >
                                Verstuur
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
