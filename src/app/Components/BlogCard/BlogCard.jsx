"use client";
import Image from "next/image";
import { useState } from "react";

const BlogCard = ({ blog }) => {
  const { title, description, image, date } = blog || {};
  const [showFull, setShowFull] = useState(false);
  const handleShowFull = () => {
    setShowFull(!showFull);
  };
  return (
    <div>
      <div className="w-full h-[300px] md:h-[400px] relative mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded"
        ></Image>
      </div>
      <h3 className="text-sm text-blue-500 font-medium">{date}</h3>
      <h2 className="text-2xl font-medium text-[#274760] mb-6 mt-3">{title}</h2>
      <p className="text-gray-700">
        {showFull ? description : `${description.slice(0, 300)} ....`}
      </p>
      <button
        onClick={handleShowFull}
        className="text-[#274760] mt-5 font-medium hover:text-blue-500 hover:underline"
      >
        {showFull ? "Show Less" : "Learn more"}
      </button>
    </div>
  );
};

export default BlogCard;
