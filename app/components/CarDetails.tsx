import{Fragment} from 'react'
import {Transition ,Dialog} from "@headlessui/react"
import closesvg from "@/public/close.svg"
import Image from 'next/image'
import { getcars } from '@/utils'


const CarDetails = ({open ,setopen,data}) => {

  return (

    <div>
        <Transition
        appear={true}
        show={open}
        as={Fragment }
        >
            <Dialog 
            onClose={()=>setopen(false)}
            as="div"
            className={ `relative z-10  `}

            >
                <Transition.Child
                as={Fragment}
                enter=' ease-[cubic-bezier(1,0.02,0.46,1.27)] duration-1000'
                enterFrom=' opacity-0 translate-y-20 '
                enterTo='   opacity-100  translate-y-0  z-10'
                leave=' ease-[cubic-bezier(0.93,-0.01,0.3,1.09)] duration-1000'
                leaveFrom=' translate-y-0   opacity-100 z-10'
                leaveTo=' -translate-y-20   opacity-0 -z[1]'
                > 
                    <div className='bg-black-100 bg-opacity-20 backdrop-blur-sm fixed inset-0' />

                </Transition.Child>
                
                <div className='fixed  z-20 inset-0 overflow-y-auto'>
                            <div className='flex  min-h-full items-center justify-center p-4 text-center'>
                                    
                                    
                                    <Transition.Child
                                    as={Fragment}
                                    enter=' ease-[cubic-bezier(1,0.02,0.46,1.27)] duration-1000'
                                    enterFrom=' opacity-0 -translate-y-[500px] scale-90 '
                                    enterTo='   opacity-100  translate-y-0 scale-100 z-10'
                                    leave=' ease-[cubic-bezier(0.93,-0.01,0.3,1.09)] duration-1000'
                                    leaveFrom=' translate-y-0  scale-100 opacity-100 z-10'
                                    leaveTo=' translate-y-[500px]  scale-90 opacity-0 -z[1]'
                                    >

                                        <Dialog.Panel className={`dark:bg-slate-500 dark:text-white  car-details__dialog-panel` }>
                                        
                                        <div className='flex-1 flex flex-col gap-3'>
                                            <div className="flex flex-col">
                                                <div className="car-details__main-image">
                                                    <Image src={getcars(data,90)} priority alt='car' fill className=' object-contain'/>
                                                </div>
                                                <div className="flex gap-3">
                                                    
                                                    <div className="flex-1 bg-primary-blue-100 relative rounded-lg w-full h-24">
                                                        <Image alt='car' priority  src={getcars(data,29)} className='  object-contain' fill/>
                                                    </div>
                                                    
                                                    <div className="flex-1 bg-primary-blue-100 relative rounded-lg w-full h-24">
                                                        <Image alt='car'  priority src={getcars(data,150)} className='  object-contain' fill/>
                                                    </div>
                                                    
                                                    <div className="flex-1 bg-primary-blue-100 relative rounded-lg w-full h-24">
                                                        <Image alt='car' priority  src={getcars(data,13)} className='  object-contain' fill/>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            

                                        </div>
                                        <div className="flex gap-6 flex-col">
                                            <h2 className="font-bold textxl">
                                            {data.make} {data.model}
                                            </h2>
                                            <div className="flex flex-col gap-2">
                                                {Object.entries<string>(data).map((e)=>
                                                    <div key={e[0]} className="flex justify-between py-2">
                                                        <p>{e[0].replace(/s+|_/g," ")} </p>
                                                        <p className="font-semibold">{e[1]} </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        </Dialog.Panel>

                                    </Transition.Child>

                                
                                        <button onClick={()=>setopen(false)} className="car-details__close-btn animate-bounce shadow-lg transition hover:shadow-red-600 ">
                                            <Image src={closesvg} height={30} width={30} alt='close button'/>
                                    </button>
                            </div>

                    </div>

            </Dialog>

        </Transition>
    </div>
  )
}

export default CarDetails