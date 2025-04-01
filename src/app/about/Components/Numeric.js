import React from 'react';

const Numeric = () => {
    return (
        <div className='flex p-3 justify-between items-center container mx-auto  w-[80%] mt-24 bg-[url("https://i.ibb.co.com/4n63MsK9/fun-fact-bg.jpg")] bg-cover bg-no-repeat bg-center h-[400px]'>
            
           <div className='flex flex-col items-center justify-center h-full text-black'>
            <h1 className='font-bold  text-6xl'>20+</h1>
            <p className='font-semibold text-gray-400'>Years of Experience</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full text-black'>
            <h1 className='font-bold text-6xl'>95%</h1>
            <p className='font-semibold text-gray-400'>Patient Satisfaction Rating</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full text-black'>
            <h1 className='font-bold text-6xl'>5000+</h1>
            <p className='font-semibold text-gray-400'>Patient Served Annually</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full text-black'>
            <h1 className='font-bold text-6xl'>10+</h1>
            <p className='font-semibold text-gray-400'>HealthCare Provider</p>
           </div>
           <div className='flex flex-col items-center justify-center h-full text-black'>
            <h1 className='font-bold text-6xl'>20+</h1>
            <p className='font-semibold text-gray-400'>COnvinient locations</p>
           </div>
        </div>
    );
};

export default Numeric;