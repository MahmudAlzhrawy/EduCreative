import { createContext, useEffect, useState } from "react";

export const windowSize = createContext(null);

export default function WindowFunc({children})
{
    const[windowSize2 , setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      
        function reSizeWindow()
        {
            setWindowSize(window.innerWidth)
        }
       window.addEventListener('resize' , reSizeWindow)

       return () => {
        window.removeEventListener('resize' , reSizeWindow)
       }
    } ,[])

    return (
        <windowSize.Provider value={{windowSize2}}>{children}</windowSize.Provider>
    )
}