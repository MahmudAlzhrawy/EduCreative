import arabic from '../../assets/images/arabic.png'
import daynamic from '../../assets/images/daynamic.png'
import statics from '../../assets/images/statics.png'
import chimistry from '../../assets/images/chmistry.png'
import physics from '../../assets/images/physics.png'
import english from '../../assets/images/english.png'
import geology from '../../assets/images/geology.png'
import science from '../../assets/images/science.png'
import history from '../../assets/images/history.png'
import algebra from '../../assets/images/algebra.png'
import integral from '../../assets/images/integral.png'
import more from '../../assets/images/more.png'
import { Link } from 'react-router-dom'

export default function Materials()
{
    const MaterialsArray = [
        {
            'src' :  arabic,
            'name' : 'Arabic'
        }
        ,
        {
            'src' : daynamic,
            'name' : 'Daynamic'
        }
        ,
        {
            'src' :  statics,
            'name' : 'Statics'
        }
        ,
        {
            'src' :  chimistry,
            'name' : 'Chimistry'
        }
        ,
        {
            'src' :  physics,
            'name' : 'PHYSICS'
        }
        ,
        {
            'src' :  english,
            'name' : 'ENGLISH'
        }
        ,
        {
            'src' :  geology,
            'name' : 'Geology'
        }
        ,
        {
            'src' :  science,
            'name' : 'Science'
        }
        ,
        {
            'src' :  history,
            'name' : 'History'
        }
        ,
        {
            'src' :  algebra,
            'name' : 'Geomatry&Algebra'
        }
        ,
        {
            'src' :  integral,
            'name' : 'Diffrintia&Integral'
        }
        ,
        {
            'src' :  more,
            'name' : 'More'
        }

    ]



    const showMaterials = MaterialsArray.map((item  , key) => 
        <div key={key} className='w-[240px] sm:w-[310px] h-[96px] sm:h-[114px] flex rounded-[15px] justify-center items-center gap-1 bg-[#F5FAEE] shadow-xl hover:scale-[1.2] transition-[2s]'>
             <img className=' w-[77px] h-[77px] sm:w-[85.45px] sm:h-[85.45px]' src={item.src} alt=''/>
             <Link to={`${item.name}`} className='font-[Inter] font-normal text-[18px] sm:text-[24.34px] text-[#3C4532]'>{item.name}</Link>
        </div>
    )



    return(
        <div className='w-full  flex justify-center items-center'>
              <div className='flex justify-center items-center gap-2  flex-wrap'>
                  {showMaterials}
              </div>
        </div>
    )
}