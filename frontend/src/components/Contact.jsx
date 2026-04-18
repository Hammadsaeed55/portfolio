import React, { useState } from "react";
import axios from "axios";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { toast } from 'react-toastify';

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/create", user)
            .then((res) => {
                toast.success("Message sent successfully!");
                console.log(res.data)
                setUser({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
            }).catch(() => {
                toast.error("Failed to send message. Please try again");
            })
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full bg-gray-900 text-white py-12 px-6 md:px-16"
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12">
                Contact Me
            </h2>


            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        value={user.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded-md bg-gray-700 text-white border border-yellow-400 
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded-md bg-gray-700 text-white border border-yellow-400 
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    value={user.subject}
                    placeholder="Subject"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-yellow-400 
                     focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                    value={user.message}
                    required
                    rows="5"
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-yellow-400 
                     focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-md shadow-md 
                 transform hover:scale-105 transition duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <div className="w-11/12 md:w-full  lg:w-full h-[2px] mt-6 mx-auto 
                rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"></div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={scrollToTop}
                    className="w-10 h-12 flex items-center justify-center border-2 border-yellow-400 
             text-yellow-400  rounded-sm shadow-md 
             transition-all duration-300 ease-in-out 
             hover:bg-yellow-300 hover:text-black animate-bounce hover:cursor-pointer"
                >
                    <MdKeyboardDoubleArrowUp className="text-3xl font-extrabold" />
                </button>

            </div>

            <div className="text-center mt-4 text-gray-400 text-md">
                © {new Date().getFullYear()} Hammad Saeed. All rights reserved.
            </div>


        </section>
    );
};

export default Contact;
