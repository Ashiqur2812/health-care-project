const Newsletter = () => {
    return (
      <section className="bg-[#77c4d426] py-28">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Side - Text */}
            <div>
              <h6 className="text-2xl font-semibold text-gray-800 mb-2">
                Sign up for newsletter
              </h6>
              <p className="text-gray-600">
                Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br />
                homero alterum.
              </p>
            </div>
            {/* Right Side - Form */}
            <div>
              <form className="flex flex-col md:flex-row items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-14 w-full md:w-72 px-4 text-gray-700 border-none rounded-md shadow-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 md:mt-0 md:ml-4 h-14 w-full md:w-44 bg-[#61bece] text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Newsletter;
  