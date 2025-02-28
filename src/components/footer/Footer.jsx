import { FaLinkedin, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/social-arrow.png"
export default function Footer() {
  return (
    <footer className="bg-white flex justify-center text-black px-6 py-6 pb-10">
      <div className="container lg:max-w-3xl md:flex items-center justify-between space-x-6">
        <div className="uppercase text-center md:text-left text-2xl font-semibold">
          <h2>Kofa Ibrahim</h2>
        </div>
        <div className="flex space-x-5">
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold flex items-center space-x-1 transition-all border-b hover:border-b-2 duration-300 ease-linear border-gray-600 hover:border-black"
          >
            <p className="text-base">X</p> <img src={arrow} alt="" className="w-4 h-4 flex-shrink-0" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold flex items-center space-x-1 transition border-b hover:border-b-2 duration-300 ease-linear border-gray-600 hover:border-black"
          >
            <p className="text-base">Linkedin</p> <img src={arrow} alt="" className="w-4 h-4 flex-shrink-0" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold flex items-center space-x-1 transition border-b hover:border-b-2 duration-300 ease-linear border-gray-600 hover:border-black"
          >
            <p className="text-base">Instagram</p> <img src={arrow} alt="" className="w-4 h-4 flex-shrink-0" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold flex items-center space-x-1 transition border-b hover:border-b-2 duration-300 ease-linear border-gray-600 hover:border-black"
          >
            <p className="text-base">Facebook</p> <img src={arrow} alt="" className="w-4 h-4 flex-shrink-0" />
          </Link>
         
        </div>

      </div>
    </footer>
  );
}
