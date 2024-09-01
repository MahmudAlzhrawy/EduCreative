import search from './navImages/Search.png'
import user from './navImages/user.png'
import Arrow from './navImages/Arrow.png'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Navbar()
{
    const[Open , setOpen] = useState(false)


    const toggle = () => {
        if(Open) 
        {
            setOpen(false)
        }
        else 
        {
            setOpen(true)
        }
    }
    return(
        <div className='w-[94%]  bg-[#F5FAEE] '>
            <nav className="w-full  flex items-start pt-2 pb-2 md:items-center justify-between pl-1 pr-1 md:pl-3 md:pr-3">
                <img className='w-[50px] h-[50px] ' src={user} alt=''/>
                <ul className='hidden md:flex justify-center items-center gap-5 w-[50%]'>
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
                <div className='flex justify-center flex-col items-start gap-3 md:hidden'>
                <IoMenu onClick={toggle} className='w-[40px] h-[40px] md:hidden block'/>
                   
                    {
                        Open && 
                        <ul className='flex justify-center items-center flex-col gap-5 w-[50%]'>
                           <li className='flex justify-center items-center gap-1'>
                               <p className='font-normal text-[20px] text-[#000000] font-[Inter]'>Courses</p>
                               <img className='w-[20px] h-[20px]' src={Arrow} alt=''/>
                          </li>
                         <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>Books</li>
                         <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>projects</li>
                         <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>questions</li>
                         <li className='font-normal text-[20px] text-[#000000] font-[Inter]'>about</li>
                       </ul>
                    }
                </div>
            </nav>
        </div>
    )
}