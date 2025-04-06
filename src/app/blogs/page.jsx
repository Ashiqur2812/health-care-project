import BlogCard from "../components/BlogCard/BlogCard";

export const blogData = async () => {
  const responsive = await fetch("http://localhost:3000/api/blog/get");
  const data = await responsive.json();
  return data;
};

const Blogs = async () => {
  const blogs = await blogData();
  return (
    <div className="text-gray-900 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-10 md:py-14 lg:py-20">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#274760]">
        Latest Health News & Tips
      </h1>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:mt-10 lg:mt-16">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
