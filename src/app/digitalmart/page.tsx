'use client';
import React from 'react';
import Link from 'next/link';

const DigitalMarketMart: React.FC = () => {
  return (
    <section className="w-screen bg-sky-900 text-white py-12 px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          DigitalMarketMart
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          DigitalMarketMart is a smart and secure travel booking platform designed to simplify your travel experience.
          Whether you&apos;re planning a quick weekend getaway or a long vacation, our portal offers a seamless way to book buses,
          hotels, flights, and holiday packages all in one place. Backed by advanced technology and responsive customer
          support, we ensure that your journey starts smoothly from the moment you book.
        </p>
        <Link href="/details" passHref>
          <button className="w-60 transform rounded-lg border border-gray-300 px-6 py-2 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
            Details →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DigitalMarketMart;
