import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, loadAuth, loginSuccess } from '../slices/authSlice';

const Profile = () => {
  const { user, isAuthenticated, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(loadAuth());
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    setName(user?.name || '');
    setEmail(user?.email || '');
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Update failed');
      dispatch(loginSuccess({ token, user: data.user }));
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated || !user) return null;

  return (
    <section className="py-12 px-4 bg-blue-50 min-h-[60vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Profile</h2>
        <form className="space-y-4 mb-6 text-left" onSubmit={handleUpdate}>
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 px-4 py-2 rounded">{success}</div>}
          <div>
            <label className="block text-blue-700 mb-1">Name</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-700 mb-1">Email</label>
            <input className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? 'Updating...' : 'Update Profile'}</button>
        </form>
        <button onClick={handleLogout} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Logout</button>
      </div>
    </section>
  );
};

export default Profile; 