import React from 'react';

const Contact = () => (
  <section className="py-12 px-4 bg-blue-50 min-h-[60vh]">
    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="bg-white p-8 rounded shadow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Get in Touch</h3>
          <p className="mb-4 text-gray-700">Have questions or need support? Fill out the form or reach us directly at:</p>
          <ul className="mb-4">
            <li className="mb-2"><span className="font-semibold">Email:</span> support@medreport.com</li>
            <li className="mb-2"><span className="font-semibold">Phone:</span> (123) 456-7890</li>
            <li><span className="font-semibold">Address:</span> 123 Health St, Wellness City, 00000</li>
          </ul>
        </div>
        <div className="mt-8">
          <div className="w-full h-40 bg-blue-200 flex items-center justify-center rounded">
            <span className="text-blue-700">[Map Placeholder]</span>
          </div>
        </div>
      </div>
      <form className="bg-white p-8 rounded shadow space-y-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Send Us a Message</h3>
        <div>
          <label className="block text-blue-700 mb-2">Name</label>
          <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-blue-700 mb-2">Email</label>
          <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-blue-700 mb-2">Message</label>
          <textarea className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 