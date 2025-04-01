import React from 'react';

const Expert = () => {
    return (
        <div className='container mx-auto w-[80%] mt-24'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='font-bold text-xl'>Meet Our</h1>
                <h1 className='font-bold text-5xl'>Expert DOctors</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mt-10'>
                <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://i.ibb.co.com/TBH2YbB4/doctor-1.png"
      className='rounded-full'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="font-semibold text-4xl">Dr. James Lee, MD</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://i.ibb.co.com/dsvPzYGm/doctor-2.png"
       className='rounded-full'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="font-semibold text-4xl">Dr. John Smith, MD</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://i.ibb.co.com/kgvdVK0N/doctor-3.png"
       className='rounded-full'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Expert;