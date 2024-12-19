import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-darkbg text-gray-800 dark:text-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-4">Neem Contact Op</h1>
            <p className="mb-8 text-center max-w-xl">
                Heb je een vraag of wil je samenwerken? Vul het formulier in en ik neem zo snel mogelijk contact met je op!
            </p>
            <form
                className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">Naam</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">E-mailadres</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="subject">Onderwerp</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">Bericht</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md dark:bg-gray-700"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
                >
                    Versturen
                </button>
            </form>
            {submitted && (
                <p className="mt-4 text-green-600 font-semibold">
                    Bedankt voor je bericht! Ik neem snel contact met je op.
                </p>
            )}
        </div>
    );
};

export default ContactPage;
