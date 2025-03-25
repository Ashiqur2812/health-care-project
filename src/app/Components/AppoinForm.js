"use client";
import React, { useState } from "react";

const AppoinForm = () => {
    const [selectedDoctor, setSelectedDoctor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Doctor Selected:", selectedDoctor);
    };

    return (
        <div className="mx-auto w-[80%] mt-24 bg-gray-100">
            <div className="flex flex-col md:flex-row  md:justify-between items-center w-full bg-base-100 shadow-2xl p-6">
                {/* Office Time Section */}
                <div className="w-full md:w-[30%] p-5">
                    <h1 className="font-bold text-4xl">Office Time</h1>
                    <div className="flex flex-col">
                        <h2>Address</h2>
                        <p>8863 North Deerfield Street Bronx, NY 104609</p>
                    <h2>Office Hours</h2>
                    <ul>
                        <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                        <li>Saturday: 10:00 AM - 2:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>

                </div>
                <div className="flex flex-col">
                        <h2>Work Times</h2>
                       
                    <ul>
                        <li>+7 10 34 7892 34
                        </li>
                        <li>+7 10 24 1344 54</li>
                       
                    </ul>

                </div>
</div>
                {/* Form Section */}
                <div className="w-full md:w-[70%]">
                    <h2 className="text-3xl  font-bold text-center mb-4">Appointment Form</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name & Email */}
                        <div className="form-control mb-4">
                            <div className="flex justify-between gap-4 items-center w-full">
                                <div className="flex flex-col w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="bg-[#CFFDE0] input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Phone & Doctor Selection */}
                        <div className="form-control mb-4">
                            <div className="flex justify-between gap-4 items-center w-full">
                                <div className="flex flex-col w-1/2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <label className="label">
                                        <span className="label-text">Select Doctor</span>
                                    </label>
                                    <select
                                        className="select select-bordered w-full"
                                      
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Doctor
                                        </option>
                                        <option value="neurologist">Neurologist</option>
                                        <option value="physiotherapist">Physiotherapist</option>
                                        <option value="gynecologist">Gynecologist</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Additional Comments</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Write any concerns or details here..."
                                value=""
                               
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#A1EEBD] w-full">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppoinForm;
