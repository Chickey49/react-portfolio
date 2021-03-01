import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import EmpImg from './assets/EmpTeamGen.jpg'


export default function EmpGenComponent() {
    return (
        <Card style={{width: "25rem"}}>
        <Card.Img src={EmpImg} alt="Card image cap"/>
        <Card>
            <Card.Text class="card-title">Employee Team Generator</Card.Text>
            <Card.Text class="card-text">Node CLI that takes employee information and generates an hmtl webpage that displays summaries for each person.
            </Card.Text>
        </Card>

        <ListGroup>
            <ListGroup.Item>HTML, CSS,</ListGroup.Item>
            <ListGroup.Item class="list-group-item">Javascript,</ListGroup.Item>
            <ListGroup.Item class="list-group-item">Jquery</ListGroup.Item>
        </ListGroup>
        <Card>
            <Card.Link href="https://github.com/Chickey49/EmployeeTeamGenerator">GitHub Repo</Card.Link>
        </Card>
    </Card>
    )
}
