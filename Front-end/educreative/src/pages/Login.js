import log from '../assets/images/log.png'
import * as Yup from 'yup'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import Style from '../Components/Style'
import { useState } from 'react'
export default function Login()
{
    const[color , setColor] = useState(false)
    const[color2 , setColor2] = useState(false)

    const initialValues = {
         name : '' ,
         password : '' 
        }
     
    const onSubmit = values => {
       console.log(values)
    }
     
    const validationSchema = Yup.object({
          name : Yup.string().required('UserName is required!'),
          password: Yup.string().required('Password is required!')
        })

      const changeColor = () => {
          if(color) {
            setColor(false)
          }
          else {
            setColor(true)
          }
      }  
      
      const changeColor2 = () => {
        if(color2) {
          setColor2(false)
        }
        else {
          setColor2(true)
        }
    }  

    return(
        <div className='flex justify-center items-center  w-full'>
            <div className='flex w-[93%] sm:w-[80%] mt-[40px] mb-[40px] ml-auto mr-auto bg-[#F5FAEE] rounded-[20px]  shadow-2xl'>
                <div className='w-[34%] h-full   rounded-[20px] relative hidden xl:block'>
                    <h2 className=' absolute top-[20%] left-[10%] text-[39px] font-bold text-[#EDFED9]'>Knowledge Portal</h2>
                    <img className='w-full h-full  rounded-tl-[20px]  rounded-bl-[20px]' src={log} alt=''/>
                </div>
              <div className='w-full xl:w-[66%]  rounded-[20px] flex justify-center items-center flex-col gap-8 p-8'>
                <div className='flex items-center justify-end gap-3 w-full  rounded-[20px] p-0 sm:p-[20px]'>
                    <div className='w-[38px] h-[38px] sm:w-[53px] flex justify-center items-center sm:h-[53px] text-[16px] sm:text-[24px] font-[Inter] font-normal border-solid border-[#9AA288] text-[#9AA288] border-[1px] rounded-full'>En</div>
                    <button onClick={changeColor} className='w-[66px] h-[35px] sm:w-[118px] sm:h-[49px] flex justify-center items-center text-[18px] sm:text-[24px] font-[Inter] font-normal border-solid text-[#9AA288] border-[#9AA288] border-[1px] rounded-[10px]' style={{backgroundColor:color ? '#3C4532' : null }}>Sign in</button>
                    <button onClick={changeColor2} className=' w-[66px] h-[35px] sm:w-[118px]  sm:h-[49px] flex justify-center items-center  text-[18px] sm:text-[24px] font-[Inter] font-normal border-solid text-[#9AA288] border-[#9AA288] border-[1px] rounded-[10px]'  style={{backgroundColor:color2 ? '#3C4532' : null }}>Sign up</button>
                </div>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='font-[Inter] font-bold text-[24px] sm:text-[32px] text-[#000000] text-center'>Login To Your Account</h1>
                    <div className='flex justify-center items-center sm:flex-row flex-col'>
                        <p className='text-[17px] sm:text-[24px] font-[Inter] font-normal text-[#9AA288] text-center'>Don’t have a knowledge portal account ?</p> 
                        <button className='text-[17px] sm:text-[24px] font-[Inter] font-normal text-[#396C00]'>Signup</button>
                    </div>
                </div>
                <Formik
                   initialValues={initialValues}
                   onSubmit={onSubmit}
                   validationSchema={validationSchema}
                >
                    <Form className=' flex justify-center items-center w-full flex-col gap-3 p-4'>
                        <div className='flex items-start justify-center flex-col'>
                           <Field className='w-[233px] sm:w-[362px] h-[52px] rounded-[10px] font-[Inter] font-normal border-solid text-[#9AA288] border-[#9AA288] border-[1px] pl-[20px]' type='text' name='name' placeHolder='UserName'/>
                           <ErrorMessage  name='name' component={Style}/>
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                           <Field className='w-[233px] sm:w-[362px] h-[52px] rounded-[10px] font-[Inter] font-normal border-solid text-[#9AA288] border-[#9AA288] border-[1px] pl-[20px]' type='password' name='password' placeHolder='Password'/>
                           <ErrorMessage name='password' component={Style}/>
                        </div>
                        <button className='rounded-[10px] flex justify-center items-center w-[233px] sm:w-[250px] h-[49px] bg-[#3C4532] text-[24px] font-[Inter] font-semibold text-[#F8FFDF]'>Login</button>
                    </Form>
                </Formik>
             </div>
            </div>
        </div>
    )
}