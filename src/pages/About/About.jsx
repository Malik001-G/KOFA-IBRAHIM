import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProfileImage from "../../assets/images/New/18.jpg";
import Aboutimg from "../../assets/images/New/28.jpg";
import Career_Milestone from '../../components/career-milestone/Career_Milestone';
import Contact from '../../components/contact-us/Contact';

const About = () => {
    return (
        <>
            <Navbar />
            <section className="bg-white py-8 px-6 lg:px-36">
                <div className='mb-8 lg:mb-10'>
                    <h2 className='text-black text-4xl mb-2 uppercase font-medium heading'>About</h2>
                    <h2 className='text-[#939393] text-4xl uppercase heading'>who am i?</h2>
                </div>
                <div className="md:flex gap-10 mb-12">
                    <div className='w-full mb-5 md:mb-0 md:w-8/12 text-justify text-base lg:text-lg space-y-3'>
                        <p>James Kofa Ibrahim is a distinguished documentary
                            filmmaker, leadership and strategy expert, climate change
                            advocate, and an academic researcher, currently pursuing a
                            PhD in Leadership and Strategic Studies in Nigeria. With a
                            passion for storytelling, his work sheds light on untold
                            stories from Northern Nigeria and Africa, focusing on
                            themes of resilience, post-conflict reconstruction, and
                            environmental advocacy.</p>
                        <p>
                            For over a decade, Kofa has bridged the gap between media
                            and strategy, leveraging his expertise in social and
                            behavioral change communication to craft impactful
                            narratives that drive social transformation. As the founder
                            of North Docs, he specializes in documenting Northern
                            Nigerian content, bringing to life the rich, diverse, and
                            often overlooked stories of the region. His documentaries,
                            such as The Case for Boko, have not only earned critical
                            acclaim but have also positioned him as a leading voice in African storytelling on global platforms.

                        </p>
                        <p>
                            Beyond filmmaking, Kofa is a thought leader in leadership
                            and strategy, particularly in post-conflict reconstruction.
                            His work in this area has helped shape innovative solutions
                            for rebuilding communities affected by conflict, especially
                            in Borno State, where his research integrates leadership
                            strategies with practical interventions.
                        </p>
                        <p>
                            Kofa is also the co-founder of the
                            Informed Communication Humanitarian Foundation,
                            an NGO dedicated to fostering change through strategic
                            communication and advocacy. His commitment to climate
                            change advocacy led him to establish Global African
                            Perspectives (GAP), a platform that amplifies the voices of
                            African climate activists and champions actionable
                            solutions to environmental challenges.
                        </p>
                        <p>
                            As a visionary entrepreneur, Kofa is also the non-tech cofounder
                            of a tech start-up focused on AI, VR, and AR,
                            where he combines technology with his expertise in
                            storytelling to push boundaries in immersive content
                            creation.
                        </p>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <img src={ProfileImage} className='rounded-2xl' alt="" />
                    </div>
                </div>
                <div className="md:flex mb-10 gap-10">
                    <div className='w-full md:w-5/12 mb-5 md:mb-0 md:flex justify-center'>
                        <div>
                            <h2 className='text-black text-4xl mb-1 uppercase font-medium heading'>CORE VALUES</h2>
                            <h2 className='text-[#939393] text-4xl uppercase heading'>AND MISSION</h2>
                        </div>
                    </div>
                    <div className='w-full md:w-7/12 text-justify'>
                        <p className='text-base lg:text-lg italic'>“Kofa is deeply committed to using storytelling as a tool for
                            change, climate action, and leadership development. His mission is to amplify African narratives globally, empower
                            communities through education and advocacy, and create
                            lasting solutions for post-conflict and climate-related
                            challenges.”</p>
                    </div>
                </div>
                <div className="md:flex gap-10 mb-10">
                    <div className='w-full md:w-4/12 order-last mb-5 md:mb-0 md:flex justify-end'>
                        <div>
                            <h2 className='text-black text-4xl mb-1 uppercase font-medium heading'>Global</h2>
                            <h2 className='text-[#939393] text-4xl uppercase heading'>Vision</h2>
                        </div>
                    </div>
                    <div className='w-full md:w-8/12 text-justify'>
                        <p className='text-base lg:text-lg italic'>“Kofa is deeply committed to using storytelling as a tool for
                            change, climate action, and leadership development. His mission is to amplify African narratives globally, empower
                            communities through education and advocacy, and create
                            lasting solutions for post-conflict and climate-related
                            challenges.”</p>
                    </div>

                </div>

                <div className='flex justify-center'>
                    <img src={Aboutimg} className='w-11/12 rounded-2xl shadow-2xl h-96 object-cover' alt="" />
                </div>
            </section>
            <Career_Milestone />
            <Contact />
            <Footer />
        </>
    )
}

export default About