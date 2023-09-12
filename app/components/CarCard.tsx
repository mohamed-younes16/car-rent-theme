"use client"

import { calculateCarRent, getcars } from '@/utils';
import Image from 'next/image';
import {useState} from 'react'

import steer from "@/public/steering-wheel.svg"
import drivetype from "@/public/tire.svg"
import gas from "@/public/gas.svg"
import icon from "@/public/right-arrow.svg"
import CarDetails from './CarDetails';







const CarCard = ({car}) => {
    
    const { city_mpg, year, make, model, transmission, drive } = car;
    const [open , setopen] = useState(false)

   const carrent = calculateCarRent(city_mpg,year)
  return (
    <div className="car-card group dark:bg-slate-500 dark:hover:bg-slate-400 transition ease-[cubic-bezier(1,0.02,0.46,1.27)] dark:text-white bg-primary-blue-100">

        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        <p className=' mt-8 flex text-3xl font-extrabold '>
            <span className=' car-card__price-dollar '>
            $
            </span>
            {carrent}
            <span className='car-card__price-day '>
            /day
            </span>
        </p>

        <div className="car-card__image">
            <Image fill alt='car image '
            className=' object-contain' src={getcars(car,180)}/>
        </div>

        <div className="relative  mt-4 flex w-full ">

                <div className="car-card__icon-container dark:!text-slate-200">

        <div className="car-card__icon">
            <Image alt='steering wheel' src={steer} height={20} width={20} />
            <div className="car-card__icon-text">
                {transmission === "a" ? "Automatic":"Manual"}
            </div>
        </div>

        <div className="car-card__icon">
            <Image alt='steering wheel' src={drivetype} height={20} width={20} />
            <div className="car-card__icon-text">
                {drive.toUpperCase()}
            </div>
        </div>
        <div className="car-card__icon">
            <Image alt='steering wheel' src={gas} height={20} width={20} />
            <div className="car-card__icon-text">
                {city_mpg}
            </div>
        </div>

        </div>

            <div className="car-card__btn-container hover:flex">
                        <button onClick={()=>setopen(true)} className="bg-primary-blue  flex rounded-full p-4 w-full">
                            <span className="flex-1">   View More </span>
                            <Image src={icon} width={30} height={30} className=' animate-bounce mr-6' alt='right arrow'/>
                        </button>
                    </div>
        </div>
   
       
    <CarDetails data={car} open={open} setopen={setopen} />
    </div>
  )
}

export default CarCard
