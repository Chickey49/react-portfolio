import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import GlucoseImg from './assets/glucose.png'
export default function GlucoseComponent() {
    return (
        <Card style={{ width: "25rem", height:'100%'}}>
            <Card.Img src={GlucoseImg} alt="Card image cap" />
            <Card>
                <Card.Title>Glucose Guardian</Card.Title>
                <Card.Text>An app for diabetics to assist in the  tracking of their glucose over time.</Card.Text>
                <Card.Footer>Currently still in production and plan to take this app to market with my team. </Card.Footer>
            </Card>
            <ListGroup>
                <ListGroup.Item>HTML, CSS, Bootstrap</ListGroup.Item >
                <ListGroup.Item>Javascript, Node, Firebase</ListGroup.Item >
                <ListGroup.Item>MongoDB, Heroku, and more!</ListGroup.Item >
            </ListGroup>
            <Card>
                <Card.Link href="https://github.com/Chickey49/react-portfolio" class="card-link">GitHub Repo</Card.Link>
                <Card.Link href="https://cams-portfolio.herokuapp.com/" class="card-link">Deployed Link</Card.Link>
            </Card>
        </Card>
    )
}
