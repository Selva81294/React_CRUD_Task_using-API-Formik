import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import Button from 'react-bootstrap/Button';
import { Container, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

const EditStudData = ({stud}) => {
const {idx,studId} = useParams();
const [id,setId] = useState("");
const [name,setName] = useState("");
const [batch,setBatch] = useState("");
const [gender,setGender] = useState("");
const [experience,setExperience] = useState("");
const history = useHistory();

//Edit and Update Function
//Edit:
const updatedStudent = stud[idx]
useEffect(() => {
    setId(updatedStudent.id)
    setName(updatedStudent.name)
    setBatch(updatedStudent.batch)
    setGender(updatedStudent.gender)
    setExperience(updatedStudent.experience)
}, [])

//Update Function
const updateStudData = async () =>{
    try {
        const updateStudID = stud.findIndex((value)=>id === value.id)
        const newStudObj = {
            id,
            name,
            batch,
            gender,
            experience
        }
        const response = await fetch(`https://63b3190d5901da0ab3773d01.mockapi.io/users/${studId}`,
            {
                method:"PUT",
                body:  JSON.stringify(newStudObj),
                headers:{
                    "content-type":"application/json"
                }
            })
        const data = await response.json();
        stud[updateStudID] = data;
        setId("")
        setName("")
        setBatch("")
        setGender("")
        setExperience("")
        history.push("/students")
    } 
    catch (error) {
        console.log(error)
    } 
}

  return (
    <Base title="UPDATE STUDENT DATA" description="Here You Can Update Student Details">
        <Container fluid = 'xxl' style={{textAlign:"center"}}>
            <Form className='addData'>
                 students {idx}
                <Form.Label className='formLabel'>ID</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setId(e.target.value)} value = {id} className='formSty' type="text" placeholder="Enter ID" />
                <Form.Label className='formLabel'>Name</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setName(e.target.value)} value = {name} className='formSty' type="text" placeholder="Enter Name" />
                <Form.Label className='formLabel'>Batch</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setBatch(e.target.value)} value = {batch} className='formSty' type="text" placeholder="Enter Batch" />
                <Form.Label className='formLabel'>Gender</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setGender(e.target.value)} value = {gender} className='formSty' type="text" placeholder="Enter Gender" />
                <Form.Label className='formLabel'>Experience</Form.Label><h1>⬇</h1>
                <Form.Control onChange={(e)=>setExperience(e.target.value)} value = {experience} className='formSty' type="text" placeholder="Enter Experience" />
            </Form>
                <Button onClick={updateStudData}  className="funtionBtn" variant="success">UPDATE</Button>
        </Container>
    </Base>
  )
}

export default EditStudData