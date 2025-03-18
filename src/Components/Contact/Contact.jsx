import  { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '' // Added message field
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Compose email body
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
        `;
        
        // Create mailto link
        const mailtoLink = `mailto:mail.bibhanshu127@gmail.com?subject=Contact Form Submission from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id='contact' className="min-h-screen relative flex items-top justify-center bg-slate-700 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 py-12">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Information */}
                        <div className="p-8 bg-gray-100 rounded-xl shadow-lg">
                            <h1 className="text-4xl text-gray-800 font-extrabold tracking-tight">
                                Let's Connect!
                            </h1>
                            <p className="text-xl font-medium text-gray-600 mt-4">
                                I'm always open to discussing new projects, opportunities, and collaborations.
                            </p>

                            {/* Location */}
                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-72">
                                    Jain Global Campus, Janaadar Boys Hostel
                                    <br />
                                    Kanakapura Road, 562112
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 8431615618
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-72">
                                    mail.bibhanshu127@gmail.com
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex gap-4">
                                <a href="https://github.com/bibhanshu12" className="text-gray-600 hover:text-gray-800">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/bibhanshu-karn-118640253/" className="text-gray-600 hover:text-gray-800">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
                            
                            {/* Name Input */}
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-3 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-3 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 1234567890"
                                    className="w-full px-3 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    rows="4"
                                    className="w-full px-3 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-200 flex items-center justify-center"
                            >
                                Send Message
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}