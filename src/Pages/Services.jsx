import React from 'react';
import {
  Briefcase,
  MonitorSmartphone,
  Megaphone,
  Code,
  Users,
} from 'lucide-react';

const services = [
  {
    title: 'Corporate Training',
    icon: <Briefcase size={32} className="text-pink-600" />,
    description: 'Industry-grade upskilling programs for colleges and organizations.',
  },
  {
    title: 'Smart Classroom Setup',
    icon: <MonitorSmartphone size={32} className="text-pink-600" />,
    description: 'Modern e-learning environments with digital and hybrid tools.',
  },
  {
    title: 'Branding & Marketing',
    icon: <Megaphone size={32} className="text-pink-600" />,
    description: 'Strategic branding and campaigns to help your business grow.',
  },
  {
    title: 'Web & Mobile App Development',
    icon: <Code size={32} className="text-pink-600" />,
    description: 'Custom software solutions tailored to your business needs.',
  },
  {
    title: 'IT Staffing Solutions',
    icon: <Users size={32} className="text-pink-600" />,
    description: 'On-demand tech talent and team augmentation for startups & enterprises.',
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-white via-rose-50 to-white py-20 px-6 md:px-16 lg:px-28 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-rose-700 mb-4">
          Our Core Services
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          Empowering businesses and institutions through tailored digital solutions and expert tech support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 hover:shadow-lg transition duration-300 p-6 rounded-2xl flex flex-col items-start space-y-4"
            >
              <div className="bg-pink-100 p-3 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold text-rose-700">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
