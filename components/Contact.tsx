import React from "react";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#0d1117] text-[#c9d1d9] text-center overflow-hidden"
    >
      {/* Moving gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#161b22]/50 to-[#0d1117]/70 pointer-events-none animate-gradient-move"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-6 h-6 bg-[#58a6ff]/30 rounded-full animate-pulse-slow top-10 left-20"></div>
        <div className="absolute w-4 h-4 bg-[#61dafb]/30 rounded-full animate-pulse-slow top-32 right-16"></div>
        <div className="absolute w-5 h-5 bg-[#f24e1e]/20 rounded-full animate-pulse-slow top-1/2 left-1/3"></div>
        <div className="absolute w-3 h-3 bg-[#38bdf8]/25 rounded-full animate-pulse-slow bottom-24 right-28"></div>
        <div className="absolute w-6 h-6 bg-[#f7df1e]/20 rounded-full animate-pulse-slow bottom-10 left-16"></div>
      </div>

      <div className="relative z-10 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-[#161b22]/80 backdrop-blur-md rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-[#58a6ff]/20">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-[#58a6ff] mb-6 font-bold animate-fade-in-up">
          Get In Touch
        </h2>
        <p
          className="text-base sm:text-lg md:text-lg lg:text-xl mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out using the form below or via GitHub.
        </p>

        <form
          action="https://formspree.io/f/mayzlzno"
          method="POST"
          className="space-y-6 text-left animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#161b22] text-white border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] text-base sm:text-lg transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#161b22] text-white border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] text-base sm:text-lg transition"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 sm:p-4 rounded-md bg-[#161b22] text-white border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] text-base sm:text-lg transition"
          ></textarea>
          <button
            type="submit"
            className="bg-[#58a6ff] hover:bg-[#1f6feb] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-md font-semibold text-base sm:text-lg transition-all w-full sm:w-auto shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>

        <div
          className="mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="https://github.com/teosabz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#58a6ff] hover:text-white text-lg sm:text-xl transition-colors"
          >
            <FaGithub className="text-2xl sm:text-3xl animate-bounce-slow" />
            github.com/teosabz
          </a>
        </div>
      </div>

      {/* Tailwind custom animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 30s ease infinite;
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }

        @keyframes pulseSlow {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
