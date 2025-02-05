import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contactform = ({ closeModal }) => {  // Close modal passed as a prop
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
        'default_service',  // Replace with your service ID
        'template_dlg37sn',  // Replace with your template ID
        e.target,             // Form reference
        'JRI_W7aPIVDiM_NZ9'       // Replace with your user ID
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setIsSubmitting(false);
          setErrorMessage('There was an error sending your message. Please try again.');
        }
      );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();  // Close the modal if the backdrop is clicked
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackdropClick}  // Close modal if backdrop is clicked
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={closeModal}  // Close modal when the "X" button is clicked
        >
          X
        </button>
        <h3 className="text-2xl font-semibold text-center mb-4">Contact Me</h3>

        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 rounded-md text-white font-semibold 
              ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} 
              transition-colors`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
