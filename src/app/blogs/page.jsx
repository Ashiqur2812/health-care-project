'use client'
import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard/BlogCard";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blog/get");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="text-gray-900 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-10 md:py-14 lg:py-20">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#274760]">
        Latest Health News & Tips
      </h1>

      {data.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No blog posts found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:mt-10 lg:mt-16">
          {data.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;