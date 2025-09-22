import { FaEmber, FaInstagram, FaMailBulk, FaMailchimp, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-[MidnightBlue] px-4 md:px-16 lg:px-28 text-white py-15 items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="">
                    <h2 className="font-bold mb-4 text-[DodgerBlue] text-2xl">Contact</h2>
                    <ul>
                        <li className="py-2"><p className="hover:curser-pointer"><span className="text-[Yellow]">Mobile no : </span>+91 9843790359</p></li>
                        <li className="py-2"><p><span className="text-[Yellow]">Email : </span>rkservehubteam@gmail.com</p></li>
                        <li className="py-2">
                            <o1 className="flex gap-4">
                                <li><p><FaInstagram/></p></li>
                                <li><p><FaTwitter/></p></li>
                                <li><p><FaWhatsapp/></p></li>
                                <li><p><FaMailBulk/></p></li>
                                <li><p></p></li>
                            </o1>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4 text-[DodgerBlue] text-2xl">Timing</h2>
                    <ul>
                        <li className="py-2 text-[Yellow] text-xl"><h3>Monday - Saturday :</h3></li>
                        <li className="py-2"><p>24 / 7 hrs</p></li>
                        <li className="py-2 text-xl text-[Yellow]"><h3>Sunday :</h3></li>
                        <li className="py-2"><p>9:00 am to 1:30 am</p></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4 text-[DodgerBlue] text-2xl">Address</h2>
                    <ul>
                        <li className="py-2"><p>RK ServeHub</p></li>
                        <li className="py-2"><p>Anna Nagar, Sillicon valley,</p></li>
                        <li className="py-2"><p>Salem - 637405,</p></li>
                        <li className="py-2"><p>Tamil Nadu, India</p></li>
                    </ul>
                </div>
            </div>
            <div className="border-t pt-6 border-gray-600 text-center mt-6">
                <p>@ 2025 rkarthikeyan. All Rights Reserved</p>
            </div>
        </footer>
    )
}