import React from 'react';

const bannerUrl =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Professional healthcare/medical image

const Home = () => (
  <section className="bg-blue-100 text-blue-900">
    {/* Hero Section with Banner */}
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      <img
        src={bannerUrl}
        alt="Medical Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        style={{ filter: 'blur(1px)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-6 py-12 bg-white/80 rounded-xl shadow-lg backdrop-blur-md border border-blue-200">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-800 drop-shadow-lg text-center">Welcome to Medical Report Analyzer</h1>
        <p className="text-xl mb-8 max-w-2xl text-center text-blue-900 font-medium">Analyze and manage your medical reports with ease and security. Our platform leverages advanced AI to help you understand your health data and make informed decisions.</p>
        <a href="/signup" className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition">Get Started</a>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-16 bg-blue-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-blue-500 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">AI-Powered Analysis</h3>
          <p className="text-blue-900">Leverage state-of-the-art artificial intelligence to extract key insights from your medical documents.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-blue-500 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Secure & Private</h3>
          <p className="text-blue-900">Your data is encrypted and protected with industry-leading security standards.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-blue-500 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Accessible Anywhere</h3>
          <p className="text-blue-900">Access your reports from any device, anytime, with our responsive and intuitive platform.</p>
        </div>
      </div>
    </div>
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-800">How It Works</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold border-2 border-blue-400">1</div>
          <h4 className="font-semibold mb-2 text-blue-700">Sign Up</h4>
          <p className="text-center text-blue-900">Create your free account in seconds and get started instantly.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold border-2 border-blue-400">2</div>
          <h4 className="font-semibold mb-2 text-blue-700">Upload Reports</h4>
          <p className="text-center text-blue-900">Upload your medical documents securely from any device.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold border-2 border-blue-400">3</div>
          <h4 className="font-semibold mb-2 text-blue-700">Get Insights</h4>
          <p className="text-center text-blue-900">Receive instant, easy-to-understand analysis and summaries.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold border-2 border-blue-400">4</div>
          <h4 className="font-semibold mb-2 text-blue-700">Track Progress</h4>
          <p className="text-center text-blue-900">Monitor your health trends and share results with your doctor.</p>
        </div>
      </div>
    </div>
    <div className="py-12 bg-blue-50">
      <h2 className="text-2xl font-bold text-center mb-8">Our Trusted Partners</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
        <div className="bg-white rounded-xl shadow px-8 py-4 flex items-center text-blue-700 font-bold text-lg border border-blue-100 hover:shadow-lg transition">HealthCorp</div>
        <div className="bg-white rounded-xl shadow px-8 py-4 flex items-center text-blue-700 font-bold text-lg border border-blue-100 hover:shadow-lg transition">MediSecure</div>
        <div className="bg-white rounded-xl shadow px-8 py-4 flex items-center text-blue-700 font-bold text-lg border border-blue-100 hover:shadow-lg transition">WellnessPlus</div>
        <div className="bg-white rounded-xl shadow px-8 py-4 flex items-center text-blue-700 font-bold text-lg border border-blue-100 hover:shadow-lg transition">CareSync</div>
        <div className="bg-white rounded-xl shadow px-8 py-4 flex items-center text-blue-700 font-bold text-lg border border-blue-100 hover:shadow-lg transition">DocuHealth</div>
      </div>
    </div>
    <div className="py-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10 text-blue-800">Latest Insights</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div className="bg-blue-50 p-6 rounded-2xl shadow flex flex-col hover:scale-105 transition-transform border-t-4 border-blue-200">
          <h4 className="font-semibold mb-2 text-blue-700">Understanding Your Blood Test Results</h4>
          <p className="text-blue-900 flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur.</p>
          <a href="#" className="mt-4 text-blue-600 hover:underline">Read More</a>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl shadow flex flex-col hover:scale-105 transition-transform border-t-4 border-blue-200">
          <h4 className="font-semibold mb-2 text-blue-700">5 Tips for Managing Chronic Conditions</h4>
          <p className="text-blue-900 flex-1">Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl euismod.</p>
          <a href="#" className="mt-4 text-blue-600 hover:underline">Read More</a>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl shadow flex flex-col hover:scale-105 transition-transform border-t-4 border-blue-200">
          <h4 className="font-semibold mb-2 text-blue-700">The Future of Digital Health Records</h4>
          <p className="text-blue-900 flex-1">Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.</p>
          <a href="#" className="mt-4 text-blue-600 hover:underline">Read More</a>
        </div>
      </div>
    </div>
    <div className="py-16 bg-blue-200 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Get the App</h2>
      <p className="mb-6 text-center max-w-xl">Access your medical reports on the go. Download our mobile app for iOS and Android and stay connected to your health anytime, anywhere.</p>
      <div className="flex gap-6">
        <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition text-lg font-semibold">Download for iOS</a>
        <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition text-lg font-semibold">Download for Android</a>
      </div>
    </div>
    <div className="py-16 bg-white flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Stay Updated</h2>
      <p className="mb-6 text-center max-w-xl text-blue-900">Subscribe to our newsletter for the latest updates, health tips, and exclusive offers.</p>
      <form className="flex flex-col md:flex-row gap-4 w-full max-w-xl justify-center">
        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">Subscribe</button>
      </form>
    </div>
    <div className="py-16 bg-blue-200">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="italic mb-2 text-blue-900">"This platform made it so easy to understand my medical reports. Highly recommended!"</p>
          <span className="block font-semibold text-blue-700">- John Doe</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="italic mb-2 text-blue-900">"Secure, fast, and reliable. I feel confident knowing my health data is in good hands."</p>
          <span className="block font-semibold text-blue-700">- Jane Smith</span>
        </div>
      </div>
    </div>
    <div className="py-12 flex flex-col items-center bg-blue-700 text-white">
      <h2 className="text-2xl font-bold mb-4">Ready to take control of your health?</h2>
      <a href="/signup" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 transition">Sign Up Now</a>
    </div>
  </section>
);

export default Home; 