export const blogData = async () => {
  const responsive = await fetch("http://localhost:3000/api/blog/get");
  const data = await responsive.json();
  return data;
};

const Blogs = async () => {
  const blogs = await blogData();
  console.log(blogs);
  return (
    <div className="text-gray-900 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-20">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#274760]">
        Latest Health News & Tips
      </h1>
    </div>
  );
};

export default Blogs;
