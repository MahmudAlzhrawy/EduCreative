import { NavLink } from "react-router-dom";
import Home from '../../assets/images/Frame.png'
import { TfiViewGrid } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { PiNotepadFill } from "react-icons/pi";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { useContext, useState } from "react";
import { Menu } from "../Context/MenuState";
import { windowSize } from "../Context/Window";
export default function SideBar()
{
    const MenuButton = useContext(Menu);
    const WindowStatus = useContext(windowSize);

    return(
        <div style={{ position: WindowStatus.windowSize2 < '900' ? 'fixed' : 'sticky', 
                      left: WindowStatus.windowSize2 < '900' && MenuButton.Open ? '-100%' : '0',
                      width: WindowStatus.windowSize2 < '900' ? 'fit-content' : '24%'
                    }} 
             className="w-[24%] bg-[#F5FAEE] flex justify-center items-center h-screen"
            >
            <div className="w-full h-[480px] flex justify-start py-6 md:pl-4 pl-0  items-start bg-[#F5FAEE] flex-col">
                <NavLink className="text-[#3C4532] mt-[25px] font-[Poppins] font-normal text-[20px] gap-2 flex justify-center items-center hover:bg-gray-300 rounded-[14px] p-2"><BiSolidHomeAlt2 className="w-[30.34px] h-[33.35px] sm:w-[39.38px] sm:h-[41.52px]" />{WindowStatus.windowSize2 > '900' && <p>Home</p>} </NavLink>
                <NavLink to='/dashboard/notifications' className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] gap-2 flex justify-center items-center hover:bg-gray-300 rounded-[14px] p-2"><IoNotifications className="w-[30.34px] h-[33.35px] sm:w-[39.38px] sm:h-[41.52px]"/>{ WindowStatus.windowSize2 > '900' && <p>Notifications</p>}</NavLink>
                <NavLink to='/dashboard/profile' className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] gap-2 flex justify-center items-center hover:bg-gray-300 rounded-[14px] p-2"><FaUserCircle className="w-[30.34px] h-[33.35px] sm:w-[39.38px] sm:h-[41.52px]" />{WindowStatus.windowSize2 > '900' && <p>Profile</p>}</NavLink>
                <NavLink to='/dashboard/materials' className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] flex justify-center items-center gap-2 hover:bg-gray-300 rounded-[14px] p-2"><TfiViewGrid className="w-[30.34px] h-[33.35px] sm:w-[37.38px] sm:h-[39.52px] text-[#3C4532] fill-current"/>{ WindowStatus.windowSize2 > '900' && <p>Materials</p>}</NavLink>
                <NavLink to='/dashboard/notes' className="text-[#3C4532] mt-[25px] font-[Poppins] font-normal text-[20px] flex justify-center items-center gap-2 hover:bg-gray-300 rounded-[14px] p-2"><PiNotepadFill className="w-[30.34px] h-[33.35px] sm:w-[39.38px] sm:h-[41.52px]" /> { WindowStatus.windowSize2 > '900' && <p>Notes</p>}</NavLink>
            </div>
        </div>
    )
}