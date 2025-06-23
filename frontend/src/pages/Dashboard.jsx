import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchReports();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const fetchReports = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/reports/list?userId=${user.id}`);
      const data = await res.json();
      setReports(data.reports || []);
    } catch (err) {
      toast.error('Failed to fetch reports');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    toast.loading('Uploading report...', { id: 'upload' });
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', user.id);
      const res = await fetch('http://localhost:5000/api/reports/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Upload failed');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchReports();
      toast.success('Report uploaded successfully!', { id: 'upload' });
    } catch (err) {
      toast.error(err.message, { id: 'upload' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-blue-50 min-h-[60vh] flex flex-col items-center">
      <div className="bg-white p-8 rounded shadow max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome, {user?.email || 'User'}!</h2>
        <form className="mb-8 flex flex-col md:flex-row gap-4 items-center" onSubmit={handleUpload}>
          <input ref={fileInputRef} type="file" onChange={handleFileChange} className="border border-blue-200 rounded px-3 py-2" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2" disabled={uploading}>
            {uploading && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>}
            {uploading ? 'Uploading...' : 'Add / Upload Report'}
          </button>
        </form>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Your Medical Reports</h3>
          {reports.length === 0 ? (
            <div className="bg-blue-100 rounded p-6 text-center text-blue-600 mb-4">
              <span className="block text-lg">No reports found.</span>
              <span className="block text-sm text-blue-400">(Upload your first report!)</span>
            </div>
          ) : (
            <ul className="divide-y divide-blue-100">
              {reports.map((report) => (
                <li key={report._id} className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-medium text-blue-900">{report.originalname}</span>
                    <span className="ml-2 text-xs text-blue-400">({(report.size / 1024).toFixed(1)} KB)</span>
                  </div>
                  <a
                    href={`http://localhost:5000/uploads/${report.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard; 