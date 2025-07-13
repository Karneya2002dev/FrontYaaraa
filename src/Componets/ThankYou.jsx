import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; // icon

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-screen bg-gradient-to-r from-rose-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-xl p-10 text-center max-w-md animate-fade-in">
        <CheckCircle className="mx-auto mb-4 text-rose-600" size={48} />
        <h1 className="text-3xl font-bold text-rose-700 mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We’ll get back to you soon.
        </p>
        <Link
          to="/"
          className="inline-block bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition"
        >
          Back to Home
        </Link>
        <p className="text-xs text-gray-400 mt-4">(Redirecting in 5 seconds...)</p>
      </div>
    </section>
  );
};

export default ThankYou;
