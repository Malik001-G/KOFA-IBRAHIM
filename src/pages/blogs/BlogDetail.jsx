import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../../utils/blogsdata';
import backmenu from "../../assets/images/Menu.png";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const BlogDetail = () => {
    const { id } = useParams(); // Get id from URL
    const blog = blogData.find((b) => b.id === Number(id)); // Convert id to number

    if (!blog) return <p>Blog not found</p>;

    // Get the other blogs excluding the current blog
    const otherBlogs = blogData.filter((b) => b.id !== blog.id).slice(0, 2);

    return (
        <>
            <Navbar />
            <section className="py-10 px-6 lg:px-36">
                <Link to="/blogs" className="flex mb-5 gap-2 items-center">
                    <img src={backmenu} className="w-10" alt="" />
                    <p>Go Back</p>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                    <div className='mt-5'>
                        <p className='text-sm text-[#7D7D7D] mb-4'>2 minutes read</p>
                        <h2 className='text-xl font-medium'>{blog.sub_heading}</h2>
                        <p className='text-[#7D7D7D] text-sm italic'>{blog.created_date}</p>
                    </div>
                    <img className="rounded-2xl my-4" src={blog.image} alt={blog.title} />
                </div>
                <div className='mt-3'>
                    <p className="mt-4 text-lg">{blog.content}</p>
                </div>
                <h2 className="text-xl font-semibold mt-20">See Other Blogs</h2>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {otherBlogs.map((otherBlog) => (
                        <Link to={`/blogs/${otherBlog.id}`} key={otherBlog.id} className=" bg-white block mb-8 sm:mb-0 rounded-lg">
                            <img className="rounded-xl mb-2 shadow-sm " src={otherBlog.image} alt={otherBlog.title} />
                            <div>
                                <p className='text-gray-400 text-xs mb-2'>2 minutes read</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{otherBlog.title}</h5>
                                <p className="mb-3 text-[#141414] font-semibold">{otherBlog.content.substring(0, 100)}...</p>
                            </div>
                            <p className='mt-2 text-sm italic text-[#7D7D7D]'>{otherBlog.created_date}</p>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogDetail;
