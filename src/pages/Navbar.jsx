import { useEffect } from "react";
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({onReservation,onAbout,onHome,onServices,onChefs,onFoodMenu,onFooter,onReviews,current}){

    const [moved,setMoved]=useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const [menuOpen,setMenuOpen]=useState(false);

    const toggleDropdown=()=>setIsOpen(!isOpen);
    const toggleMenu=()=>setMenuOpen(!menuOpen);
    const closeMenu=()=>setMenuOpen(false);
    const getStyle=(id)=>current===id ? 'text-[DodgerBlue] font-semibold':'text-white';
    const isExploreActive=['chefs','reviews','footer'].includes(current);

    useEffect(()=>{
        const handleMove=()=>setMoved(window.scrollY>0);
        window.addEventListener('scroll', handleMove);
        return()=>window.removeEventListener('scroll', handleMove);
    },[])


    return(
        <div className={`text-white fixed w-full top-0 flex items-center z-50 ${moved ? 'bg-gray-800' :''}`}>
            <div className="flex items-center md:pl-10 py-3 pl-3">
                <span className=" text-[DodgerBlue] cursor-pointer ml-2 font-bold text-3xl">RK ServeHub</span>
            </div>
            <div className="flex-grow"></div>
            
            <button className="text-xl lg:hidden border rounded mr-4 p-1 overflow-hidden cursor-pointer" onClick={toggleMenu}>{menuOpen ? <FaTimes/> : <FaBars/>}</button>

            <nav className={`absolute mr-8 lg:relative lg:flex wrap lg:items-center lg:w-auto w-full top-12 lg:top-0 lg:right-0 left-0 lg:bg-transparent lg:block bg-gray-800 md:justify-end transition-all duration-500 mt-2 ease-in-out ${menuOpen ? 'menu-open' : 'hidden'}`}>
                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-6 lg:gap-x-5 p-4 mt-2 md:ml-0 lg:p-0">
                    <p onClick={()=>{onHome(); closeMenu();}} 
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('home')}`}>
                        Home
                    </p>
                    <p onClick={()=>{onAbout();closeMenu()}} 
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('about')}`}>
                        About
                    </p>
                    <p onClick={()=>{onServices(); closeMenu();}}
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('services')}`}>
                        Services
                    </p>
                    <p onClick={()=>{onFoodMenu(); closeMenu();}}
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('menu')}`}>
                        Menu
                    </p>
                    <div className="relative">
                        <button onClick={toggleDropdown} className={`${isExploreActive ? 'text-[DodgerBlue]' : 'text-white'} cursor-pointer hover:text-[DodgerBlue] transition duration-500 flex items-center`}>
                            Explore
                            <svg className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                                <p onClick={()=>{onChefs(); closeMenu();}}
                                    className={`cursor-pointer block px-4 py-2 block text-sm hover:bg-[Black] ${getStyle('chefs')}`}>
                                    OurTeam
                                </p>
                                <p onClick={()=>{onReviews(); closeMenu();}}
                                    className={`cursor-pointer block px-4 py-2 text-sm hover:bg-[Black] ${getStyle('reviews')}`}>
                                    Reviews
                                </p>
                                <p onClick={()=>{onFooter(); closeMenu();}}
                                    className={`cursor-pointer block px-4 py-2 text-sm hover:bg-[Black] ${getStyle('footer')}`}>
                                    Contact
                                </p>
                            </div>
                        )}
                    </div>
                    <p onClick={()=>{onReservation(); closeMenu()}} className="inline-block py-2 px-6 bg-[DodgerBlue] text-white rounded-lg  transition duration-300 cursor-pointer">BOOK A TABLE</p>
                </ul>
            </nav>
        </div>
    )
}