'use client';
import Image from 'next/image';
import { HoverEffect } from './ui/card-hover-effect';

const features = [
  {
    title: 'Real-Time Collaboration',
    description:
      'At AIN, we promote open communication and teamwork, ensuring that our team is connected to achieve outstanding results.',
    link: '/features/real-time-collaboration',
    icon: '/Images/Real-Time-Collaboration.svg',
  },
  {
    title: 'Excellence & Innovation',
    description:
      'Our commitment to quality drives us to innovate continuously, delivering cutting-edge solutions that meet client needs.',
    link: '/features/excellence-innovation',
    icon: '/Images/Excellence-Innovation.svg',
  },
  {
    title: 'Implementation Expertise',
    description:
      'With extensive experience, our professionals ensure efficient project execution, helping clients achieve their goals swiftly.',
    link: '/features/implementation-expertise',
    icon: '/Images/Implementation-Expertise.svg',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 px-5 md:px-10 bg-[#0A0A0A] text-white">
      <div className="text-4xl md:text-5xl font-bold mb-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-work-sans mb-2">
          Why Choose Us?
        </h2>
         <div className="w-12 h-[5px] bg-gray-700 mb-6"></div>
      </div>

      <HoverEffect
        className="max-w-7xl mx-auto"
        items={features.map((feature) => ({
          title: feature.title,
          icon: feature.icon,
          description: feature.description,
          link: feature.link,
        }))}
      />
    </section>
  );
}
