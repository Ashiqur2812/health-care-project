import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  // console.log(data);

  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={data?.image} // Dynamic source from your data
          alt={`Dr. ${data?.name}`}
          width={400}
          height={400}
          className="object-cover"
          priority={false} // Set to true for images above the fold
        />
        <div className="absolute top-2 right-2 bg-blue-500">
          {data?.category}
        </div>
      </div>

      <h2>{data?.name}</h2>

      <p className="text-sm text-gray-600 line-clamp-3">{data?.descriptions}</p>

      <Link
        href={`/find-doctor/${data._id}`}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        View Profile
      </Link>
    </div>
  );
};

export default Card;
