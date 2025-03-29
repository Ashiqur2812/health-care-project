"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import { PiGraduationCap } from "react-icons/pi";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
const Page = () => {
    const params = useParams(); // Get dynamic ID from the URL
    console.log(params); // Debugging: Check if params are working

    return (
        <div>
        <div className="bg-blue-100 flex justify-between items-center p-10">
            {/* Corrected Image URL */}
            <img 
                src="https://i.ibb.co/0T2ZDW9/doctor-details.jpg" 
                alt="Doctor" 
                className="w-1/3 rounded-lg shadow-md"
            />
            
            <div className='flex flex-col items-center justify-center w-1/2 text-center'>
                <h1 className="text-2xl font-bold">Dr. Sarah Lee, MD, MPH, FAPA</h1>
                <p className="text-lg font-semibold text-gray-700">Board-certified Psychiatrist</p>
                <p className="text-gray-600 mt-2">
                    With more than 15 years of experience in human psychology and behavior, 
                    Dr. Jones is an expert in managing mood disorders and anxiety disorders.
                </p>
                <p className="text-blue-500 font-semibold mt-3">
                    Doctor ID: {params.id} {/* Displaying dynamic ID */}
                </p>
            </div>
        </div>
        <div className='w-1/2 mx-auto '>
        <div className='w-[200%]'>

            <FcGraduationCap size={40} className="text-blue-500" />
            </div>
            <h1 className='flex justify-start items-center'> <FaCircle /> University of California, San Francisco.<br/>Medical degree</h1>
                 <p className='flex justify-start items-center'> <FaCircle className='text-blue-500'/> University of California, Los Angeles (UCLA) Medical Center.<br/>Completed residency training in psychiatry</p>
<p className='flex justify-start items-center'> <FaCircle />University of California, Berkeley.

Master of Public Health degree

</p>
        </div>
        </div>
    );
};

export default Page;
