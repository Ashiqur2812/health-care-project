"use client";

import { motion } from "framer-motion";

const ScheduleSection = () => {
  const schedules = [
    {
      id: 1,
      icon: 'fa-ambulance',
      title: 'Emergency Care',
      subtitle: '24/7 Response',
      description:
        'Our emergency unit operates around the clock, equipped with advanced life-saving technology and trained professionals to respond swiftly.',
    },
    {
      id: 2,
      icon: 'fa-user-md',
      title: 'Doctors Timetable',
      subtitle: 'Plan Your Visit',
      description:
        'Access detailed doctor schedules to book your appointments in advance and avoid long waits. Your time matters to us.',
    },
    {
      id: 3,
      icon: 'fa-clock-o',
      title: 'Opening Hours',
      subtitle: 'We Are Available',
      hours: [
        { day: 'Monday - Friday', time: '08:00 AM - 08:00 PM' },
        { day: 'Saturday', time: '09:00 AM - 06:30 PM' },
        { day: 'Sunday', time: 'Closed' },
      ],
    },
  ];

  return (
    <div className="-mt-24 relative z-10 bg-transparent pb-16">
      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {schedules.map((schedule, index) => (
            <motion.div
              key={schedule.id}
              className="relative bg-[#61bece] text-white p-8 rounded-2xl shadow-2xl hover:shadow-[#61bece]/50 transition-all duration-300 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute text-[100px] opacity-10 right-4 bottom-4 group-hover:opacity-20 transition duration-300">
                <i className={`fa ${schedule.icon}`}></i>
              </div>

              <span className="block text-sm font-semibold uppercase tracking-wide">
                {schedule.subtitle}
              </span>

              <h4 className="text-2xl font-bold mt-2 mb-3">{schedule.title}</h4>

              {schedule.description && (
                <p className="text-white/90 leading-relaxed">{schedule.description}</p>
              )}

              {schedule.hours && (
                <ul className="mt-4 space-y-2">
                  {schedule.hours.map((hour, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-white/30 pb-1 text-sm"
                    >
                      <span>{hour.day}</span>
                      <span className="font-medium">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="#"
                className="inline-block mt-6 text-sm font-medium border-b-2 border-transparent hover:border-white transition duration-300"
              >
                LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScheduleSection;
