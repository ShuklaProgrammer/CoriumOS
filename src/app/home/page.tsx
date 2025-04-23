"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GradientBackground from "./_components/GradientBackground";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <GradientBackground />

      <div className="absolute top-0 left-0 z-10 flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl cursor-pointer">
          DEV.
        </h1>
        <button className="group relative z-10 cursor-pointer overflow-hidden rounded border md:px-4 px-2 py-2 text-white">
          <span className="absolute inset-0 z-0 origin-right scale-x-0 transform bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:text-black text-sm md:text-base">
            Contact Me Today
          </span>
        </button>
      </div>

      <motion.div
        initial={{ y: 300, rotate: -10, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none relative z-10 flex h-full items-center justify-center"
      >
        <div className="lg:w-[50%] md:w-[70%] w-[80%] overflow-hidden rounded-[20px] border-[10px] border-black bg-white p-0 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
          <div className="bg-black p-3 text-center font-mono text-sm tracking-widest text-white uppercase">
            Sample Website
          </div>

          <div className="flex h-[300px] flex-col items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-10 text-center md:h-[400px] md:p-20">
            <h1 className="max-w-xl text-2xl font-extrabold text-gray-800 md:text-3xl lg:text-4xl">
              Are you ready for your digital transformation?
            </h1>
            <Image
              src="/images/image.png"
              alt="Sample Website Graphic"
              className="mt-4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 z-10 flex w-full justify-center">
        <div className="flex flex-col items-center text-white">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <ArrowDown size={32} />
          </motion.div>
          <p className="mt-2 font-semibold">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
