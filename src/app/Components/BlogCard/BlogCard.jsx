import Image from "next/image";

const BlogCard = ({ blog }) => {
  console.log(blog);
  const { title, description, image } = blog || {};
  return (
    <div>
      <Image src={image} alt={title} width={400} height={400}></Image>
      <h2 className="text-2xl font-bold text-[#274760]">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BlogCard;
