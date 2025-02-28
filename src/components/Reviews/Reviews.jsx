import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
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
    return (
        <div className="relative bg-white py-16 px-6 lg:px-36 overflow-hidden">
            <div className='md:flex items-center justify-between mb-10'>
                <div className='md:w-8/12 mb-4 md:mb-0'>
                    <h2 className='text-black text-4xl uppercase font-medium heading'>Expert</h2>
                    <h2 className='text-[#939393] text-4xl uppercase heading font-medium'>Feedbacks </h2>
                </div>
                <div className='md:w-4/12'>
                    <p className='text-sm'>Valuable perspectives and constructive assessments from industry experts.</p>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-sm text-center flex flex-col justify-between min-h-full">
                            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                            <div className="flex justify-center mb-4">
                                <img src={testimonial.img} className="w-16 h-16 rounded-full object-cover" alt={`${testimonial.name}'s photo`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-xs text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
