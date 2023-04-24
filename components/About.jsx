import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-[1240px] mx-auto relative flex justify-center items-center mb-10 ">
      <div className="text-black z-[2] mt-7 mb-10 text-center px-10  ">
        <h2 className="text-4xl font-bold p-3">About Us</h2>
        <h2 className="text-3xl font-bold pb-7">
          What is African Law Partners?
        </h2>
        <p className="text-justify text-xl text-gray-600 mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-5xl first-letter:font-bold first-letter:text-black  first-letter:mr-3 first-letter:float-left">
          Imagine yourself as someone who has never bought legal services or
          spoken to a lawyer before. Where do you go when you need legal advice?
          How do you know you are getting a good deal when you instruct someone?
          How can you trust them?
        </p>
        <p className="text-xl font-medium text-justify whitespace-pre-line">
          These questions are answered by African Law Partners the one stop shop
          for individual and small business legal needs. If you know what you
          are looking for (help buying a house, assistance with divorce, help
          making a claim, etc) we will present you with options for you to
          compare. Not only will you be able to compare different lawyers/law
          firms on price but also on how others rate the service they have been
          provided. If you are a lawyer, law firm or legal services provider we
          can assist you with making your legal services offering more
          competitive. Feel free to keep updated on our progress by following
          our Linkedin company page {"The African Law Partners "}
          <Link
            className="underline text-blue-600"
            href="http://www.linkedin.com"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
