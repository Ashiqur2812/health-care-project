import Image from "next/image";
import Link from "next/link";

// Department Data
const departments = [
  {
    name: "Emergency Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_1.svg",
  },
  {
    name: "Pediatric Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_2.svg",
  },
  {
    name: "Cardiology Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_3.svg",
  },
  {
    name: "Obstetrics and Gynecology",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_4.svg",
  },
  {
    name: "Psychiatry Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_5.svg",
  },
  {
    name: "Neurology Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_6.svg",
  },
  {
    name: "Occupational Therapy Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_7.svg",
  },
  {
    name: "Physical Therapy Department",
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    iconSrc: "/img/icon_8.svg",
  },
];

export default function Departments() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 lg:px-24 bg-gradient-to-r from-[#d2eaef] to-[#ABD1F2]">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Get to Know <br className="hidden md:block" /> Prohealth Departments
          </h1>
          <p className="text-gray-600 mt-4">
            At ProHealth, we offer a wide range of medical and healthcare
            services that are designed to meet your individual needs and help
            you achieve optimal health.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/img/banner_img.png"
            alt="Doctor"
            width={800}
            height={800}
            className="rounded-lg max-w-sm lg:max-w-2xl"
          />
        </div>
      </div>

      {/* Departments Section */}
      <div className="relative -mt-24 px-4 lg:px-24 z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="relative bg-white p-6 pb-24 rounded-3xl shadow-md group hover:bg-blue-100 transition-all duration-300"
          >
            {/* Content Section */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Image
                src={dept.iconSrc}
                alt={`${dept.name} Icon`}
                width={60}
                height={60}
                className="w-16 h-16 mx-auto sm:mx-0"
              />
              <div className="space-y-5 text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {dept.description}
                </p>
              </div>
            </div>

            {/* Arrow Button */}
            <button className="absolute bottom-0 right-0 bg-blue-300 px-3 rounded-br-2xl rounded-tl-2xl transition-all duration-300 group-hover:bg-blue-400">
              <span className="text-white text-4xl md:text-6xl">→</span>
            </button>
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
}