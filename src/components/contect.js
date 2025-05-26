'use client';

import CollaborateModal from "./model.js";

export default function ContactSection() {
  return (
    <div id="contect" className="relative flex flex-col items-center min-h-screen px-6 pt-12 pb-24 bg-black text-white overflow-hidden">
  <div className="text-center mb-12 max-w-3xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide leading-tight md:leading-snug">
      Crafting Code with Purpose.<br /> Ready to Collaborate?
    </h2>
    <p className="mt-5 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
      I'm currently open to internships, freelance projects & innovative tech roles. Let's create something exceptional together.
    </p>
    <div className="mt-8">
      <CollaborateModal />
    </div>
  </div>
</div>

  );
}
