import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import "../src/Login.css"
import { useFormik } from 'formik'
import *as yup from "yup";
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    const loginValidationSchema = yup.object({
        email: yup.string().required().min(10).email(),
        password: yup.string().required().min(10),
    })
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema: loginValidationSchema,

        onSubmit: (values) => {
            console.log(values);
        },
    })
  return (
    <div className='addForm'>
        <form className='form' onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={formik.values.trailer} onChange={formik.handleChange} name="password" onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}/>
        <Button variant="contained" type='submit'  onClick={() => navigate(`/portal/home`)}>Login</Button>
        <h4>Don't have an account ? click Here <Link to="/register">Register</Link></h4>
    </form>
    </div>
  )
}
