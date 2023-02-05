import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as yup from "yup"
import { useFormik } from 'formik';

//Schema validations
const studentsValidations = yup.object({
  name : yup.string().required("Please fill in your name"),
  batch : yup.string().required("Please fill in your batch ID").min(5,"hey! you need minimum 5 values"),
  gender: yup.string().required("Please fill in your gender"),
  experience: yup.string().required("Why not tell your experience"), 
})



const AddDataStudent = ({stud,setStud}) => { 

  const {values,handleSubmit,handleChange, errors,touched,handleBlur} = useFormik({
    initialValues:{
      name:"",
      batch:"",
      gender:"",
      experience:""
    },
    validationSchema:studentsValidations,
    onSubmit: (newStud)=>{
      addStudData(newStud);
    }
  }) 

const history = useHistory()

//Add Function
const addStudData = async (newStud) =>{
//event.preventDefault is used for avoid rendering after press the button(submit)
// event.preventDefault();
    try {
      const response = await fetch("https://63b3190d5901da0ab3773d01.mockapi.io/users",
      {method:"POST",
        body: JSON.stringify(newStud),
        headers:{
          "content-type":"application/json"
        }
    })  
      const data = await response.json();
       setStud([...stud,data])
       history.push("/students")  
    } catch (error) {
       console.log(error) 
    }
   
}

  return (
    <Base title="ADD NEW STUDENT" description="Here You Can Add New Student Details">
        <Container fluid = 'xxl' style={{textAlign:"center"}}>
            <Form className='addData' onSubmit={handleSubmit}>
                <Form.Label className='formLabel'>Name</Form.Label><h1>⬇</h1>
                <Form.Control onBlur={handleBlur} onChange={handleChange} value = {values.name} className='formSty' name='name' placeholder="Enter Name" />
                {touched.name && errors.name ? <p style={{color:"red"}}>{errors.name}</p>:""}
                <Form.Label className='formLabel'>Batch</Form.Label><h1>⬇</h1>
                <Form.Control onBlur={handleBlur} onChange={handleChange} value = {values.batch} className='formSty' name='batch' placeholder="Enter Batch" />
                {touched.batch && errors.batch ? <p style={{color:"red"}}>{errors.batch}</p>:""}
                <Form.Label className='formLabel'>Gender</Form.Label><h1>⬇</h1>
                <Form.Control onBlur={handleBlur} onChange={handleChange} value = {values.gender} className='formSty' name='gender' placeholder="Enter Gender" />
                {touched.gender && errors.gender ? <p style={{color:"red"}}>{errors.gender}</p>:""}
                <Form.Label className='formLabel'>Experience</Form.Label><h1>⬇</h1>
                <Form.Control onBlur={handleBlur} onChange={handleChange} value = {values.experience} className='formSty' name='experience' placeholder="Enter Experience" />
                {touched.experience && errors.experience ? <p style={{color:"red"}}>{errors.experience}</p>:""}
                <Button type='submit'  className="funtionBtn" variant="success">ADD</Button>
              </Form>
        </Container>
    </Base>
  )
}

export default AddDataStudent