"use client";
import Image from "next/image";
import React from "react";
import WhoWeAreImage from "../../../utils/Images/who-are.webp";
import WhoWeAreImage2 from "../../../utils/Images/Whoe-We-Are-info-02.webp";
import WhoWeAreImage3 from "../../../utils/Images/Whoe-We-Are-info-03.svg";
import WhoWeAreImage4 from "../../../utils/Images/Whoe-We-Are-reach-us.webp";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className=" text-gray-800 mb-10  ">
      <div className="w-screen bg-gray-900 h-auto text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 space-y-20">
          {/* Hero Section */}
          <div className="text-start mx-auto space-y-4">
            <h2 className="text-md font-semibold text-white">
              About us / Who We Are
            </h2>
            <h3 className="text-5xl text-white font-bold">
              Engineering Excellence for
              <br />
              Scalable, Secure Solutions
            </h3>
            <p className="text-xl text-white">
              Your mission is our focus. We deliver breakthrough digital
              innovations that <br />
              transform large federal agencies, improving the lives of people.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="w-screen bg-sky-900 h-auto text-white mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-10 items-center ">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold mx-4">Who We Are?</h2>
            <div className="w-16 h-1 mx-4 bg-blue-500 mb-4" />
            <p className="text-gray-white mx-4">
              AIN is a woman-owned small business that serves customer needs.
              With our passion and commitment, we design reliable digital
              foundations to solve business problems. We work with clients as
              partners to achieve their technology solutions and build
              sustainable processes that deliver exceptional results. We deliver
              IT professional services securely.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={WhoWeAreImage}
              alt="Who We Are Illustration"
              width={800}
              height={623}
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        {/* Vision Section - 1 */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-sky-900 mt-16">
          <div className="flex justify-center">
            <Image
              src={WhoWeAreImage2}
              alt="Vision 1"
              width={800}
              height={623}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold mx-4">OUR VISION</h2>
            <div className="w-16 h-1 mx-4 bg-blue-500 mb-4" />
            <h3 className="text-xl font-medium text-white mx-4">
              Empowering Secure Innovation
            </h3>
            <p className="text-white mx-4">
              To harness the power of technology to enhance successful outcomes
              for cybersecurity challenges and empower the human experience.
            </p>
          </div>
        </div>

        {/* Vision Section - 2 */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold mx-4">OUR VISION</h2>
            <div className="w-16 h-1 bg-blue-500 mb-4 mx-4" />
            <h3 className="text-xl font-medium text-white mx-4">
              Fostering Inclusive Innovation
            </h3>
            <p className="text-gray-white mx-4">
              We aim to build a team of passionate technologists who value
              Trust, Exploration, Collaboration, and Agile decision-making. We
              welcome people from all walks of life to contribute to and
              strengthen our culture of empathy and inclusiveness.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={WhoWeAreImage3}
              alt="Vision 2"
              width={608}
              height={473}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* New Section start */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4 mt-16 ">
          {/* Left Section */}
          <div className="flex-1 mb-10">
            <Image
              src={WhoWeAreImage4}
              alt="Reach Us Illustration"
              width={800}
              height={653}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          {/* rightContent */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-5xl font-bold text-white mx-4">
              Looking to scale your engineering efforts?
            </h2>
            <p className="text-white mx-4">
              We share common technology and strategies for scaling your product
              engineering and helping you to deliver high quality products.
            </p>
            <div>
              <Link
                href="/contact/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Get in touch
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 