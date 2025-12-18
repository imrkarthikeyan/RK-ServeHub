import { useEffect, useState, useRef } from "react";
import a1 from '../img/res1.jpg';
import a2 from '../img/res2.jpg';
import a3 from '../img/masal vada.jpeg.jpg';
import a4 from '../img/burger.jpg';

export default function About({onReservation}){

    const [experienceYears, setExperienceYears] = useState(0);
    const [experienceChefs, setExperienceChefs] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const isLargeScreen=window.innerWidth>=1024;
        const thresholdValue=isLargeScreen ? 0.75 : 0.4;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: thresholdValue }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, [])

    useEffect(() => {
        if(isInView) {
            const experienceInterval = setInterval(() => {
                setExperienceYears((prevExperienceYears) => {
                    if(prevExperienceYears < 12) {
                        return prevExperienceYears + 1;
                    } else {
                        clearInterval(experienceInterval)
                        return prevExperienceYears;
                    }
                })
            }, 150);
            const chefsInterval = setInterval(() => {
                setExperienceChefs((prevChefNumber) => {
                    if(prevChefNumber < 25) {
                        return prevChefNumber + 1;
                    } else {
                        clearInterval(chefsInterval)
                        return prevChefNumber;
                    }
                })
            },150)
            return () => clearInterval(chefsInterval)
        }
    },[isInView]);


    return(
        <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row" ref={sectionRef}>
            <div className="max-w-xl w-full">
                <div className='pr-2 grid grid-cols-2 relative lg:gap-3 gap-3 pl-2 md:ml-12 my-30'>
                    <div className='w-3/4 translate-x-[33.5%] translate-y-[28%]'>
                        <img src={a3} alt="" className='h-24 lg:h-35 md:h-34 w-full rounded-md object-cover' />
                    </div>
                    <div className='w-full'>
                        <img src={a1} alt="" className='h-auto w-full rounded-md'/>
                    </div>
                    <div className='w-full'>
                        <img src={a2} alt="" className='h-auto w-full rounded-md'/>
                    </div>
                    <div className='w-3/4'>
                        <img src={a4} alt="" className='h-auto w-full rounded-md'/>
                    </div>
                </div>
            </div>
            <div className='ml-4 lg:ml-12 lg:mt-[150px] mb-5'>
                <div className='flex items-center space-x-6 mb-4 text-[DodgerBlue] font-[700]'>
                    <h3 className='text-3xl'>About us</h3>
                </div>
                <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Welcome to RK-ServeHub</h2>
                <p className='text-gray-600 text-lg'>
                    At RK ServeHub, we bring innovation and service together. Founded with a <br/> passion for excellence, our mission is to offer top-quality service solutions <br/> across multiple industries — from hospitality to IT services. We focus on <br/>  reliability, efficiency, and customer satisfaction. Our experienced team ensures <br/> every service is delivered with care, precision, and professionalism.
                    <br/>Whether you're looking for expert support or high-end service execution,<br/> RK ServeHub is your trusted partner.
                </p>

                <div className="flex flex-col lg:flex-row space-x-6 lg:space-y-0 mt-6 lg:space-x-16">
                    <div className="flex items-center lg:flex-row">
                        <div className="border-l-8 border-[DodgerBlue] h-15 w-5 pl-4 mb-4 lg:mb-0"></div>
                        <div className="flex items-center space-x-8">
                            <p className="text-5xl text-center text-[DodgerBlue] font-bold">{experienceYears}</p>
                        </div>
                        <div className="pl-4">
                            <p className="text-lg font-light">Years of</p>
                            <p className="text-lg font-semibold mt-[-5px]">Experience</p>
                        </div>
                        <div className="border-l-8 border-[DodgerBlue] h-15 mb-4 lg:mb-0 ml-5 "></div>
                    </div>
                    <div className="flex items-center lg:flex-row">
                        <div className="border-l-8 border-[DodgerBlue] h-15 w-5 pl-4 mb-4 lg:mb-0"></div>
                        <div className="flex items-center space-x-8">
                            <p className="text-5xl text-center text-[DodgerBlue] font-bold">{experienceChefs}</p>
                        </div>
                        <div className="pl-4">
                            <p className="text-lg font-light">Experienced</p>
                            <p className="text-lg font-semibold mt-[-5px]">Master Chefs</p>
                        </div>
                        <div className="border-l-8 border-[DodgerBlue] h-15 mb-4 lg:mb-0 ml-5 "></div>
                    </div>
                </div>
                <div className="pt-7">
                    <p onClick={onReservation} className="inline-block py-4 px-8 bg-[DodgerBlue] text-white rounded-lg  transition duration-300 cursor-pointer">BOOK A TABLE</p>
                </div>
            </div>
        </div>
    )
}