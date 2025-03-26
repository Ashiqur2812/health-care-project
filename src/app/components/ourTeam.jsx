import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    image: "/img/doctor1.jpg",
    name: "Will Smith",
    designation: "Neurologist",
  },
  {
    id: 2,
    image: "/img/doctor2.jpg",
    name: "Sarah Johnson",
    designation: "Cardiologist",
  },
  {
    id: 3,
    image: "/img/doctor3.jpg",
    name: "David Brown",
    designation: "Orthopedic Surgeon",
  },
  {
    id: 4,
    image: "/img/doctor4.jpg",
    name: "Emily Davis",
    designation: "Pediatrician",
  },
  {
    id: 5,
    image: "/img/doctor5.jpg",
    name: "Michael Wilson",
    designation: "Dermatologist",
  },
  {
    id: 6,
    image: "/img/doctor6.jpg",
    name: "Olivia Martinez",
    designation: "Gynecologist",
  },
  {
    id: 7,
    image: "/img/doctor7.jpg",
    name: "Olivia Martinez",
    designation: "Gynecologist",
  },
  {
    id: 8,
    image: "/img/doctor8.jpg",
    name: "Olivia Martinez",
    designation: "Gynecologist",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Meet Our Expert Medical Team
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Our dedicated team of medical professionals ensures the best
          healthcare services for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium">
                  {member.designation}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Academic Degree: {member.degree}
                </p>
                <div className="flex justify-center gap-4 mt-4 text-gray-500">
                  <FaSkype className="hover:text-blue-600 cursor-pointer" />
                  <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-600 cursor-pointer" />
                  <FaInstagram className="hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
