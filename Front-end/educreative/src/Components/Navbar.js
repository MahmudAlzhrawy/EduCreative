import search from '../assets/images/Search.png'
import user from '../assets/images/user.png'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar()
{
    const[Open , setOpen] = useState(true)


    const toggle = () => {
       let ulEle = document.querySelector('ul');
       ulEle.classList.add('flex')
       ulEle.classList.add('flex-col')
       ulEle.classList.remove('hidden')
       ulEle.classList.add('justify-center')
       ulEle.classList.add('pt-[50px]')
       if(Open) { setOpen(false) }
    }

    const toggle2 = () => {
        let ulEle = document.querySelector('ul');
        ulEle.classList.add('hidden')
        ulEle.classList.remove('flex')
        ulEle.classList.remove('flex-col')
        ulEle.classList.remove('pt-[50px]')
        if(!Open) { setOpen(true) }
    }


    return(
        <div className='w-[94%]  bg-[#F5FAEE] '>
            <nav className="w-full  flex items-start pt-2 pb-2 md:items-center justify-between pl-1 pr-1 md:pl-3 md:pr-3">
                <img className='w-[50px] h-[50px] ' src={user} alt=''/>
                <ul className=' hidden md:flex justify-center items-center gap-5 w-[50%]'>
                    <li className='flex justify-center items-center gap-1'>
                        <p className='font-normal text-[20px] text-[#000000] font-[Inter]'>Courses</p>
                        <IoMdArrowDropdown className='w-[20px] h-[20px]'/>
                    </li>
                    <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>Books</li>
                    <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>projects</li>
                    <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>questions</li>
                    <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>about</li>
                </ul>
                <img className='w-[50px] h-[50px] hidden md:block' src={search} alt=''/>
                { Open ? 
                    <IoMenu id='menu' onClick={toggle} className='w-[40px] h-[40px] md:hidden block'/>
                       : 
                    <IoCloseSharp id='close' onClick={toggle2} className='w-[40px] h-[40px] md:hidden block' /> 
                }
            </nav>
        </div>
    )
}