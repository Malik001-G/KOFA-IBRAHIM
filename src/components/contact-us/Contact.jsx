import React, { useState } from 'react'
import Contactform from './Contactform'
import './Contact.css'

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center justify-center py-16 bg-white p-6">
            <h2 className="text-4xl font-medium text-black heading text-center mb-5">
                LET’S DISCOVER <br /> TOGETHER
            </h2>
            <p className="text-sm max-w-md text-center mb-6">
                Have a project in mind, a question, or just want to connect? Reach out and let's discuss how we can bring ideas to life.     
             </p>


            {/* Button to trigger the modal */}
            <button
                onClick={openModal}
                className="bg-black text-white py-3 px-5 rounded-full text-sm hover:transition-all duration-500 ease-linear hover:bg-black/75 transition-colors"
            >
                Contact Me
            </button>

            {/* Modal Component */}
            {isModalOpen && <Contactform closeModal={closeModal} />}
        </div>
    );

}

export default Contact