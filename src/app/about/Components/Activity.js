import React from 'react';

const Activity = () => {
    return (
        <div className='container mx-auto w-[80%]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                {/* Text Section */}
                <div className='col-span-2 p-5'>
                    <h1 className='font-semibold text-3xl text-gray-700 leading-tight'>
                        HAVE A LOOK AT
                    </h1>
                    <p className='font-bold text-5xl leading-tight'>
                        Our Fastest and <br /> Latest Activities
                    </p>
                </div>

                {/* First Image */}
                <div className='col-span-1 row-span-2 flex justify-center'>
                    <img
                        className='rounded-lg object-cover w-full '
                        src="https://i.ibb.co.com/rRNqFpvj/portfolio-1-lg.jpg"
                        alt='Activity 1'
                    />
                </div>

                {/* Second Image */}
                <div className='col-span-1 flex justify-center'>
                    <img
                        className='rounded-lg object-cover w-full h-[300px]'
                        src="https://i.ibb.co.com/nNbCTGxb/portfolio-2-lg-1.jpg"
                        alt='Activity 2'
                    />
                </div>

                {/* Third Image */}
                <div className='col-span-1 flex justify-center'>
                    <img
                        className='rounded-lg object-cover w-full h-[300px]'
                        src="https://i.ibb.co.com/3mLvSmFk/portfolio-3-lg-1.jpg"
                        alt='Activity 3'
                    />
                </div>
                <div className='col-span-2 flex justify-center'>
                    <img
                        className='rounded-lg object-cover w-full '
                        src="https://i.ibb.co.com/yFLYLNrv/portfolio-4-lg.jpg"
                        alt='Activity 3'
                    />
                </div>
{/* https://i.ibb.co.com/d44tqJCv/portfolio-5-lg.jpg */}
<div className='col-span-1 flex justify-center'>
                    <img
                        className='rounded-lg object-cover w-full '
                        src="https://i.ibb.co.com/d44tqJCv/portfolio-5-lg.jpg"
                        alt='Activity 3'
                    />
                </div>
            </div>
        </div>
    );
};

export default Activity;
