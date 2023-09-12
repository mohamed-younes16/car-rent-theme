import { footerLinks } from '@/constants'
import logo from "@/public/logo.svg"
import Image from 'next/image'

const Footer = () => {
  return (

    <div className=' flex max-md:flex-col max-width   max-md:items-center py-8  mt-16 '>
        <div className=''>
            <Image height={80} width={150} src={logo} alt='image logo'/>
            <p className=' my-6'> Carhub 2023
</p>
            <p>All rights reserved ©</p>
        </div>
        <div className="footer__links max-md:justify-center">
            {footerLinks.map(e=>(
                <div  key={e.title} className="footer__link">
                        <h3 className="font-bold">{e.title} </h3>
                        {e.links.map(e=><a  key={e.title} className='text-gray-500 transition  hover:text-blue-700 ' href={e.url}> {e.title} </a>)}
                    
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Footer