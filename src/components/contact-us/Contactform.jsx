import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contactform = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .sendForm(
        'default_service',
        'template_dlg37sn',
        e.target,
        'JRI_W7aPIVDiM_NZ9'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSuccessMessage("Thank you for reaching out! I'll get back to you shortly.");
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setIsSubmitting(false);
          setErrorMessage('There was an error sending your message. Please try again.');
        }
      );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white p-10 rounded-3xl w-full max-w-md relative shadow-lg"
      >
        <button
          className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          X
        </button>
        <h3 className="text-2xl font-semibold text-center mb-2">Let's Connect & Collaborate</h3>
        <p className='mb-10 text-sm max-w-sm text-center'>Got a project in mind, or simply looking to collaborate with us? Complete the form below and we’ll get back to you. Or send us a mail to the email address</p>

        {successMessage && <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center text-sm mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-3xl text-sm focus:outline-none focus:ring-0 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-3xl text-sm focus:outline-none focus:ring-0 focus:ring-blue-500"
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-2xl text-sm focus:outline-none focus:ring-0 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 rounded-3xl text-white font-semibold 
              ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-black/75 hover:transition-all duration-500 ease-linear'}
              transition-colors`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contactform;
