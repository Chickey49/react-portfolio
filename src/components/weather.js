import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Card, } from 'react-bootstrap'
import WeatherGif from './assets/WeatherDashboard.gif'

export default function WeatherComponent() {
    return (
        <Card style={{ width: "25rem", height:'100%' }}>
            <Card.Img src={WeatherGif} alt="Card image cap" />
            <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>This weather app was an assignment.
                It utilizes two API's, Bootstrap css framework.
            </Card.Text>
            </Card.Body>

            <ListGroup>
                <ListGroup.Item>HTML, CSS</ListGroup.Item>
                <ListGroup.Item>Jquery</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
            </ListGroup>
            <Card>
                <Card.Link href="https://github.com/Chickey49/Cams-HW6">GitHub Repo</Card.Link>
                <Card.Link href="https://chickey49.github.io/Cams-HW6/">Deployed Link</Card.Link>
            </Card>
        </Card>
    )
}
