'use client';
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal.js";
import { useState } from "react";
import { toast } from 'sonner'



export default function CollaborateModal() {
  // Local state to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: "", email: "", message: "" });
    } else {
      const error = await response.json();
      toast(`Error: ${error.error || 'Something went wrong.'}`);
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    toast("An error occurred. Please try again later.");
  }
};


  return (
    <div className="mt-13    flex items-center justify-center">
      <Modal>
        <ModalTrigger className="relative bg-black dark:bg-dark dark:text-white text-white px-6 py-3 rounded-full 
                                    font-semibold flex justify-center items-center group/modal-btn overflow-hidden
                                    border  border-cyan-600 hover:border-cyan-700  transition duration-300">
          <span className=" text-2xl group-hover/modal-btn:translate-x-60 text-center transition duration-500">
            Let’s Collaborate
          </span>
          <div className="-translate-x-40 text-4xl  group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            {/* <Handshake className="w-6 h-6 text-black mr-2" /> */}
            🤝
          </div>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>

           <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Enter Name Your Name here" 
    required
    className="w-full px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm"
  />
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="abc@gmail.com"
    required
    className="w-full px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-sm"
  />
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell us more about your idea or project..."
    rows={4}
    required
    className="w-full px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none shadow-sm"
  />

  <ModalFooter className="flex justify-center gap-5 mt-6 px-6 ">
  {/* Submit Button */}
  <button
    type="submit"
    className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 text-white font-semibold tracking-wide shadow-md shadow-emerald-800/40 border border-transparent hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
  >
    🚀 Send Message
  </button>
</ModalFooter>

</form>

          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
