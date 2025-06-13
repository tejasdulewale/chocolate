import React, { useState } from 'react';
import '../css/userRegistration.css';
import { Link } from 'react-router-dom';

const UserRegistration = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage('Registration successful!');
        setForm({ name: '', email: '', password: '', mobile: '' });
      } else {
        const data = await res.json();
        setMessage(data.error || 'Registration failed');
      }
    } catch (err) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Mobile Number:</label>
          <input
            className="form-input"
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-button" type="submit">Register</button>
       
      </form>
    <Link to="/login">already have an account</Link>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default UserRegistration;