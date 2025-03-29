"use client";

import { useState } from "react";

const AddDoctors = () => {
  const [doctor, setDoctor] = useState({
    name: "",
    descriptions: "",
    image: "",
    degree: "",
    experience: "",
    category: "",
    email: "",
    phoneNumber: "",
    day: "",
    hour: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const degree = doctor.degree.split(",");
    const experience = doctor.experience.split(",");
    const doctorsData = {
      name: doctor.name,
      descriptions: doctor.descriptions,
      image: doctor.image,
      degree,
      experience,
      category: doctor.category,
      email: doctor.email,
      phoneNumber: doctor.phoneNumber,
      day: doctor.day,
      hour: doctor.hour,
    };
    console.log(doctorsData);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add Doctor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1"
            >
              Doctors Name<span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Doctor's Name"
              value={doctor.name}
              onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
              className="w-full p-2 border rounded bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="descriptions"
              className="block font-medium text-gray-700 mb-1"
            >
              Description<span className="text-red-600 text-lg">*</span>
            </label>
            <textarea
              name="descriptions"
              id="descriptions"
              placeholder="Description"
              value={doctor.descriptions}
              onChange={(e) =>
                setDoctor({ ...doctor, descriptions: e.target.value })
              }
              className="w-full p-2 border rounded bg-white text-gray-800"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block font-medium text-gray-700 mb-1"
            >
              Image URL<span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Image URL"
              value={doctor.image}
              onChange={(e) => setDoctor({ ...doctor, image: e.target.value })}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="degree"
              className="block font-medium text-gray-700 mb-1"
            >
              Degrees (comma separated)
              <span className="text-red-600 text-lg">*</span>
            </label>

            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Degrees (comma separated)"
              value={doctor.degree}
              onChange={(e) => setDoctor({ ...doctor, degree: e.target.value })}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block font-medium text-gray-700 mb-1"
            >
              Experience (comma separated)
              <span className="text-red-600 text-lg">*</span>
            </label>

            <input
              name="experience"
              id="experience"
              placeholder="Experience (comma separated)"
              value={doctor.experience}
              onChange={(e) =>
                setDoctor({ ...doctor, experience: e.target.value })
              }
              className="w-full p-2 border rounded  bg-white text-gray-800"
            ></input>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block font-medium text-gray-700 mb-1"
            >
              Specialization<span className="text-red-600 text-lg">*</span>
            </label>
            <select
              name="category"
              id="category"
              value={doctor.category}
              onChange={(e) =>
                setDoctor({ ...doctor, category: e.target.value })
              }
              className="w-full p-2 border rounded bg-white text-gray-800"
            >
              <option value="">Select Specialization</option>
              <option value="Medicine">Medicine</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Psychiatrist">Psychiatrist</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email<span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={doctor.email}
              onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block font-medium text-gray-700 mb-1"
            >
              Phone Number<span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={doctor.phoneNumber}
              onChange={(e) =>
                setDoctor({ ...doctor, phoneNumber: e.target.value })
              }
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="day"
              className="block font-medium text-gray-700 mb-1"
            >
              Available Day<span className="text-red-600 text-lg">*</span>
            </label>

            <select
              name="day"
              id="day"
              value={doctor.day}
              onChange={(e) => setDoctor({ ...doctor, day: e.target.value })}
              className="w-full p-2 border rounded bg-white text-gray-800"
            >
              <option value="">Select a Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="hour"
              className="block font-medium text-gray-700 mb-1"
            >
              Available Hours<span className="text-red-600 text-lg">*</span>
            </label>

            <input
              type="text"
              name="hour"
              id="hour"
              placeholder="Available Hours"
              value={doctor.hour}
              onChange={(e) => setDoctor({ ...doctor, hour: e.target.value })}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
