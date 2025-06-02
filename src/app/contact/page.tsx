'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    type_of_service: '',
    message: '',
  });
  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/thankyou');
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <section className="p-10 bg-sky-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8 text-lg">
          Fill out the form below and we'll get back to you as soon as we can.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-6">
            <div>
              <label htmlFor="type_of_service" className="block mb-1">
                Type of Service <span className="text-red-500">*</span>
              </label>
              <select
                id="type_of_service"
                name="type_of_service"
                required
                value={form.type_of_service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-400  outline-none"
              >
                <option value="">Select</option>
                <option value="Enterprise Services">Enterprise Services</option>
                <option value="Solutions">Solutions</option>
                <option value="Certifications">Certifications</option>
                <option value="Federal Government">Federal Government</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="full_name" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Enter Full Name"
                required
                value={form.full_name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-200  outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-200  outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1">
                Tell us more about your project or company
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Type here..."
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-200 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center gap-2"
            >
              <ArrowRight size={18} /> Submit
            </button>
          </form>

          {/* Right: Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] rounded-md overflow-hidden border-2 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.16342316556!2d-77.73743122513844!3d39.64603650218744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9ed5ac0b9c957%3A0x1fdec20a030709e8!2s30%20Summer%20St%2C%20Hagerstown%2C%20MD%2021740%2C%20USA!5e0!3m2!1sen!2sin!4v1747666391814!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              title="Map - 30 Summer St"
              aria-label="Google Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
