"use client"

import React from 'react'
import { updateSearchParams } from "@/utils";
import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';

const Show = ({ pageNumber, isNext }: ShowMoreProps) => {

const router = useRouter()
const  handleClick = ()=>{
router.push(updateSearchParams("limit",`${Number(pageNumber) + 10}`) ,{scroll:false})


}



return (
<>
    {isNext && <div className="max-width mt-8 ">
        <button onClick={handleClick} className='block transition hover:scale-95 active:scale-90 mx-auto bg-primary-blue text-white p-4 rounded-full text-xl'>
        Show More 
    </button>
    </div>}

    </>
   
  )
}

export default Show