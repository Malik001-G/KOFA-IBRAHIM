import React from 'react'
import { useNavigate } from 'react-router-dom'
import documentaryimg1 from '../../assets/images/New/u.jpg'
import documentaryimg2 from '../../assets/images/New/g.jpg'
import documentaryimg3 from '../../assets/images/leadership.jfif'
import documentaryimg4 from '../../assets/images/portfolio4.jfif'

const PorfolioCategories = () => {
    const navigate = useNavigate();

    const categories = [
        { name: "Documentary Filmmaker", path: "/portfolio/documentary", bg: documentaryimg1, caption: "I capture stories that inspire action and amplify voices that need to be heard.", number: "01" },
        { name: "Climate Advocacy", path: "/portfolio/climate-advocacy", bg: documentaryimg2, caption: "I capture stories that inspire action and amplify voices that need to be heard", number: "02" },
        { name: "Leadership And Strategy", path: "/portfolio/leadership", bg: documentaryimg3, caption: "I capture stories that inspire action and amplify voices that need to be heard", number: "03" },
        { name: "Research Projects", path: "/portfolio/research-projects", bg: documentaryimg4, caption: "I capture stories that inspire action and amplify voices that need to be heard", number: "04" }
    ];

    return (
        <section className='bg-white pb-16 px-6 lg:px-36'>
            <div className='md:flex items-center justify-between mb-10'>
                <div className='md:w-8/12 mb-4 md:`mb-0'>
                    <h2 className='text-black text-4xl mb-2 uppercase font-medium heading'>Portfolio</h2>
                    <h2 className='text-[#939393] text-4xl uppercase heading'>what i do </h2>
                </div>
                <div className='md:w-4/12'>
                    <p className='text-sm'>Explore the intersection of storytelling, leadership, and advocacy, where ideas inspire action and voices shape change.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="p-6 text-white rounded-2xl flex bg-blend-darken flex-col justify-end shadow-lg h-96 hover:scale-95 duration-500  ease-linear cursor-pointer hover:opacity-90 transition-all bg-cover bg-center filter grayscale hover:grayscale-0"
                        style={{ backgroundImage: `url(${category.bg})` }}
                        onClick={() => navigate(category.path)}
                    >
                        <div className='md:flex justify-between items-center'>
                            <div className='order-last'>
                                <h2 className='text-5xl text-white font-black bg-black bg-opacity-0'>{category.number}</h2>
                            </div>
                            <div className='max-w-sm'>
                                <h2 className="text-3xl font-semibold uppercase bg-black bg-opacity-30 p-2 text-white rounded-lg">{category.name}</h2>
                                <p className="text-base mt-2 bg-black font-bold bg-opacity-30 p-1 rounded-lg">{category.caption}</p>
                            </div>

                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
};


export default PorfolioCategories