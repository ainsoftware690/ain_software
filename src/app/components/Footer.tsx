"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoImage from "../../utils/Images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdOutlineMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-screen bg-sky-900 overflow-hidden border-t border-gray-700 mt-8">
      {/* Footer Info Section */}
      <div className="dark:bg-neutral-950/80 bg-sky-900">
        <div className="mx-auto px-8 md:px-16 py-8">
          <div className="md:flex md:justify-between">
            {/* Logo and Contact */}
            <div className="mb-6 md:mb-0">
              <Link href="#">
                <div className="relative w-36 h-14 sm:w-44 sm:h-18 md:w-52 md:h-20">
                  <Image
                    src={LogoImage}
                    alt="Earthconnlogo"
                    fill
                    className="object-contain object-left rounded-sm "
                    priority
                  />
                </div>
              </Link>

              <div className="flex space-x-4 font-medium mt-4 text-gray-300">
                <div className="text-2xl text-white">
                  <MdAddIcCall />
                </div>
                <div>
                  <p> +1(888) 206-5831</p>
                </div>
              </div>
              <div className="flex space-x-4 my-4 text-gray-300">
                <div className="text-2xl text-white">
                  <MdOutlineMarkEmailRead />
                </div>
                <div>
                  <Link
                    href="mailto:helpdesk@earthconntravels.com"
                    className="hover:underline"
                  >
                    helpdesk@earthconntravels.com
                  </Link>
                </div>
              </div>
              <div className="flex space-x-4 mb-3 text-gray-300">
                <div className="text-2xl text-white">
                  <FaLocationDot />
                </div>
                <div>
                  <p>Head office - 30 Summer St Hagerstown MD, 21740</p>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Link
                </h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/services" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://www.instagram.com/blue_star_motors/?igshid=MzRlODBiNWFlZA%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/people/Mudassar-Shaikh/100083367522006/?mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Legal
                </h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <Link href="/privacy-policy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms&conditions" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <Link href="#" className="hover:underline">
                Earthconntravels
              </Link>
              . All Rights Reserved.
            </span>
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <Link
                  href="https://www.facebook.com/people/100083367522006/?mibextid=ZbWKwL"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/earthconn-travel-llc/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.45 20.45h-3.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5h-3.6v-11h3.45v1.5h.05c.48-.9 1.68-1.8 3.45-1.8 3.7 0 4.4 2.45 4.4 5.65v5.65ZM5.4 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm-1.8 13.05h3.6v-11h-3.6v11ZM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0Z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </Link>

                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.966.24 2.423.403a4.918 4.918 0 0 1 1.78 1.04 4.918 4.918 0 0 1 1.04 1.78c.163.457.35 1.254.403 2.423.059 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.966-.403 2.423a4.918 4.918 0 0 1-1.04 1.78 4.918 4.918 0 0 1-1.78 1.04c-.457.163-1.254.35-2.423.403-1.266.059-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.966-.24-2.423-.403a4.918 4.918 0 0 1-1.78-1.04 4.918 4.918 0 0 1-1.04-1.78c-.163-.457-.35-1.254-.403-2.423C2.213 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.966.403-2.423a4.918 4.918 0 0 1 1.04-1.78 4.918 4.918 0 0 1 1.78-1.04c.457-.163 1.254-.35 2.423-.403C8.416 2.213 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.504.012-4.74.07-.99.048-1.523.21-1.877.35-.472.183-.81.4-1.165.755a3.118 3.118 0 0 0-.755 1.165c-.14.354-.302.887-.35 1.877-.058 1.236-.07 1.6-.07 4.74s.012 3.504.07 4.74c.048.99.21 1.523.35 1.877.183.472.4.81.755 1.165.354.354.692.572 1.165.755.354.14.887.302 1.877.35 1.236.058 1.6.07 4.74.07s3.504-.012 4.74-.07c.99-.048 1.523-.21 1.877-.35.472-.183.81-.4 1.165-.755a3.118 3.118 0 0 0 .755-1.165c.14-.354.302-.887.35-1.877.058-1.236.07-1.6.07-4.74s-.012-3.504-.07-4.74c-.048-.99-.21-1.523-.35-1.877a3.118 3.118 0 0 0-.755-1.165 3.118 3.118 0 0 0-1.165-.755c-.354-.14-.887-.302-1.877-.35-1.236-.058-1.6-.07-4.74-.07Zm0 3.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.7-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
