import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
  return (
    <div>
       <Formik
       initialValues={{ name: '', title: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         title: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           price: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/product/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
       }}
     >
       <Form>
         <label htmlFor="name">First Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="title">Last Name</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="price">price Address</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add
