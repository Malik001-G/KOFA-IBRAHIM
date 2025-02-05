import React, { useEffect, useState } from 'react'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProfileImage from "../../assets/images/Bukola.svg";

const testimonials = [
    {
        quote: "Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.",
        name: "Prof. John Festus",
        title: "Director of College and Art",
        img: ProfileImage
    },
    {
        quote: "Working with this team was an absolute pleasure. Their expertise and attention to detail exceeded my expectations.",
        name: "Dr. Aisha Bello",
        title: "Research Scientist",
        img: ProfileImage

    },
    {
        quote: "Highly recommended! The quality of work and dedication displayed by this team is unmatched.",
        name: "Mr. Samuel Ade",
        title: "CEO, Tech Solutions",
        img: ProfileImage

    },
    {
        quote: "A top-notch service with an exceptional level of professionalism and creativity.",
        name: "Mrs. Oluchi Nnamdi",
        title: "Marketing Director",
        img: ProfileImage

    },
    {
        quote: "A great experience from start to finish. The attention to detail was truly impressive.",
        name: "Engr. Musa Ibrahim",
        title: "Project Manager",
        img: ProfileImage

    },
    {
        quote: "Their innovative approach sets them apart. Highly recommended!",
        name: "Dr. Emeka Ugo",
        title: "Software Engineer",
        img: ProfileImage

    }
];
const Reviews = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;
    const halfVisible = 1;
    const autoplayInterval = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonials();
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [startIndex]);

    const prevTestimonials = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
        );
    };

    const nextTestimonials = () => {
        setStartIndex((prevIndex) =>
            prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1
        );
    };
    return (
        <div
            className="relative bg-white py-16 px-6 lg:px-36 overflow-hidden"
            onMouseEnter={() => clearInterval(window.carouselTimer)}
            onMouseLeave={() => {
                window.carouselTimer = setInterval(nextTestimonials, autoplayInterval);
            }}
        >
            <div className='md:flex items-center justify-between mb-10'>
                <div className='md:w-8/12 mb-2 md:mb-0'>
                    <h2 className='text-black text-4xl uppercase font-medium heading'>Expert</h2>
                    <h2 className='text-[#939393] text-4xl uppercase heading font-medium'>feedbacks </h2>
                </div>
                <div className='md:w-4/12'>
                    <p className='text-base'>Explore my portfolio to see how creativity meets functionality.</p>
                </div>
            </div>
            <div className="flex items-center">
                {/* Left Arrow */}
                {/* <button
                    onClick={prevTestimonials}
                    className="absolute left- z-10 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
                >
                    <FaChevronLeft size={20} />
                </button> */}

                {/* Testimonials Grid */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * 25}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                         <div
                         key={index}
                         className={`w-full md:w-2/3 p-4 ${index >= startIndex && index < startIndex + visibleCount ? "opacity-100" : "md:opacity-100"
                             } transform transition-all duration-300`}
                       >
                       
                                <div className="bg-[#F5F5F5] p-14 rounded-lg w-80 shadow text-center flex flex-col justify-between h-full">
                                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                                    <div className='flex justify-center mt-3'>
                                        <img src={testimonial.img} className='w-14 rounded-full' alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-xs text-gray-500">{testimonial.title}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                {/* <button
                    onClick={nextTestimonials}
                    className="absolute right-0 z-10 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
                >
                    <FaChevronRight size={20} />
                </button> */}
            </div>
        </div>
    );

}

export default Reviews