import React, { useState } from 'react';

const services = [
  {
    title: 'Comprehensive Report Analysis',
    desc: 'Our advanced algorithms scan and interpret your medical documents, providing you with clear, actionable insights. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '📄',
  },
  {
    title: 'Data Security & Privacy',
    desc: 'We use state-of-the-art encryption to keep your sensitive information safe. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus.',
    icon: '🔒',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access your medical reports anytime, anywhere, with our secure cloud storage. Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur.',
    icon: '☁️',
  },
  {
    title: '24/7 Support',
    desc: 'Our support team is available around the clock to assist you. Proin gravida nibh vel velit auctor aliquet.',
    icon: '💬',
  },
  {
    title: 'Multi-format Uploads',
    desc: 'Upload PDFs, images, and more. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum.',
    icon: '🖼️',
  },
  {
    title: 'Instant Summaries',
    desc: 'Get instant summaries of your reports. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    icon: '⚡',
  },
];

const faqs = [
  {
    q: 'How secure is my data?',
    a: 'We use industry-standard encryption and never share your data with third parties. Lorem ipsum dolor sit amet.',
  },
  {
    q: 'Can I access my reports on mobile?',
    a: 'Yes, our platform is fully responsive and works on all devices.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, you can try our service free for 14 days. No credit card required.',
  },
  {
    q: 'What file formats are supported?',
    a: 'You can upload PDFs, images (JPG, PNG), and more. We are constantly adding support for new formats.',
  },
  {
    q: 'How quickly will I get my report analysis?',
    a: 'Most reports are analyzed instantly, but complex documents may take a few minutes.',
  },
  {
    q: 'Can I share my reports with my doctor?',
    a: 'Yes, you can securely share your reports with healthcare professionals directly from the platform.',
  },
  {
    q: 'Is customer support available?',
    a: 'Absolutely! Our support team is available 24/7 to assist you with any questions or issues.',
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 px-4 bg-blue-50 min-h-[60vh]">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded shadow text-center border-t-4 border-blue-500">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Frequently Asked Questions</h3>
        <ul className="space-y-4">
          {faqs.map((faq, idx) => (
            <li key={idx} className="border border-blue-100 rounded-xl shadow-sm overflow-hidden transition-all">
              <button
                className={`w-full flex justify-between items-center text-left font-semibold py-4 px-6 focus:outline-none transition bg-gradient-to-r ${openIndex === idx ? 'from-blue-50 to-blue-100 text-blue-900' : 'from-white to-white text-blue-800'} hover:from-blue-50 hover:to-blue-100`}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="flex items-center gap-2">
                  <svg className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  {faq.q}
                </span>
              </button>
              <div
                className={`transition-all duration-300 bg-blue-50 ${openIndex === idx ? 'max-h-40 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'}`}
                style={{ borderTop: openIndex === idx ? '1px solid #c7d2fe' : 'none' }}
              >
                <p className="text-blue-800 text-base leading-relaxed">{faq.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services; 