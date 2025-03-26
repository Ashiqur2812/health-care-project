"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ScheduleSection from "../schedules";


const Banner = () => {
  const slides = [
    { id: 1, image: "/img/slider.jpg", buttonText: "Learn More" },
    { id: 2, image: "/img/slider2.jpg", buttonText: "About Us" },
    { id: 3, image: "/img/slider3.jpg", buttonText: "Contact Now" },
  ];

  return (
    <div className="slider relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[600px] bg-cover bg-center flex items-center px-6 lg:px-24"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-black">
                  <h1 className="text-4xl font-bold leading-tight">
                    We Provide <span className="text-[#61bece]">Medical</span>{" "}
                    Services That You Can{" "}
                    <span className="text-[#61bece]">Trust!</span>
                  </h1>
                  <p className="mt-4 text-lg text-[#888c9b]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sed nisl pellentesque, faucibus libero eu, gravida
                    quam.
                  </p>
                  <div className="mt-6 space-x-4">
                    <a
                      href="#"
                      className="bg-[#61bece] text-white px-6 py-3 rounded-md font-semibold"
                    >
                      Get Appointment
                    </a>
                    <a
                      href="#"
                      className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
