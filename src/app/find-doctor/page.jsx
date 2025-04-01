import Card from "../Components/Card";

async function getData() {
  const res = await fetch("http://localhost:3000/api/doctors/get");
  if (!res.ok) {
    throw new Error("Failed To fetch data");
  }
  return res.json();
}

const page = async () => {
  const datas = await getData();
  

  return (
   
      <div className="mb-8 text-center space-y-3 ">
        <h1 className="text-3xl font-bold mb-2">Our Medical Specialists</h1>
        <p className="text-gray-500">
          Find the right doctor for your needs from our team of specialists
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((doctor,index) => (
         <Card key={index} data={doctor}> </Card>
        ))}
        </div>
      </div>
   
  );
};

export default page;


const DoctorsList = () => {
  // Fake data - you can replace this with your real data later
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      category: "Cardiologist",
      rating: 4.8,
      experience: "15 years",
      patients: 1200,
      availability: "Mon, Wed, Fri",
      details:
        "Specializes in interventional cardiology with extensive experience in complex cardiac procedures and heart disease management.",
      photo: "/api/placeholder/400/400",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      category: "Pediatrician",
      rating: 4.9,
      experience: "12 years",
      patients: 1500,
      availability: "Tue, Thu, Sat",
      details:
        "Board-certified pediatrician focused on preventive care and childhood development. Known for his gentle approach with young patients.",
      photo: "/api/placeholder/400/400",
    },
    {
      id: 3,
      name: "Dr. Rebecca Martinez",
      category: "Dermatologist",
      rating: 4.7,
      experience: "10 years",
      patients: 950,
      availability: "Mon, Tue, Thu",
      details:
        "Specializes in medical and cosmetic dermatology, with expertise in treating skin cancers, acne, and various skin conditions.",
      photo: "/api/placeholder/400/400",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      category: "Orthopedic Surgeon",
      rating: 4.6,
      experience: "20 years",
      patients: 1800,
      availability: "Wed, Fri",
      details:
        "Expert in joint replacement surgery and sports medicine. Has performed over 3,000 successful orthopedic procedures.",
      photo: "/api/placeholder/400/400",
    },
    {
      id: 5,
      name: "Dr. Emily Patel",
      category: "Neurologist",
      rating: 4.8,
      experience: "14 years",
      patients: 1100,
      availability: "Mon, Wed, Fri",
      details:
        "Specializes in treating neurological disorders including epilepsy, stroke recovery, and movement disorders.",
      photo: "/api/placeholder/400/400",
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      category: "Psychiatrist",
      rating: 4.9,
      experience: "18 years",
      patients: 1300,
      availability: "Tue, Thu",
      details:
        "Focuses on mood disorders, anxiety, and PTSD treatment using both medication management and therapeutic approaches.",
      photo: "/api/placeholder/400/400",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
      </div>
    </div>
  );
};

DoctorsList;
