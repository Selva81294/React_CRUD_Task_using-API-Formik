import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Base from "../Base/Base";

const ViewStudent = ({ stud, setStud }) => {

const {idx} = useParams();
const [id,setId] = useState("");
const [name,setName] = useState("");
const [batch,setBatch] = useState("");
const [gender,setGender] = useState("")
const [experience,setExperience] = useState("");
const history = useHistory();

const studView = stud[idx]
useEffect(() => {
    setId(studView.id)
    setName(studView.name)
    setBatch(studView.batch)
    setGender(studView.gender)
    setExperience(studView.experience)
}, [])



  return (
    <Base title="View Student Details" description={"Here You Can See Selected Student Details"}>
    <div className="viewCard">
      <Card style={{width: "20rem", backgroundColor: "#009B77", color: "whitesmoke",boxShadow: "5px 5px 12px black",}} >
        <Card.Body>
          <Card.Title style={{ fontSize: "30px" }}>{name}</Card.Title><hr />
          <Card.Text style={{ fontSize: "20px" }}>Batch: {batch} </Card.Text>
          <Card.Text style={{ fontSize: "20px" }}>Gender: {gender}</Card.Text>
          <Card.Text style={{ fontSize: "20px" }}>Experience: {experience} years</Card.Text>
        </Card.Body>
      </Card>
    </div>
    </Base>
  );
};

export default ViewStudent;
