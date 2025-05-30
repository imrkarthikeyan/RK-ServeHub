import {  FaCoffee, FaMoon, FaUtensils, } from 'react-icons/fa';
import mealsData from '../assets/foodItems.json';
import { useState } from 'react';

export default function FoodMenu(){

    const [selectedMeal,setSelectedMeal]=useState('breakfast')

    const handleMealClick=(meal)=>{
        setSelectedMeal(meal)
    }

    const meals=[
        {name:"breakfast", icon:<FaCoffee/>},
        {name:"lunch", icon:<FaUtensils/>},
        {name:"dinner", icon:<FaMoon/>}
    ]

    const foodItems=mealsData[selectedMeal] || [];
    const midIndex=Math.ceil(foodItems.length/2);
    const leftItems=foodItems.slice(0,midIndex);
    const rightItems=foodItems.slice(midIndex)

     return(
        <div className="py-[30px] text-center">
            <div className='text-center'>
                <h1 className="text-2xl text-[DodgerBlue] mb-5 relative inline-block font-[500]">
                    <span className='mr-1 absolute top-1/2 left-[-60px] block w-[45px] h-[2px] bg-[DodgerBlue] ml-2'></span>
                    Food Menu
                    <span className='absolute top-1/2 right-[-55px] block w-[45px] h-[2px] bg-[DodgerBlue] ml-2'></span>
                </h1>
                <h1 className='text-4xl font-[500]'>Popular Items</h1>
            </div>
            <div className='flex justify-center gap-15 md:pl-0 py-[30px] cursor-pointer'>
                {meals.map((meal)=>(
                    <div key={meal.name} onClick={()=>handleMealClick(meal.name)} className={`flex items-center px-4 ${selectedMeal === meal.name ? 'underline underline-offset-15 decoration-[DodgerBlue] font-semibold ' : ''}
}`}>
                    <span className='text-[DodgerBlue] text-4xl pr-2 py-[5px]'>{meal.icon}</span>
                    <p className='text-xl py-[8px]' >{meal.name.charAt(0).toUpperCase()+meal.name.slice(1)}</p>
                    </div>
                ))
                }
            </div>
            <hr className='w-100% text-[#dddd]'/>
            <div className='container p-2 md:p-[70px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-5'>
                            {leftItems.map((food,index)=>(
                                <div key={index} className="flex items-center">
                                <img src={food.image} alt={food.name} className="img-fluid flex-shrink-0 rounded w-[90px] h-[80px]"/>
                                <div className='flex w-full flex-col text-left ps-4'>
                                    <h5 className='flex justify-between border-b pb-2 border-[#ccc]'>
                                        <span className="text-h5 font-bold">{food.name}</span>
                                        <span className='font-nun font-bold text-[DodgerBlue]'>{food.price}</span>
                                    </h5>
                                    <small className='italic text-[.875em]'>{food.about}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-5'>
                        {rightItems.map((food,index)=>(
                            <div key={index} className="flex items-center">
                                <img src={food.image} alt={food.name} className="img-fluid flex-shrink-0 rounded w-[90px] h-[80px]"/>
                                <div className='flex w-full flex-col text-left ps-4'>
                                    <h5 className='flex justify-between border-b pb-2 border-[#ccc]'>
                                        <span className="text-h5 font-bold">{food.name}</span>
                                        <span className='font-nun font-bold text-[DodgerBlue]'>{food.price}</span>
                                    </h5>
                                    <small className='italic text-[.875em]'>{food.about}</small>
                                </div>
                            </div>
                            ))}
                        </div>            
                    </div>
            </div>
        </div>
    )
}