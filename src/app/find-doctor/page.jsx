// this is just demo design page to get data real ldesign will made by frontend side developer
import Card from "../Components/Card";

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
  console.log(datas);
  return (
    <div className="mb-8 text-center space-y-3 ">
      <h1 className="text-3xl font-bold mb-2">Our Medical Specialists</h1>
      <p className="text-gray-500">
        Find the right doctor for your needs from our team of specialists
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas?.map((doctor, index) => (
          <Card key={index} data={doctor}>
            {" "}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
