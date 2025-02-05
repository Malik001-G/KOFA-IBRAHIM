import React, { useState } from 'react'
import Contactform from './Contactform'


const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        LET’S DISCOVER TOGETHER
      </h2>
      <p className="text-lg text-center mb-6">
        Read insights and praises from mentors and peers who have guided.
      </p>
      
      {/* Button to trigger the modal */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Contact Me
      </button>

      {/* Modal Component */}
      {isModalOpen && <Contactform closeModal={closeModal} />}
    </div>
  );
  
}

export default Contact