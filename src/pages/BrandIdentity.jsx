import React from 'react'
import brand from '../brand.json';
import { Link } from "react-router-dom";
import Logo from '/images/favicon.png'
import BackToTop from '../components/BackToTop';

const BrandIdentity = () => {

    return (
        <div className='w-[100%] mb-5'>
            <BackToTop />
            <div className="lg:pt-5 lg:pb-1 w-[97%] bg-black relative mt-3 m-[auto] text-white text-lg font-semibold flex lg:justify-around lg:gap-250 justify-between shadow-2xl rounded-2xl">
                <span className='lg:mb-[-35px] relative lg:-top-6'>
                    <Link to="/" className="text-blue-600 underline"><img src={Logo} alt='Impulse-Grid Logo' className='w-25 h-20' /></Link>
                </span>

                <nav className="lg:pl-5 relative lg:top-0 lg:left-0 top-5 -left-5">
                    <Link to="/project" className="hover:text-gray-500 hover:underline">Designs</Link>
                </nav>
            </div>

            <div className="w-[94%] m-[auto] lg:px-15 px-5 py-5">
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
                                    className='relative w-150 lg:h-60 h-80 rounded-2xl shadow-2xl'
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
