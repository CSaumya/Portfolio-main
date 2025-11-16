import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ReachMe = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ek5yvnl', 'template_usacbdl', form.current, {
        publicKey: '1QVhk0I5iBd7eE5Qo',
      })
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', type: 'success' });
          form.current.reset();

          // Remove message after 3 seconds
          setTimeout(() => setStatus({ message: '', type: '' }), 3000);
        },
        (error) => {
          setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });

          // Remove message after 3 seconds
          setTimeout(() => setStatus({ message: '', type: '' }), 3000);
        }
      );
  };

  return (
    <div className="px-6 md:px-20 py-12 bg-[url('/path-to-your-bg.jpg')] bg-cover bg-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-[#9EB3C2] text-lg md:text-2xl">
          Get in touch and let’s turn ideas into reality
        </p>
        <h1 className="text-[#021a37] text-4xl md:text-6xl font-bold">
          Reach Me
        </h1>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4 p-6 rounded-2xl
                   bg-white/20 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
      >
        <label className="font-semibold text-teal-50">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="p-3 border rounded-lg bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#21295C]"
        />

        <label className="font-semibold text-teal-50">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="p-3 border rounded-lg bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#21295C]"
        />

        <label className="font-semibold text-teal-50">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          className="p-3 border rounded-lg bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#21295C]"
        />

        <button
          type="submit"
          className="bg-[#21295C]/80 text-white py-3 px-6 rounded-lg hover:bg-[#1A1F4C]/90 transition duration-300"
        >
          Send
        </button>

        {/* Status Message */}
        {status.message && (
          <p
            className={`mt-2 text-center font-medium ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ReachMe;
