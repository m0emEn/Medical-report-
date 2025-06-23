import React from 'react';

const team = [
  { name: 'Dr. Alice Carter', role: 'Chief Medical Officer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Michael Lee', role: 'Lead Developer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sara Kim', role: 'Product Manager', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const About = () => (
  <section className="py-12 px-4 bg-blue-50 min-h-[60vh]">
    <div className="max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">About Us</h2>
      <p className="text-blue-900 text-lg mb-4 text-center">Medical Report Analyzer was founded with a mission to empower individuals to take control of their health data. Our platform combines cutting-edge technology with a passion for healthcare innovation.</p>
      <p className="text-gray-700 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Etiam euismod, urna eu tincidunt consectetur, nisi nisl euismod.</p>
    </div>
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Meet Our Team</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h4 className="font-semibold text-blue-800">{member.name}</h4>
            <span className="text-blue-500 mb-2">{member.role}</span>
            <p className="text-gray-600 text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur.</p>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded shadow text-center">
      <h3 className="text-xl font-bold text-blue-700 mb-4">Our Mission</h3>
      <p className="text-gray-700">To make medical data accessible, understandable, and actionable for everyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
    </div>
  </section>
);

export default About; 