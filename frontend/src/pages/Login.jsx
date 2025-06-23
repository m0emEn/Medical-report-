import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
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
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Login</h2>
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>}
          <div>
            <label className="block text-blue-700 mb-2">Email</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-700 mb-2">Password</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
      </div>
    </section>
  );
};

export default Login; 