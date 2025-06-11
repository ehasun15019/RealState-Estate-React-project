import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonial"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          testimonial
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found HOme with us
      </p>

      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border border-gray-50 shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt="{testimonial.alt}"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl text-gra700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img src={assets.star_icon} alt="" key={index} />
              ))}
            </div>

            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
