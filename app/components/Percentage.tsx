"use client"
import { useEffect, useRef } from 'react'
import { debounce } from 'lodash';
const Percentage = () => {
    const ref = useRef(null)
useEffect(() => {

    const getper = debounce ( ()=>{
        const h = document.documentElement.scrollHeight - window.innerHeight
        const dcrol = window.scrollY
        
        ref.current.style.width = `${((dcrol / h ) * 100).toFixed() }%`
    },100)
    
  
  window.addEventListener("scroll", getper)
  window.removeEventListener("resize", getper);

  return () => {
    window.removeEventListener("scroll", getper);
    window.removeEventListener("scroll", getper);
};
}, [])




  return (
    <div ref={ref}  className='h-1 transition-[width] duration-300 ease-[cubic-bezier(1,0.02,0.46,1.27)] bg-primary-blue  dark:bg-primary-blue-100 fixed z-[999] rounded-full top-0 left-0 ' />
        

  )
}

export default Percentage