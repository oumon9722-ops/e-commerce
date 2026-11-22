import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegHeart, FaStar, FaUser } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5'
import { PiShoppingCartBold } from 'react-icons/pi'
import { RiContactsBook3Line } from 'react-icons/ri'
import { Link, NavLink, Outlet } from 'react-router'

function RootLayout() {


    const [isMenu, setMenu] = useState(false);

    const handleShowMenu = () => {
        setMenu(true);
    }
    const handleHideMenu = () => {
        setMenu(false);
    }

    return (
        <>

            <div className="bg-black text-white relative">
                <p className="flex justify-center items-center py-2">
                    🚚 Free shipping on orders over
                    <span className="text-red-500"> 50$ </span>
                    <FaStar className="text-orange-500" />
                </p>
            </div>
            <div className="">
                <div className="bg-neutral-100 max-w-7xl mx-auto flex justify-between items-center px-5 py-4 ">
                    <div className="logo  flex items-center gap-3">
                        <GiHamburgerMenu
                            className="text-2xl md:hidden hover:text-amber-400 hover:cursor-pointer transition-all"
                            onClick={handleShowMenu} />
                        <Link to="/" className="text-2xl font-semibold hover:text-amber-500 hover:underline">
                            KH
                        </Link>
                    </div>

                    {/* Destop Nav bar */}
                    <div className="nav-bar hidden  md:block">
                        <nav className="flex gap-5 ">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"
                                }>
                                Home
                            </NavLink>
                            <NavLink 
                                to="/product" 
                                className={({ isActive }) =>
                                isActive ? "text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"
                                }> 
                                Product 
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive ? "text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"
                                }> 
                                About 
                                </NavLink>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) =>
                                isActive ? "text-amber-500 underline" : "text-black hover:text-amber-500 hover:underline"
                                }> 
                                contact 
                            </NavLink>
                        </nav>
                    </div>


                    {/* Mobile Nav bar */}
                    <div className={`${isMenu ? 'left-0' : '-left-62.5'} bg-slate-800 w-62.5 h-screen absolute z-10 top-0  p-4 transition-all duration-300 md:-left-62.5`}>
                        <div 
                            className=" w-full h-full flex flex-col gap-4"
                            
                            >

                            <div className=" flex justify-end">
                                <IoCloseCircleOutline
                                    className="text-5xl text-white hover:text-amber-400 hover:cursor-pointer transition-all"
                                    onClick={handleHideMenu}
                                />
                            </div>

                            <NavLink 
                                to="/" 
                                className="bg-slate-700 flex items-center gap-3 p-1 hover:bg-slate-600 rounded-md"
                                onClick={handleHideMenu}
                                >
                                <AiOutlineHome className="text-2xl text-white" />
                                <span className="text-xl text-white">Home</span>
                            </NavLink>

                            <NavLink 
                                to="/product" 
                                className="bg-slate-700 flex items-center gap-3 p-1 hover:bg-slate-600 rounded-md"
                                onClick={handleHideMenu}
                                >
                                <PiShoppingCartBold className="text-2xl text-white" />
                                <span className="text-xl text-white">Product</span>
                            </NavLink>

                            <NavLink 
                                to="/about" 
                                className="bg-slate-700 flex items-center gap-3 p-1 hover:bg-slate-600 rounded-md"
                                onClick={handleHideMenu}
                                >
                                <FcAbout className="text-2xl text-white" />
                                <span className="text-xl text-white">About</span>
                            </NavLink>

                            <NavLink 
                                to="/contact" 
                                className="bg-slate-700 flex items-center gap-3 p-1 hover:bg-slate-600 rounded-md"
                            onClick={handleHideMenu}
                            >
                                <RiContactsBook3Line className="text-2xl text-white" />
                                <span className="text-xl text-white">Contact</span>
                            </NavLink>



                        </div>
                    </div>


                    <div className="icon flex items-center gap-4">
                        <FaRegHeart className="text-xl hover:text-amber-500 hover:underline" />
                        <FaUser className="text-xl hover:text-amber-500 hover:underline" />
                        <IoCartOutline className="text-xl hover:text-amber-500 hover:underline" />
                    </div>
                </div>
            </div>






            <Outlet />

        </>
    )
}

export default RootLayout