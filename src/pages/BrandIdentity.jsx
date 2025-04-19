import React from 'react'
import brand from '../brand.json';
import { Link } from "react-router-dom";
import Logo from '/images/favicon.png'
import BackToTop from '../components/BackToTop';

const BrandIdentity = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='w-[100%]'>
            <BackToTop />
            <div className="lg:pt-5 lg:pb-1 w-[97%] bg-black relative mt-3 m-[auto] text-white text-lg font-semibold flex lg:justify-around lg:gap-150 justify-between shadow-2xl rounded-2xl">
                <span className='lg:mb-[-35px] relative lg:-top-6'>
                    <Link to="/" className="text-blue-600 underline"><img src={Logo} alt='Impulse-Grid Logo' className='w-25 h-20' /></Link>
                </span>
                <button
                    className="block lg:hidden p-2"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <nav className="hidden lg:flex space-x-5 lg:pl-5">
                    <Link to="/" className="hover:text-gray-500 hover:underline">Home</Link>  <a className='hover:text-gray-500 hover:underline' href="#branding">Brand Identity</a>  <a className='hover:text-gray-500 hover:underline' href="#business">Business/Ad Creatives</a>  <a className='hover:text-gray-500 hover:underline' href="#poster">Poster Design</a>
                </nav>
                <div className={`lg:hidden pr-2 ${menuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
                    <nav className="flex flex-col items-center space-y-4 mt-4">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#branding" className="hover:text-gray-400">Brand Identity</a>
                        <a href="#business" className="hover:text-gray-400">Business/Ad Creatives</a>
                        <a href="#poster" className="hover:text-gray-400">Poster Design</a>
                    </nav>
                </div>
            </div>

            <div className="w-[94%] m-[auto] lg:px-15 px-5 py-5">
                <h1 className='lg:text-7xl text-4xl font-bold tracking-wide text-center'>Designs By Me</h1>
            </div>

            <div id="branding" className='relative w-[94%] m-[auto]'>
                <h2 className='lg:text-5xl text-3xl font-bold tracking-wide text-center'>Brand Identity</h2>
                <div className='grid lg:grid-cols-3 gap-4 pt-5'>
                    {brand.map((item) => (
                        <section key={item.id}>
                            <li>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='relative w-150 h-60 rounded-2xl shadow-2xl'
                                />
                            </li>
                            <li className='lg:text-5xl text-2xl font-normal'>{item.name}</li>
                        </section>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default BrandIdentity
