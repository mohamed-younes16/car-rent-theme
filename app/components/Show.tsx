"use client"

import  {  useLayoutEffect, useRef } from 'react'
import { updateSearchParams } from "@/utils";
import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';

const Show = ({ pageNumber, isNext }: ShowMoreProps) => {
const ref = useRef(null)
useLayoutEffect(() => {
  console.log(pageNumber)
ref.current.classList.remove('animate-bounce')
ref.current.classList.remove("!bg-gray-500")
}, [pageNumber])


const router = useRouter()
const  handleClick = (e)=>{
e.target.classList.add("animate-bounce")
e.target.classList.add("!bg-gray-500")
router.push(updateSearchParams("limit",`${Number(pageNumber) + 10}`) ,{scroll:false})


}



return (
<>
    {isNext && <div className="max-width mt-8 ">
        <button ref={ref} onClick={handleClick} className='block transition hover:scale-95 active:scale-90 mx-auto bg-primary-blue text-white p-4 rounded-full text-xl'>
        Show More 
    </button>
    </div>}

    </>
   
  )
}

export default Show