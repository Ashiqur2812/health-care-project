import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="">
      {/* contact Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 lg:px-24 bg-[#82c4f785] ">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4">
            Kindly reach us to get the fastest response and treatment
          </p>
        </div>
        {/* Right Image */}
        <div>
          <Image
            src="/img/banner_img2.png"
            alt="Doctor"
            width={800}
            height={800}
            className="rounded-lg max-w-sm lg:max-w-2xl"
          />
        </div>
      </div>

      <div className="container relative mx-auto -mt-28 px-4 z-100 ">
        {/* Contact Form */}
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12">
            <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-8/12 mx-auto my-10">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="David John"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-800 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Your subject"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-800 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows="10"
                    className="w-full px-4 py-3 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Write something..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="flex items-center gap-2 px-10 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Find Us */}
        <div className="mt-20 container mx-auto px-4 lg:px-24 ">
          <h2 className="text-4xl md:text-6xl font-bold text-black">
            Find Us Here
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Phone */}
            <div className="flex items-center bg-[#e8f4f7] rounded-2xl shadow-md p-8 gap-4">
              <Image
                src="/img/contact/icon_1.svg"
                alt="Phone Icon"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-bold text-black">Phone</h3>
                <p className="text-gray-700">123-456-7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center bg-[#e8f4f7] rounded-2xl shadow-md p-8 gap-4">
              <Image
                src="/img/contact/icon_2.svg"
                alt="Email Icon"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-bold text-black">Email</h3>
                <p className="text-gray-700">example@email.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center bg-[#e8f4f7] rounded-2xl shadow-md p-8 gap-4">
              <Image
                src="/img/contact/icon_3.svg"
                alt="Location Icon"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-bold text-black">Location</h3>
                <p className="text-gray-700">
                  123 Anywhere St., Any City, 12345
                </p>
              </div>
            </div>
          </div>
           {/* Google Map */}
        <div className="mt-12">
          <iframe
            className="w-full h-[500px] rounded-2xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </div>
    </div>
  );
}
