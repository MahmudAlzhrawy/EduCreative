import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import { IoMenu } from "react-icons/io5";
import { useContext } from "react";
import { Menu } from "../../Components/Context/MenuState";
import { windowSize } from "../../Components/Context/Window";


export default function Dashboard()
{
    const MenuButton = useContext(Menu);
    const WindowStatus = useContext(windowSize);
    return(
        <div className="xl:w-[1320px] w-full">
         { WindowStatus.windowSize2 < '900' && <IoMenu id='menu' onClick={() => MenuButton.setOpen((prev) => !prev)} className='w-[40px] h-[40px] m-[5px]'/> }
          <div className="xl:w-[1320px] w-full flex">
            <SideBar />
            <div className="w-[80%] mx-auto pt-[30px] ">
                <Outlet/>
            </div>
          </div>
        </div>
    )
}