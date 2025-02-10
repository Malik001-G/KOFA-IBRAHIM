import React, { useEffect, useRef, useState } from 'react'
import "./About.css";
import ProfileImage from "../../assets/images/Bukola.svg";
import arrow from '../../assets/images/read_more.svg'
import aboutimg1 from '../../assets/images/aboutimg1.svg'
import aboutimg2 from '../../assets/images/aboutimg2.svg'
import { Link } from 'react-router-dom';

const About = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), 100); 
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.7 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
        <section ref={sectionRef} className="bg-white py-16 px-6 lg:px-36">
            <div className='mb-8 lg:mb-10'>
                <h2 className='text-black text-4xl mb-2 uppercase font-medium heading'>About</h2>
                <h2 className='text-[#939393] text-4xl uppercase heading'>who am i?</h2>
            </div>
            <div className="lg:flex gap-10">
                <div className='lg:w-8/12 text-[#4B4B4B] text-lg lg:text-xl mb-5 md:mb-0'>
                    <p className='mb-5'>James Kofa Ibrahim is a distinguished documentary
                        filmmaker, leadership and strategy expert, climate change
                        advocate, and an academic researcher, currently pursuing a
                        PhD in Leadership and Strategic Studies in Nigeria. With a
                        passion for storytelling, his work sheds light on untold
                        stories from Northern Nigeria and Africa, focusing on
                        themes of resilience, post-conflict reconstruction, and
                        environmental advocacy.</p>

                    <p>For over a decade, Kofa has bridged the gap between media
                        and strategy, leveraging his expertise in social and
                        behavioral change communication to craft impactful
                        narratives that drive social transformation. As the founder
                        of North Docs, he specializes in documenting Northern
                        Nigerian content, bringing to life the rich, diverse, and
                        often overlooked stories of the region. His documentaries,
                        such as...
                    </p>
                </div>
                <div className='lg:w-4/12'>
                    <img
                        src={ProfileImage}
                        className='w-full lg:w-96 rounded-3xl mb-5'
                        alt="Professional Image"
                        style={{
                            transition:
                                "filter 1s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            filter: isVisible ? "grayscale(100%)" : "grayscale(0%)",
                            opacity: isVisible ? 1 : 0.8,
                            transform: isVisible ? "scale(1.0)" : "scale(0.95)",
                        }}
                    />

                    <Link to={'/about'} className="rounded-full w-full lg:w-72 hover:bg-black hover:text-white text-center hover:scale-95 duration-700 justify-center bg-white border border-[#4B4B4B] text-[#4B4B4B] focus:ring-0 inline-flex font-medium text-sm px-5 py-2.5 group focus:outline-none">Read more
                        <img src={arrow} className='ml-2' alt="" />
                    </Link>

                </div>
            </div>
        </section>
        <section className='pb-16 md:grid grid-cols-2 gap-3 space-y-3 md:space-y-0'>
            <img src={aboutimg1} alt="" />
            <img src={aboutimg2} alt="" />
        </section>
        </>
    )
}

export default About