import { Link } from 'react-router-dom'
import mark from '../../assets/images/mark.png'
import arrow from '../../assets/images/Arrow2.png'
import pic from '../../assets/images/pic.png'
export default function LessonsComponent(props)
{
    const showData = props.data.map((item , key) => 

        <div key={key} className='w-[310px] py-6 flex gap-4 justify-center flex-col rounded-[15px] shadow-xl bg-[#F5FAEE] hover:scale-[1.2] transition-[2s]'>
            <div className='flex items-center justify-around'>
                <h2 className='font-[Poppins] font-normal text-[18px] sm:text-[20px] text-[#000000]'>{item.name}</h2>
                <div className='flex items-center gap-2'>
                    <p className='font-[Poppins] font-normal text-[15px] text-[#000000]'>done</p>
                    <img className='w-[20px] h-[20px]' src={mark} alt=''/>
                </div>
            </div>
            <p className='font-[Poppins] font-normal text-[15px] text-[#000000] text-center'>{item.description}</p>
            <div className='flex items-center justify-around'>
                <img className='w-[35px] h-[35px]' src={pic} alt=''/>
                <Link className='font-[Poppins] font-normal text-[18px] sm:text-[20px] hover:underline hover:font-bold text-[#BBEC6C] flex items-center gap-1'>Start <img className='w-[17px] h-[17px]' src={arrow} alt=''/></Link>
            </div>
        </div>

    )


    return(
        <div className='flex justify-center items-center gap-2  flex-wrap'>
            {showData}
        </div>
    )
}