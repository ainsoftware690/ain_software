"use client";
import React, { useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert(data.message);
        setFormData({ firstName: "", lastName: "", contact: "", email: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="w-full h-auto dark:bg-neutral-950/80 overflow-hidden">
      <div className="container mx-auto px-2 lg:px-12 py-16 mt-4 font-bold text-gray-900 dark:text-white" id="contact">
        <h1 className="text-4xl font-bold mb-4">Contact us</h1>
        <p className="mb-8 text-lg">Reach us easily by completing the form or finding our address</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="flex space-x-4">
              <div className="text-3xl"><MdAddIcCall /></div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760]">Call Anytime</h2>
                <p className="text-gray-700 font-bold mb-4">+91000000000 / +91000000000</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="text-3xl"><FaLocationDot /></div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760]">Location:</h2>
                <p className="text-gray-700 font-semibold mb-4">
                  Ambedkar Society, Golf Club Rd, Pune Maharashtra - 411006
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="text-3xl"><MdOutlineMarkEmailRead /></div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760]">Email Address:</h2>
                <p>
                  <Link href="mailto:daulatcars@gmail.com" className="text-blue-600 hover:underline">
                    helpdesk@earthconntravels.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="space-y-4 text-gray-700" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-1">First Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">Last Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-1">Contact<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">Email<span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Message<span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your queries here!"
                  className="w-full px-4 py-5 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>

              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
