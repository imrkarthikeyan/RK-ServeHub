import welcome_img from '../img/welcome-img.png';
import res_pg from '../img/masal vada.jpeg.jpg';
import './Welcome.css'

export default function Welcome({onReservation}){
    return(
        <div className='relative bg-cover bg-center bg-no-repeat text-white min-h-screen'
        style={{backgroundImage:`url(${res_pg})`}}>
            <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
            <div className=" h-full grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  p-7 md:p-16  gap-10">
                <div className="z-10 pt-[220px] lg:pb-30 flex flex-col justify-center items-center items-start " >
                    <h2 className='text-[40px] pb-5'>RK ServeHub Welcomes You!</h2>
                    <h1 className="text-[60px] font-bold leading-tight font-mono text-[Yellow]">Fresh Food, <br /> <span className=''>Great Taste</span></h1>
                    <p className="text-lg  mb-4 z-10 text-center text-left">No long waits or confusion. Our system helps you get your food quickly and enjoy it without any hassle. Our meals are made fresh every day. You can explore the menu, place your order, book a table.</p>
                    <p onClick={onReservation} className="inline-block py-4 px-8 bg-[DodgerBlue] text-white rounded-lg  transition duration-300 cursor-pointer">BOOK A TABLE</p>
                </div>
                <div className="max-w lg:w-[40vw]   pt-10 overflow-hidden">
                    <img src={welcome_img} alt="Welcome you" className="w-full h-auto spin-slow"/>
                </div>
            </div>
        </div>
    )
}