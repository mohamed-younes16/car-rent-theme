"use client"

import { useState , useEffect, useTransition } from 'react'
import SearchManu from './SearchManu'
import ser from "@/public/magnifying-glass.svg"
import Image from 'next/image'
import carmodel from "@/public/model-icon.png"
import { useRouter } from 'next/navigation'


const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter()



    const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
      <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
          src={ser}
          alt={"magnifying glass"}
          width={40}
          height={40}
          className='object-contain'
        />
      </button>
    );

    const handlesub = async (e)=>{
      e.preventDefault()
      const params = new URLSearchParams()
      params.append("model",model)
      params.append("manufacturer",manufacturer)
     
      const newurl =  params.toString()
      router.push(`?${newurl.toLocaleLowerCase()}`,{scroll:false})
     
    }



  return (
    <form className="searchbar" onSubmit={handlesub}>
            <div className="searchbar__item ">
        <SearchManu  manufacturer={manufacturer}
        setManuFacturer={setManuFacturer}  />
        
        </div>
        <div className="searchbar__item  ">
          <Image src={carmodel} height={20} width={20} className=' absolute left-3' alt=''/>
          <input type="text"  value={model}   
          name="model"
          placeholder='tiguan....' 
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setModel(e.target.value)}  
          className="dark:border-white  dark:text-white searchbar__input border sm:!border-l-0 border-slate-400" />
          <SearchButton otherClasses=' ml-10 h-20 w-20'/>
      
        </div>

    </form>


    
  )
}

export default SearchBar