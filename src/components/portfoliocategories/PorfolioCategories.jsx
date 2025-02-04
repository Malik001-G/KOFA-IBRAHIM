import { section } from 'framer-motion/client';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import documentaryimg1 from '../../assets/images/portfolio4.PNG'
import documentaryimg2 from '../../assets/images/portfolio3.PNG'
import documentaryimg3 from '../../assets/images/portfolio2.PNG'
import documentaryimg4 from '../../assets/images/portfolio1.PNG'
import "./portfoliocategory.css";


const PorfolioCategories = () => {
    const navigate = useNavigate();

    const categories = [
        { name: "Documentary", path: "/portfolio/documentary", bg: documentaryimg1},
        { name: "Photography", path: "/portfolio/photography", bg: documentaryimg2},
        { name: "Videography", path: "/portfolio/videography", bg: documentaryimg3},
        { name: "Design", path: "/portfolio/design", bg: documentaryimg4}
    ];

    return (
        <section className='bg-white pb-16 px-12 lg:px-36'>
            <div className="flex flex-col gap-4">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className=" cursor-pointer"
                        onClick={() => navigate(category.path)}
                    >
                    <img src={category.bg} alt="" className='hover:scale-95 duration-500 ease-in-out '/>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default PorfolioCategories