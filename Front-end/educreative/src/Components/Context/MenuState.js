import { createContext, useState } from "react";

export const Menu = createContext(true)

export default function MenuFunc({children})
{
   
   const[Open , setOpen] = useState(true)

   return(
      <Menu.Provider value={{Open , setOpen}}>{children}</Menu.Provider>
   )

}