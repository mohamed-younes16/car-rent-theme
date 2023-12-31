"use client"
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState ,Fragment } from 'react'

const Filter = ({opts , title}) => {
    const router = useRouter()
    
    const [selected, setSelected] = useState(opts[0])

  return (
    <Listbox   value={selected} onChange={e=>{
        setSelected(e)
        
      router.push(updateSearchParams(title,e.value.toLowerCase()),{scroll:false}) 

    }}>
      <div className='relative w-fit z-10 '>
          {/* Button for the listbox */}
          <Listbox.Button className='custom-filter__btn dark:text-white dark:bg-slate-500'>
            <span className='block truncate dark:text-white dark:bg-slate-500'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options dark:!text-white dark:bg-slate-500'>
              {/* Map over the options and display them as listbox options */}
              {opts.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative dark:!text-white cursor-pointer select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
  </Listbox>
  )
}

export default Filter