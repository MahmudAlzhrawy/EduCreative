import { useFormik } from 'formik';
import "../Sass/signup.scss"
import React from 'react';
import * as Yup from "yup"
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const  Signup = () => {
    const formik=useFormik({
    initialValues:{
    userName:"",
    email:"",
    password:"",
    confirmPassword:"",
    kind:"",
    schoolName:"",
    studyingYear:"",
    material:""
    },
    validationSchema :Yup.object().shape({
        userName:Yup.string()
        .min(3,"The name must be more Than 3 characters ")
        .required("Name is requierd "),
        email:Yup.string()
        .required("Email is requierd")
        .email("This email is not valid"),
        password:Yup.string()
        .min(8,"The password must be more than 8 numbers")
        .max(10,"The pass must be less than or equal 10 numbers")
        .required("password requierd"),
        confirmPassword:Yup.string()
        .required("You must confirm your password")
        .oneOf([Yup.ref("password"),""],"Not matching with password"),
        kind:Yup.string()
        .required("You must select account type"),
        schoolName:Yup.string(),
        studyingYear:Yup.string(),
        material:Yup.string(),

    }),
    onSubmit:(values)=>{
        console.log("form supmited")
        console.log("values",{values})
    }

    });
    return (
        <div className='main'>
            <div className='container'>
            <div className='img max-[535px]:hidden relative'>
                <h1 className='max-[901px]:hidden absolute top-1/4 left-1/2 -translate-x-1/2 text-primary font-serif text-5xl text-center w-full mx-auto '>Knowledge portal</h1>
                    <img className='h-full' src={require("../assets/images/register-image.jpeg")} alt="Not Found " />
                </div>
                <div className='fildes'>
                    <div className='partial_nav  '>
                        <p className='mr-3 p-2 rounded-full border'>EN</p>
                        <button className='button' >Sign in</button>
                        <button className='button'>Sign up</button>
                    </div>
                    <div className='head_tex'>
                    <h2>Greate Your Account</h2>
                    <p>Do you have a Knowledge Portal account? <Link className='link'>Login</Link></p>
                    </div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                    <input
                    className='inp'
                    name='userName'
                    type='text'
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='User Name'
                    />
                {formik.errors.userName && formik.touched.userName && <p className="err">{formik.errors.userName}</p>}
                    </div>
                    <div>

                    <input
                    className='inp'
                    name='email'
                    type='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Write Your email exmaple@gmial.com'
                    />
                    {formik.errors.email && formik.touched.email && <p className="err">{formik.errors.email}</p>}
                    </div>
                    <div>

                    <input
                    className='inp'
                    name='password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=' write Password'
                    />
                    {formik.errors.password&& formik.touched.password && <p className="err">{formik.errors.password}</p>}
                    </div>
                    <div>
                    <input
                    className='inp'
                    name='confirmPassword'
                    type='password'
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='write Password again'
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <p className="err">{formik.errors.confirmPassword}</p>}
                    </div>
                    <div className='relative'>

                    <select 
                    className='inp  '
                    name="kind"
                    value={formik.values.kind}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    >
                        <option value="">Select Account Type</option>
                        <option value="S_account">Student Account</option>
                        <option value="T_account">Teacher Account</option>
                        <option value="P_account">Parent Account</option>
                    </select>
                    <ArrowDropDownIcon className="dropdown-icon absolute top-1/4 right-1 pointer-events-none " />
                    {formik.errors.kind && formik.touched.kind && <p className="err">{formik.errors.kind}</p>}
                    </div>
                
                    {
                        (formik.values.kind==="S_account")&&<>
                        <div>

                        <input
                        className='inp'
                        name='schoolName'
                        type='text'
                        value={formik.values.schoolName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='School Name'
                        />
                        {formik.errors.schoolName && formik.touched.schoolName && <p className="err">{formik.errors.schoolName}</p>}
                        </div>
                        <div className='relative'>
                        <select 
                            className='inp'
                            name="studyingYear"
                            value={formik.values.studyingYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            >
                                <option value="">Select Studying Year</option>
                                <option value="one_year">1th Year</option>
                                <option value="two_year">2th Year</option>
                                <option value="three_year">3th Year</option>
                        </select>
                        <ArrowDropDownIcon className="dropdown-icon absolute top-1/4 right-1 pointer-events-none " />

                        {formik.errors.studyingYear && formik.touched.studyingYear && <p className="err">{formik.errors.studyingYear}</p>}
                        </div>
                        </>

                    }
                
                    {
                        (formik.values.kind==="T_account")&&<>
                        <div>

                        <input
                        className='inp'
                        name='schoolName'
                        type='text'
                        value={formik.values.schoolName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='School Name'
                        />
                        {formik.errors.schoolName && formik.touched.schoolName && <p className="err">{formik.errors.schoolName}</p>}
                        </div>
                        <div className='relative'>

                        <select 
                            className='inp'
                            name="material"
                            value={formik.values.material}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            >
                                <option value="">Select Materials</option>
                                <option value="math">Math</option>
                                <option value="arabic">Arabic</option>
                                <option value="english">English</option>
                                <option value="phsics">Pysics</option>
                                <option value="cheimstry">Cheimstry</option>
                        </select>
                        <ArrowDropDownIcon className="dropdown-icon absolute top-1/4 right-1 pointer-events-none " />
                        {formik.errors.material && formik.touched.material && <p className="err">{formik.errors.material}</p>}
                        </div>
                        </>

                    }
                    <div className='btn'><button  type="submit">Register</button></div>
                </form>
                </div>
            

            </div>
            
        </div>
    );
}


