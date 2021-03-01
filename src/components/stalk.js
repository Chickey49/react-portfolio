import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import StalkImg from './assets/project-stock.png'

export default function StalkComponent() {
    return (
        <Card style={{width: "25rem"}}>
            <Card.Img variant='top' src={StalkImg} alt="Card image cap" />
            <Card.Body>
                <Card.Title>STALK</Card.Title>
                <Card.Text>STALK was a group project that three of my classmate and I built.
                It utilizes two API's, chart.js, Bulma css framework.
            </Card.Text>
            </Card.Body>

            <ListGroup>
                <ListGroup.Item>HTML, CSS</ListGroup.Item>
                <ListGroup.Item>Jquery</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/lillianhuynh/STALK">GitHub Repo</Card.Link>
                <Card.Link href="https://lillianhuynh.github.io/STALK/">Deployed Link</Card.Link>
            </Card.Body>
        </Card>
        
    )
}
