import { useState } from 'react';
import r2 from '../img/reserve2.png';
import axios from 'axios'

export default function Reservation(){

    const [customer,setCustomer]=useState({name:'', email:'',datetime:'', peoplecount:'', request:''});

    const handleChange=(e)=>{
        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('https://rk-servehub-backend-2.onrender.com/api/users', customer);
            alert("Booked Successfully! Your table is waiting.");

        }
        catch(error){
            alert("Some thing went wrong while booking table")
        }
    }


    return(
        <div className="py-[50px] min-h-screen bg-cover">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
                <div className="relative w-full">
                    <img src={r2} alt="happy day" className='object-cover w-full h-full'/>
                </div>
                <div className='container w-full bg-[MidnightBlue]'>
                    <div className='w-full inline-flex flex-col items-strat p-4 md:p-[50px]'>
                        <div className='text-center'>
                            <h1 className="text-3xl text-[DodgerBlue] mb-5 relative inline-block font-[600] font-bold py-5">
                            <span className='mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[DodgerBlue] ml-2'></span>
                                Reservation
                            <span className='absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[DodgerBlue] ml-2'></span>
                        </h1>
                        </div>
                        <h5 className='text-[Yellow] font-[700] text-[25px] mb-4 inline-block relative'>To Enjoy Your Day</h5>
                        <h1 className='text-white text-3xl font-[700] mb-5 font-bold'>Book A Table</h1>
                        <form className='w-full pt-5' onSubmit={handleSubmit}>
                            <div className='container'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    <div>
                                        <input type="text" name='name' onChange={handleChange} className='border border-[DodgerBlue] bg-white w-full py-4 pl-4 pr-12 rounded' id='name' placeholder='Your Name'/>
                                    </div>
                                    <div>
                                        <input type="text" name='email' onChange={handleChange} className='border border-[DodgerBlue] bg-white w-full py-4 pl-4 pr-12 rounded' id='email' placeholder='Your Email'/>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-5'>
                                    <div className='form-floating'>
                                        <input type="text" name='datetime' placeholder='DATE & TIME' onChange={handleChange} className='border border-[DodgerBlue] bg-white w-full py-4 pl-4 pr-12 rounded' id='datetime'/>
                                    </div>
                                    <div className='mb-4'>
                                        <select name="peoplecount" id="peoplecount" onChange={handleChange} className='border border-[DodgerBlue] bg-white w-full py-4 pl-4 pr-12 rounded'>
                                            <option value="1">1 people</option>
                                            <option value="2">2 people</option>
                                            <option value="3">3 people</option>
                                            <option value="4">4 people</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <textarea name="request" id="request" onChange={handleChange} placeholder='Special Request' className='w-full border rounded border-[DodgerBlue] bg-white py-2 pl-4'></textarea>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8'>
                                    <button type='submit' className='py-4 w-full bg-[DodgerBlue] text-white rounded cursor-pointer'>Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
