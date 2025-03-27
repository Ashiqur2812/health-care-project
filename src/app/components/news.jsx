import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "The Future of Telemedicine",
    description:
      "Discover how telemedicine is transforming healthcare accessibility and patient care.",
    date: "March 26, 2025",
    image: "/img/news1.jpg",
  },
  {
    id: 2,
    title: "AI in Healthcare: A Game Changer",
    description:
      "Learn how artificial intelligence is improving diagnostics and treatment plans.",
    date: "March 20, 2025",
    image: "/img/news2.jpg",
  },
  {
    id: 3,
    title: "Tips for a Healthy Lifestyle",
    description:
      "Simple yet effective ways to maintain a balanced and healthy lifestyle.",
    date: "March 15, 2025",
    image: "/img/news3.jpg",
  },
];

const NewsSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="mb-8 max-w-screen-sm text-center mx-auto py-3">
          <h2 className="text-3xl font-bold  text-gray-800">
            Keep Up With Our Most Recent Medical News.
          </h2>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            saepe sit illum deleniti quis eum non unde laboriosam dolorum
            incidunt?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{blog.date}</p>
                <p className="text-gray-700 mt-3">{blog.description}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
