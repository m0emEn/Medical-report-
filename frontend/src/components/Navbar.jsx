import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, loadAuth } from '../slices/authSlice';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(loadAuth());
  }, [location, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-700/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2 font-extrabold text-2xl text-white tracking-tight">
          <span className="inline-block w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2 shadow-md">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          <Link to="/" className="hover:text-blue-200 transition">MedReport</Link>
        </div>
        <ul className="flex space-x-2 md:space-x-4 items-center">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${
                    isActive
                      ? 'bg-white text-blue-700 shadow font-bold'
                      : 'text-white hover:bg-blue-600/80 hover:text-blue-100'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          {!isAuthenticated && (
            <li>
              <Link
                to="/signup"
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${location.pathname === '/signup' ? 'bg-white text-blue-700 shadow font-bold' : 'text-white hover:bg-blue-600/80 hover:text-blue-100'}`}
              >
                Sign Up
              </Link>
            </li>
          )}
          {!isAuthenticated ? (
            <li>
              <Link
                to="/login"
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${location.pathname === '/login' ? 'bg-white text-blue-700 shadow font-bold' : 'text-white hover:bg-blue-600/80 hover:text-blue-100'}`}
              >
                Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/profile"
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${location.pathname === '/profile' ? 'bg-white text-blue-700 shadow font-bold' : 'text-white hover:bg-blue-600/80 hover:text-blue-100'}`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${location.pathname === '/dashboard' ? 'bg-white text-blue-700 shadow font-bold' : 'text-white hover:bg-blue-600/80 hover:text-blue-100'}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/chatbot"
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${location.pathname === '/chatbot' ? 'bg-white text-blue-700 shadow font-bold' : 'text-white hover:bg-blue-600/80 hover:text-blue-100'}`}
                >
                  Chatbot
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300/50"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 