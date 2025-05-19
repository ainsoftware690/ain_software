'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sky-900 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-2">Get in Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mb-4"></div>
        <p className="text-white mb-10">
          Fill out the form below and we&apos;ll get back to you as soon as we can.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <form className="space-y-6" method="POST">
            <div>
              <label className="block mb-1 text-md font-bold text-white">
                Type of Service <span className="text-red-500">*</span>
              </label>
              <select
                name="type_of_service"
                required
                className="w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
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
             
              <label className="block mb-1 text-md font-bold text-white ">Full Name</label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter Full Name"
                className="w-full border text-sm text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block mb-1 text-md font-bold text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="w-full border text-gray-400 text-sm border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-md font-bold text-white">
                Tell us more about your project or company
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Type here..."
                className="w-full border text-gray-400 text-sm border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
                Submit
              </button>
            </div>
          </form>

          {/* Right: Google Map */}
          <div className="w-full h-full">

            <iframe
             className="w-full h-full min-h-[400px] rounded-lg border"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.16342316556!2d-77.73743122513844!3d39.64603650218744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9ed5ac0b9c957%3A0x1fdec20a030709e8!2s30%20Summer%20St%2C%20Hagerstown%2C%20MD%2021740%2C%20USA!5e0!3m2!1sen!2sin!4v1747666391814!5m2!1sen!2sin" 
             loading="lazy"
              title= "30 Summer St, Hagerstown, MD 21740, USA"
              aria-label= "30 Summer St, Hagerstown, MD 21740, USA">
             </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;