"use client";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-200 h-1/2 w-1/4 rounded flex justify-start items-center p-4 flex-col drop-shadow-xl"
    >
      <h1 className="text-xl font-bold">Login</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="username" className="mt-10 font-bold">
            Username
          </label>
          <input type="text" className="rounded p-2" />
          <label htmlFor="password" className="mt-10 font-bold">
            Password
          </label>
          <input type="text" className="rounded p-2" />
        </div>
        <button className="bg-black text-white rounded p-2 w-1/2 mt-10 hover:scale-105 duration-110 ease-in-out">
          Login
        </button>
      </div>
    </motion.div>
  );
}
