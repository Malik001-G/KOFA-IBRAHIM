import React from 'react'
import "./career-milestone.css";
import arrow from '../../assets/images/download-arrow.png'



const ExperienceCard = ({ title, duration, role, description }) => {
    return (
        <div className="bg-white rounded-lg p-6 border-l-4 shadow-sm border-gray-400 hover:border-black duration-200 ease-linear hover:shadow">
            <div className='sm:flex justify-between mb-5'>
                <div className='mb-2 sm:mb-0'>
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <p className="text-sm font-semibold text-[#7D7D7D]">{role}</p>
                </div>
                <div>
                    <p className="text-[#7D7D7D] text-sm">{duration}</p>
                </div>
            </div>
            <p className="text-gray-700 max-w-sm mt-2">{description}</p>
        </div>
    );
};

const Career_Milestone = () => {
    const experiences = [
        {
            title: "North Docs",
            duration: "2013 - Present",
            role: "Founder",
            description: "A platform dedicated to documenting and preserving Northern Nigerian culture and stories."
        },
        {
            title: "Climate Advocacy Initiative",
            duration: "2015 - Present",
            role: "Lead Advocate",
            description: "Driving awareness and policy discussions on climate change in Nigeria."
        },
        {
            title: "Leadership and Strategy Consultancy",
            duration: "2018 - Present",
            role: "Strategic Consultant",
            description: "Guiding organizations on impactful decision-making and sustainable growth."
        }
    ];

    const handleDownload = () => {
        const resumeUrl = "/path-to-your-resume.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='bg-white pb-16 px-6 lg:px-36'>
            <div className='md:flex items-center justify-between mb-10'>
                <div className='md:w-8/12 mb-4 md:mb-0'>
                    <h2 className='text-black text-4xl uppercase font-medium heading'>CAREER</h2>
                    <h2 className='text-[#939393] text-4xl uppercase heading font-medium'>MILESTONES </h2>
                </div>
                <div className='md:w-4/12'>
                    <p className='text-sm'>Significant achievements and defining moments along the professional journey..</p>
                </div>
            </div>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button type="button" onClick={handleDownload} className="px-5 py-3 text-xs uppercase font-medium text-center text-[#4B4B4B] border border-gray-600 bg-white rounded-full
                items-center transition-all hover:ease-linear hover:bg-black/85 hover:text-white duration-500 inline-flex focus:ring-0 focus:outline-none">Download My Resume <img src={arrow} className="ml-2 w-3" alt="" /></button>
            </div>
        </section>
    );
}

export default Career_Milestone