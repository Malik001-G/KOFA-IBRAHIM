import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import documentaryimg1 from "../../assets/images/new.jfif";
import documentaryimg2 from "../../assets/images/climate.jpg";
import documentaryimg3 from "../../assets/images/leadership.jfif";
import documentaryimg4 from "../../assets/images/portfolio4.jfif";
import backmenu from "../../assets/images/Menu.png";
import Footer from "../../components/footer/Footer";

const categories = [
    {
        name: "Documentary Filmmaker",
        path: "/portfolio/documentary",
        bg: documentaryimg1,
        caption: "Telling impactful stories through film.",
        details: `For over a decade, Kofa has bridged the gap between media and strategy, leveraging his expertise 
    in social and behavioral change communication to craft impactful narratives that drive social transformation. 
    As the founder of North Docs, he specializes in documenting Northern Nigerian content, bringing to life the rich, 
    diverse, and often overlooked stories of the region. His documentaries, such as The Case for Boko, have not only 
    earned critical acclaim but have also positioned him as a leading voice in African storytelling on global platforms.`
    },
    {
        name: "Climate Advocacy",
        path: "/portfolio/climate-advocacy",
        bg: documentaryimg2,
        caption: "Raising awareness for a sustainable future.",
        details: `For over a decade, Kofa has bridged the gap between media and strategy, leveraging his expertise 
        in social and behavioral change communication to craft impactful narratives that drive social transformation. 
        As the founder of North Docs, he specializes in documenting Northern Nigerian content, bringing to life the rich, 
        diverse, and often overlooked stories of the region. His documentaries, such as The Case for Boko, have not only 
        earned critical acclaim but have also positioned him as a leading voice in African storytelling on global platforms.`
    },
    {
        name: "Leadership And Strategy",
        path: "/portfolio/leadership",
        bg: documentaryimg3,
        caption: "Guiding impactful decisions and change.",
        details: `For over a decade, Kofa has bridged the gap between media and strategy, leveraging his expertise 
        in social and behavioral change communication to craft impactful narratives that drive social transformation. 
        As the founder of North Docs, he specializes in documenting Northern Nigerian content, bringing to life the rich, 
        diverse, and often overlooked stories of the region. His documentaries, such as The Case for Boko, have not only 
        earned critical acclaim but have also positioned him as a leading voice in African storytelling on global platforms.`
    },
    {
        name: "Research Projects",
        path: "/portfolio/research-projects",
        bg: documentaryimg4,
        caption: "Exploring data-driven solutions for change.",
        details: `For over a decade, Kofa has bridged the gap between media and strategy, leveraging his expertise 
        in social and behavioral change communication to craft impactful narratives that drive social transformation. 
        As the founder of North Docs, he specializes in documenting Northern Nigerian content, bringing to life the rich, 
        diverse, and often overlooked stories of the region. His documentaries, such as The Case for Boko, have not only 
        earned critical acclaim but have also positioned him as a leading voice in African storytelling on global platforms.`
    },
];

const documentaryGallery = [documentaryimg1, documentaryimg2, documentaryimg3, documentaryimg4, documentaryimg2, documentaryimg1];

const PortfolioDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const selectedCategory = categories.find((category) => category.path.includes(id));
    const otherCategories = categories.filter((category) => !category.path.includes(id));

    return (
        <>
            <Navbar />
         
            <section className="py-12 px-6 lg:px-36">
                <Link to="/" className="flex mb-5 gap-2 items-center">
                <img src={backmenu} className="w-10" alt="" />
                <p>Go Back</p>
                </Link>
                {/* Special Layout for Documentary */}
                {selectedCategory?.name === "Documentary Filmmaker" ? (
                    <>
                        <div className="bg-white rounded-2xl">
                            <div
                                className="h-96 bg-cover bg-center rounded-2xl mb-6 border-4 border-yellow-400"
                                style={{ backgroundImage: `url(${selectedCategory.bg})` }}
                            ></div>
                            <h1 className="text-4xl font-bold uppercase">{selectedCategory.name}</h1>
                            <p className="text-lg mt-2 text-gray-800 italic">{selectedCategory.caption}</p>
                            <p className="mt-4 text-yellow-400 font-medium">"Every story deserves to be told with truth and power."</p>
                            <p className="mt-6 text-gray-800 text-base">{selectedCategory.details}</p>
                        </div>
                        <h2 className="text-black mt-10 text-3xl font-semibold">Gallery</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
                            {documentaryGallery.map((image, index) => (
                                <button key={index} className="w-full h-48 hover:scale-95 duration-300 ease-in-out rounded-lg overflow-hidden" onClick={() => setSelectedImage(image)}>
                                    <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </>
                ) : selectedCategory ? (
                    // Standard Layout for Other Categories
                    <div>
                        <h1 className="text-3xl font-bold uppercase">{selectedCategory.name}</h1>
                        <p className="text-lg mt-2 text-gray-700 italic">{selectedCategory.caption}</p>
                        <div className="h-96 bg-cover bg-center rounded-2xl mb-6 mt-3" style={{ backgroundImage: `url(${selectedCategory.bg})` }}></div>
                        <p className="mt-6 text-gray-800 text-base">{selectedCategory.details}</p>

                    </div>
                ) : (
                    <h1 className="text-3xl font-bold capitalize">Portfolio Category Not Found</h1>
                )}

                {/* My Other Services */}
                <div className="mt-36">
                    <h2 className="text-2xl text-black font-semibold mb-4">My Other Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {otherCategories.map((category) => (
                            <div
                                key={category.name}
                                className="p-6 text-white rounded-2xl flex flex-col justify-end shadow-lg h-60 hover:scale-95 duration-500 ease-linear cursor-pointer bg-cover bg-center filter grayscale hover:grayscale-0"
                                style={{ backgroundImage: `url(${category.bg})` }}
                                onClick={() => navigate(category.path)}
                            >
                                <h2 className="text-xl font-semibold text-white uppercase bg-black bg-opacity-40 p-2 rounded-lg">{category.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal for Image Preview */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50" onClick={() => setSelectedImage(null)}>
                        <div className="relative max-w-2xl w-full bg-white p-1 rounded-lg">
                            <button className="absolute -top-2 right-0 bg-gray-500 text-white font-semibold px-3 py-1 rounded-full" onClick={() => setSelectedImage(null)}>X</button>
                            <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-lg" />
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
};

export default PortfolioDetails;
