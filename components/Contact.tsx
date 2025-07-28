import React from "react";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 md:px-8 bg-[#0d1117] text-[#c9d1d9] text-center"
    >
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#58a6ff] mb-6 font-bold">
          Get In Touch
        </h2>
        <p className="text-base mb-10">
          I&#39;m always open to new opportunities and collaborations. Feel free
          to reach out using the form or via GitHub below.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mayzlzno" // replace with your own Formspree form ID
          method="POST"
          className="space-y-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#161b22] text-white border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#161b22] text-white border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-[#161b22] text-white border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#58a6ff] hover:bg-[#1f6feb] text-white py-3 px-6 rounded-md font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* GitHub Link */}
        <div className="mt-10">
          <a
            href="https://github.com/teosabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#58a6ff] hover:text-white text-lg transition-colors"
          >
            <FaGithub className="text-2xl" />
            github.com/teosabz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
