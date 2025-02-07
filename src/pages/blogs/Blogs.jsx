import React from 'react'
import { blogData } from '../../utils/blogsdata'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="py-10 px-6 lg:px-36">
        <div className='md:flex items-center justify-between mb-10'>
          <div className='md:w-8/12 mb-4 md:`mb-0'>
            <h2 className='text-black text-4xl mb-1 uppercase font-medium heading'>blog</h2>
            <h2 className='text-[#939393] text-4xl uppercase heading'>insight </h2>
          </div>
          <div className='md:w-4/12'>
            <p className='text-base'>Explore my portfolio to see how creativity meets functionality.</p>
          </div>
        </div>
        <div className="sm:grid grid-cols-2 gap-5">
          {blogData.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className=" bg-white block mb-8 sm:mb-0 rounded-lg">
              <img className="rounded-xl mb-2 shadow-sm " src={blog.image} alt={blog.title} />
              <div>
                <p className='text-gray-400 text-xs mb-2'>2 minutes read</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
                <p className="mb-3 text-[#141414] font-semibold">{blog.content.substring(0, 50)}...</p>
              </div>
              <p className='mt-2 text-sm italic text-[#7D7D7D]'>{blog.created_date}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs