import React from 'react'
import Base from '../Base/Base'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Students = ({stud,setStud}) => {
const history = useHistory()

//Delete Function
const deleteData = async (id)=>{
    try {
        const response = await fetch(`https://63b3190d5901da0ab3773d01.mockapi.io/users/${id}`,
        {
            method:"DELETE"
        })
        const data = await response.json();
        console.log(data)
        const filterDelete = stud.filter((data)=> data.id !== id)
        setStud(filterDelete); 
    } catch (error) { 
        console.log(error)
    }
   
}




    
  return (
     <Base title="STUDENTS DETAILS" description="Here, you can see all students details. Then Delete, Add, Edit options available.">   
        <Container fluid = 'xxl' className='card-div'>
        {
            stud.map((value,idx)=>(
        <div key={idx}>
            <Card style={{width:"auto",backgroundColor:"#009B77", color:"whitesmoke", boxShadow:"5px 5px 12px black"}}  className="text-center">
                    <Card.Body>
                        <Card.Title style={{fontSize:"30px"}}>{value.name}</Card.Title><hr/>
                            <Card.Text style={{fontSize:"20px"}}>Batch: {value.batch}</Card.Text>
                            <Card.Text style={{fontSize:"20px"}}>Gender: {value.gender}</Card.Text>
                            <Card.Text style={{fontSize:"20px"}}>Experience: {value.experience} years</Card.Text>
                        <span>  
                        <Button onClick={()=>history.push(`/edit/${idx}/${value.id}`)} className="studBtn editBtn" variant="success">EDIT</Button>
                        <Button className="studBtn deleteBtn" onClick={()=>deleteData(value.id)} variant="success">DELETE</Button>
                        <Button onClick={()=>history.push(`/view/${idx}`)} className="studBtn" variant="success">VIEW</Button></span> 
                    </Card.Body>
            </Card>
        </div>
        
))}
    </Container>
     </Base>
  )
}

export default Students