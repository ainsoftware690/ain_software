"use client";
import React from "react";

export default function ReservationKart() {
  return (
    <div>
      <div className="w-screen bg-sky-900 text-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ReservationKart.com
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            ReservationKart is a smart and secure travel booking platform
            designed to simplify your travel experience. Whether you&apos;re
            planning a quick weekend getaway or a long vacation, our portal
            offers a seamless way to book buses, hotels, flights, and holiday
            packages all in one place. Backed by advanced technology and
            responsive customer support, we ensure that your journey starts
            smoothly from the moment you book.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <a
            href="https://reservationkart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 bg-gray-800 border border-gray-600 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn px-6 py-3 rounded-md text-lg font-semibold transition duration-300 hover:scale-105"
          > 
            <span className="mr-2">✈️</span> Book your flight
          </a>
        </div>
      </div>
    </div>
  );
}
