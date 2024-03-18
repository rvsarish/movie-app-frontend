import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import "../src/Register.css"
import { useFormik } from 'formik'
import *as yup from "yup";
import { Link, useNavigate } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate()
    const registerValidationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().required().min(10).email(),
        password: yup.string().required().min(10),
    })
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        validationSchema: registerValidationSchema,

        onSubmit: (values) => {
            console.log(values);
        },
    })
  return (
    <div className='addForm'>
        <form className='form' onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} name="name" onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}/>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={formik.values.trailer} onChange={formik.handleChange} name="password" onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}/>
        <Button variant="contained" type='submit' onClick={() => navigate(`/`)} >Register</Button>
        <h4>Have an account ? click Here <Link to='/'>Login</Link></h4>
    </form>
    </div>
  )
}
