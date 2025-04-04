// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg bg-white">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={data?.image}
          alt={data?.name}
          width={500}
          height={300}
          className="object-cover w-full h-full"
        ></Image>
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">
          {data?.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{data?.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {data?.descriptions}
        </p>
      </div>

      {/* Button */}
      <Link
        href={`/find-doctor/${data._id}`}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center block py-2 rounded"
      >
        View Profile
      </Link>
    </div>
  );
};

export default Card;
