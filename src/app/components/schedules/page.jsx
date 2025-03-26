'use client';

const ScheduleSection = () => {
  const schedules = [
    {
      id: 1,
      icon: 'fa-ambulance',
      title: 'Emergency Cases',
      subtitle: 'Lorem Amet',
      description:
        'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
    },
    {
      id: 2,
      icon: 'icofont-prescription',
      title: 'Doctors Timetable',
      subtitle: 'Fusce Porttitor',
      description:
        'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
    },
    {
      id: 3,
      icon: 'icofont-ui-clock',
      title: 'Opening Hours',
      subtitle: 'Donec luctus',
      hours: [
        { day: 'Monday - Friday', time: '8.00-20.00' },
        { day: 'Saturday', time: '9.00-18.30' },
        { day: 'Monday - Thursday', time: '9.00-15.00' },
      ],
    },
  ];

  return (
    <section className="-mt-20 ">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="relative bg-[#61bece] text-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute text-[110px] opacity-20 right-4 bottom-4">
                <i className={`fa ${schedule.icon}`}></i>
              </div>
              <span className="block text-sm font-medium">{schedule.subtitle}</span>
              <h4 className="text-xl font-semibold mt-2">{schedule.title}</h4>
              {schedule.description && <p className="mt-4 text-white/80">{schedule.description}</p>}
              {schedule.hours && (
                <ul className="mt-4 space-y-1">
                  {schedule.hours.map((hour, index) => (
                    <li key={index} className="flex justify-between border-b border-white/30 pb-1">
                      <span>{hour.day}</span>
                      <span>{hour.time}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href="#"
                className="inline-block mt-4 font-medium border-b-2 border-transparent hover:border-white transition"
              >
                LEARN MORE <i className="fa fa-long-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
