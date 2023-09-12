
"use client"

import { manufacturers} from '@/constants'
import { SearchManuFacturerProps } from '@/types'
import { Combobox,  Transition } from '@headlessui/react'
import { Fragment , useState } from 'react'
import ser from "@/public/magnifying-glass.svg"
import Image from 'next/image'
const SearchManu = ({ manufacturer, setManuFacturer }: SearchManuFacturerProps) => {

    const [ch , setch] = useState("")
    const manus = manufacturers.filter(e=>e.toLowerCase().replace(/s+/g,"").includes(ch.toLowerCase().replace(/s+/g,"")) )
    

    

return (

    <div className="search-manufacturer ">
            <Combobox value={manufacturer} onChange={(e:string) => setManuFacturer(e)}>
            <div className='relative w-full'>
            <Combobox.Button className='absolute top-[14px]'>
            <Image
            src='/car-logo.svg'
            width={20}
            height={20}
            className='ml-4'
            alt='car logo'
            />
        </Combobox.Button>
    <Combobox.Input  displayValue={(i : string) => i} onChange={e=>setch(e.target.value)}  className={ `dark:text-white search-manufacturer__input border border-slate-400  dark:border-white `} placeholder='lambo...' />
    <Transition
            as={Fragment} 
            leave='transition ease-in duration-500'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-90'
            enter='transition ease-in duration-500'
            enterFrom='opacity-0 scale-90 '
            enterTo='opacity-100 scale-100'
        
        >
            <Combobox.Options className={ `dark:text-slate-100 dark:bg-white rounded-lg max-h-[300px] overflow-auto`}>
                {manus.map(e=>(
                    <Combobox.Option as={Fragment} key={e} value={e}   >
                        {({active})=>(
                        <li  className={` relative search_manufacturer__option  px-2 ${
                            active ? '!bg-blue-500 text-white' : ' text-black'
                        }`}>
                            {e}
                            
                            </li>
                        )}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
            </Transition>
            </div>
    </Combobox>
    </div>
        
   
    
  )
}

export default SearchManu