import line2 from '../assets/images/L2.png'
import line1 from '../assets/images/L1.png'
import arr from '../assets/images/p11.png'
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p4 from '../assets/images/p4.png'
import p5 from '../assets/images/p5.png'
import p6 from '../assets/images/p6.png'
import p7 from '../assets/images/p7.png'
import p8 from '../assets/images/p8.png'
import p9 from '../assets/images/p9.png'
import p13 from '../assets/images/p13.png'
import Navbar from '../Components/Navbar';
import Card from '../Components/Card'

export default function Home()
{

   const ImagesArray = [
    {
        'src' : p1
    }
    ,
    {
        'src' : p2
    }
    ,
    {
        'src' : p4
    }
    ,
    {
        'src' : p5
    }
    ,
    {
        'src' : p6
    }
    ,
    {
        'src' : p7
    }
    ,
    {
        'src' : p8
    }
    ,
    {
        'src' : p9
    }
    ,
    {
        'src' : p13
    }

    ]
    
    const showCards = ImagesArray.map((item , index)  => <Card key={index} url={item.src} /> )
    return(
        <div className='w-full bg-[#F5FAEE] box-border'>
               <div className="w-full  bg-[#F5FAEE] flex justify-center items-center mt-[0px] mb-[0px] ml-auto mr-auto">
                    <Navbar />
                </div>
            <div className="w-full p-10 md:p-24 relative bg-[#F5FAEE]">
                <img className=' sm:w-[260px] md:[330px] lg:w-[412px] h-[65px] absolute left-[48%] sm:top-[21%] md:top-[25%] z-10 hidden sm:block' src={line2} alt=''/>
                <img className=' w-[85px] lg:w-[97px] h-[20px] absolute left-[57%] md:left-[59%] lg:left-[56%] top-[55%] z-10  hidden sm:block' src={line1} alt=''/>
                <div className="w-full flex flex-col justify-center items-center gap-7 ">
                     <h1 className="font-normal text-center text-[25px] sm:text-[35px] md:text-[40px] lg:text-[48px] text-[#000000] z-20 font-[Poppins]">All your studies on one platform.</h1>
                     <h2 className="font-normal text-center text-[20px] sm:text-[27px] md:text-[32px] lg:text-[40px] text-[#000000] z-20 font-[Poppins]">Simple,efficient ,free!</h2>
                     <button className=" w-[120px] h-[46px] md:w-[200px] md:h-[60px] flex justify-center items-center bg-[#3C4532] font-[Inter] font-normal text-[17px] md:text-[24px] text-[#F5FAEE] rounded-[15px]">Start now</button>
                </div>
                <img className=' w-[95px] lg:w-[100px] h-[100px] absolute left-[55%] hidden sm:block' src={arr} alt=''/>
                <p className='font-[Caveat] text-[#3C4532] font-bold text-[28px] absolute left-[70%]  lg:left-[63%] rotate-[-15.92deg] hidden sm:block'>It’s free!</p>
            </div>
            <div className='w-full  flex justify-center items-center '>
                <div className='bg-[#d6f7a9] rounded-t-0 sm:rounded-t-[400px] h-full flex justify-center items-center p-[90px]'>
                   <div className='w-[80%] flex-wrap flex justify-center items-center gap-5'>
                      {showCards}
                   </div>
                </div>     
            </div>
        </div>
    )
}