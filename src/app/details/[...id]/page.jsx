"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const params = useParams(); // Get dynamic ID from the URL
    console.log(params); // Debugging: Check if params are working

    return (
        <div className="bg-blue-100 flex justify-between items-center p-10">
            {/* Corrected Image URL */}
            <Image
                src="https://i.ibb.co/0T2ZDW9/doctor-details.jpg"
                alt="Doctor"
                width={300}
                height={400}
                className="w-1/3 rounded-lg shadow-md"
            />
            <div className='flex flex-col items-center justify-center w-1/2 text-center'>
                <h1 className="text-2xl font-bold">Dr. Sarah Lee, MD, MPH, FAPA</h1>
                <p className="text-lg font-semibold text-gray-700">Board-certified Psychiatrist</p>
                <p className="text-gray-600 mt-2">
                    With more than 15 years of experience in human psychology and behavior,
                    Dr. Jones is an expert in managing mood disorders and anxiety disorders.
                </p>
                <p className="text-sky-500 font-semibold mt-3">
                    Doctor ID: {params.id} {/* Displaying dynamic ID */}
                </p>
            </div>
        </div>
    );
};

export default Page;
