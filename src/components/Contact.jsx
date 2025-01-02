import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Contact
                </h2>
                <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
                    Heb je vragen of wil je samenwerken? Laat het me weten!
                </p>
                <form
                    className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6"
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Naam
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
                    >
                        Verstuur
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
