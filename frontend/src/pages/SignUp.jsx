import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!agree) {
      setError('You must agree to the Terms and Conditions.');
      return;
    }
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      dispatch(loginSuccess({ token: data.token, user: data.user }));
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-blue-50 min-h-[60vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow max-w-4xl w-full grid md:grid-cols-2 gap-12">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Sign Up</h2>
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 px-4 py-2 rounded">{success}</div>}
          <div>
            <label className="block text-blue-700 mb-2">Name</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-700 mb-2">Email</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-700 mb-2">Password</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-700 mb-2">Confirm Password</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" id="terms" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <label htmlFor="terms" className="text-sm text-gray-700">I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a></label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? 'Creating Account...' : 'Create Account'}</button>
        </form>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Why Join Us?</h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔️ Secure and private medical data management</li>
            <li>✔️ Instant access to advanced report analysis</li>
            <li>✔️ 24/7 customer support</li>
            <li>✔️ Free trial for new users</li>
            <li>✔️ Easy-to-use, intuitive platform</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur.</p>
        </div>
      </div>
    </section>
  );
};

export default SignUp; 