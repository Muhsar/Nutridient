import React from "react";
import Link from "next/link";
export default function Hero() {
  const images = ["/i1.jpg", "/i2.jpg", "/i3.jpg", "/i4.jpg", "/i5.jpg"];
  return (
    <section className="text-gray-600 body-font flex md:flex-row flex-col">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center flex-grow">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-6xl mb-4 font-writing font-extrabold text-gray-900" data-aos='fade-up' data-aos-duration='3000'>
            Nutridient
          </h1>
          <p className="mb-8 leading-relaxed">
            Get recipes from our list of foods.
          </p>
          <div className="flex justify-center items-center">
            <Link href="/recipes">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={`${images[Math.floor(Math.random() * images.length)]}`}
        data-aos='fade-up' data-aos-duration='1500'
        data-aos-easing='linear'
      />
    </section>
  );
}
