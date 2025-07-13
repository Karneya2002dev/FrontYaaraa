// frontend/src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState('');
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState({ username: '', password: '' });

  useEffect(() => {
    if (auth) fetchAllData();
  }, [auth]);

  const fetchAllData = async () => {
    try {
      const contactRes = await axios.get('https://backendweb-production-04a7.up.railway.app/api/contact');
      const courseRes = await axios.get('https://backendweb-production-04a7.up.railway.app/api/course-register');
      const applyRes = await axios.get('https://backendweb-production-04a7.up.railway.app/api/apply');

      if (contactRes.data.success) setContacts(contactRes.data.data);
      if (courseRes.data.success) setRegistrations(courseRes.data.data);
      if (applyRes.data.success) setApplications(applyRes.data.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  const filteredData = (data) => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;
    try {
      await axios.delete(`https://backendweb-production-04a7.up.railway.app/api/${type}/${id}`);
      fetchAllData();
    } catch (err) {
      alert('Failed to delete.');
    }
  };

  const exportToExcel = (data, sheetName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, `${sheetName}.xlsx`);
  };

  const handleLogin = () => {
    if (login.username === 'yaaraa' && login.password === 'yaaraa123') {
      setAuth(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!auth) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <button onClick={handleLogin} className="w-full bg-rose-600 text-white p-2 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-rose-50 space-y-10">
      <h1 className="text-3xl font-bold mb-6 text-rose-700">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <SummaryCard label="Contacts" count={contacts.length} />
        <SummaryCard label="Registrations" count={registrations.length} />
        <SummaryCard label="Applications" count={applications.length} />
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-6 w-full max-w-md"
      />

      <Section title="Contact Submissions" onExport={() => exportToExcel(contacts, 'Contacts')}>
        <Table headers={["Name", "Email", "Phone", "Subject", "Message", "Submitted At", ""]}>
          {filteredData(contacts).map((c) => (
            <tr key={c.id} className="border-b hover:bg-rose-50">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.email}</td>
              <td className="p-2">{c.phone}</td>
              <td className="p-2">{c.subject}</td>
              <td className="p-2">{c.message}</td>
              <td className="p-2">{new Date(c.created_at).toLocaleString()}</td>
              <td className="p-2 text-red-600 cursor-pointer" onClick={() => handleDelete('contact', c.id)}>🗑</td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Course Registrations" onExport={() => exportToExcel(registrations, 'Course_Registrations')}>
        <Table headers={["Name", "Email", "Phone", "Course", "Message", "Registered At", ""]}>
          {filteredData(registrations).map((r) => (
            <tr key={r.id} className="border-b hover:bg-rose-50">
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.email}</td>
              <td className="p-2">{r.phone}</td>
              <td className="p-2">{r.course}</td>
              <td className="p-2">{r.message}</td>
              <td className="p-2">{new Date(r.created_at).toLocaleString()}</td>
              <td className="p-2 text-red-600 cursor-pointer" onClick={() => handleDelete('course-register', r.id)}>🗑</td>
            </tr>
          ))}
        </Table>
      </Section>

      <Section title="Career Applications" onExport={() => exportToExcel(applications, 'Applications')}>
        <Table headers={["Name", "Email", "Phone", "Position", "Resume", "Applied At", ""]}>
          {filteredData(applications).map((a) => (
            <tr key={a.id} className="border-b hover:bg-rose-50">
              <td className="p-2">{a.name}</td>
              <td className="p-2">{a.email}</td>
              <td className="p-2">{a.phone}</td>
              <td className="p-2">{a.position}</td>
              <td className="p-2">
                <a
                  href={`http://localhost:5000/${a.resume_path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </a>
                <a
                  href={`http://localhost:5000/${a.resume_path}`}
                  download
                  className="text-green-600 underline ml-2"
                >
                  ⬇
                </a>
              </td>
              <td className="p-2">{new Date(a.created_at).toLocaleString()}</td>
              <td className="p-2 text-red-600 cursor-pointer" onClick={() => handleDelete('apply', a.id)}>🗑</td>
            </tr>
          ))}
        </Table>
      </Section>
    </div>
  );
};

const Section = ({ title, onExport, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-rose-700">{title}</h2>
      <button onClick={onExport} className="text-sm text-blue-600 underline">Export to Excel</button>
    </div>
    <table className="min-w-full text-sm">{children}</table>
  </div>
);

const Table = ({ headers, children }) => (
  <>
    <thead>
      <tr className="bg-rose-100 text-left text-rose-800">
        {headers.map((head, idx) => (
          <th key={idx} className="p-2">{head}</th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </>
);

const SummaryCard = ({ label, count }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <h3 className="text-lg font-semibold text-rose-700">{label}</h3>
    <p className="text-2xl mt-2 text-gray-800">{count}</p>
  </div>
);

export default AdminDashboard;
