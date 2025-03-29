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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data:", doctor);
  };

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add Doctor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Doctors Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Doctor's Name"
              value={doctor.name}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="descriptions"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="descriptions"
              id="descriptions"
              placeholder="Description"
              value={doctor.descriptions}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-800"
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Image URL"
              value={doctor.image}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="degree" className="block font-medium text-gray-700">
              Degrees (comma separated)
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Degrees (comma separated)"
              value={doctor.degree}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block font-medium text-gray-700"
            >
              Experience (comma separated)
            </label>
            <textarea
              name="experience"
              id="experience"
              placeholder="Experience (comma separated)"
              value={doctor.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block font-medium text-gray-700"
            >
              Specialization
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Specialization"
              value={doctor.category}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={doctor.email}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={doctor.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="day" className="block font-medium text-gray-700">
              Available Day
            </label>
            <input
              type="text"
              name="day"
              id="day"
              placeholder="Available Day"
              value={doctor.day}
              onChange={handleChange}
              className="w-full p-2 border rounded  bg-white text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="hour" className="block font-medium text-gray-700">
              Available Hours
            </label>
            <input
              type="text"
              name="hour"
              id="hour"
              placeholder="Available Hours"
              value={doctor.hour}
              onChange={handleChange}
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
