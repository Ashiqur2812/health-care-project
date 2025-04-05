// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="overflow-hidden rounded-lg border-sky-100 border-2 p-2">
      {/* Image Section */}
      <div className="relative h-72 bg-gray-100">
        <Image
          src={data?.image}
          alt={data?.name}
          width={500}
          height={300}
          className="object-cover w-full h-full"
        ></Image>
        <div className="absolute text-xl bottom-0 left-28 bg-[#307bc4] text-white px-8 py-1 rounded-tl-xl rounded-tr-xl">
          {data?.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">{data?.name}</h2>
        <p className="text-lg text-gray-600 line-clamp-3">
          {data?.descriptions}
        </p>
      </div>

      {/* Button */}
      <Link
        href={`/find-doctor/${data._id}`}
        className="w-full bg-[#86bbf1] hover:bg-[#307bc4] text-white text-center block p-4 text-xl rounded"
      >
        View Profile
      </Link>
    </div>
  );
};

export default Card;
