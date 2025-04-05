// this is just demo design page to get data real ldesign will made by frontend side developer
import Card from "../Components/Card";
import Image from "next/image";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/doctors/get");
//   if (!res.ok) {
//     throw new Error("Failed To fetch data");
//   }
//   return res.json();
// }
async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/doctors/get", {
      next: { revalidate: 60 }, // Optional: Cache for 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch (Status ${res.status})`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return empty array as fallback
  }
}
const page = async () => {
  const datas = await getData();
  // console.log(datas);
  return (
    <div className="mb-8 text-center space-y-3 ">
      <div className="relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 lg:px-24  bg-gradient-to-r from-[#d2eaef] to-[#ABD1F2] ">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Introduce You to
            <br className="hidden md:block" />
            Our Experts
          </h1>
          <p className="text-gray-600 mt-4">
            The list of certified doctors with years of professional experiences
          </p>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/img/banner_img3.png"
            alt="Doctor"
            width={800}
            height={800}
            className="rounded-lg max-w-sm lg:max-w-2xl"
          />
        </div>
      </div>
      <div>
        <p className="text-gray-600 my-10">
          sort by category</p>
        <div className="px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas?.map((doctor, index) => (
          <Card key={index} data={doctor}>
            {" "}
          </Card>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default page;
