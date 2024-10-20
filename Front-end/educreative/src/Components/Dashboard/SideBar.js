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
                      width: WindowStatus.windowSize2 < '900' ? 'fit-content' : '20%'
                    }} 
                      className="w-[20%] bg-[#F5FAEE] flex justify-center items-center h-screen">
            <div className="w-full h-[480px] flex justify-start py-6 md:pl-5 pl-1  items-start bg-[#F5FAEE] flex-col">
                <NavLink className="text-[#3C4532] mt-[25px] font-[Poppins] font-normal text-[20px] gap-2 flex justify-center items-center hover:bg-gray-300 rounded-[14px] p-2"><BiSolidHomeAlt2 className="w-[39.38px] h-[41.52px]" />{WindowStatus.windowSize2 > '900' && <p>Home</p>} </NavLink>
                <NavLink className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] gap-2 flex justify-center items-center hover:bg-gray-300 rounded-[14px] p-2"><IoNotifications className="w-[39.38px] h-[41.52px]"/>{ WindowStatus.windowSize2 > '900' && <p>Notifications</p>}</NavLink>
                <NavLink className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] gap-2 flex justify-center items-center hover:bg-gray-300 rounded-[14px] p-2"><FaUserCircle className="w-[39.38px] h-[41.52px]" />{WindowStatus.windowSize2 > '900' && <p>Profile</p>}</NavLink>
                <NavLink to='/dashboard/materials' className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] flex justify-center items-center gap-2 hover:bg-gray-300 rounded-[14px] p-2"><TfiViewGrid className="w-[37.38px] h-[39.52px] text-[#3C4532] fill-current"/>{ WindowStatus.windowSize2 > '900' && <p>Materials</p>}</NavLink>
                <NavLink className="text-[#3C4532]  mt-[25px] font-[Poppins] font-normal text-[20px] flex justify-center items-center gap-2 hover:bg-gray-300 rounded-[14px] p-2"><PiNotepadFill className="w-[39.38px] h-[41.52px]" /> { WindowStatus.windowSize2 > '900' && <p>Notes</p>}</NavLink>
            </div>
        </div>
    )
}