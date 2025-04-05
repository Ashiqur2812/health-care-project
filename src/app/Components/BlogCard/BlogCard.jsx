import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { title, description, image, date } = blog || {};
  return (
    <div>
      <div className="w-full h-[400px] relative mb-4">
        <Image src={image} alt={title} fill className="object-cover"></Image>
      </div>
      <h3>{date}</h3>
      <h2 className="text-2xl font-bold text-[#274760]">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BlogCard;
