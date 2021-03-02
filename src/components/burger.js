import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import BurgerImg from './assets/ScreenshotEatDaBurger.jpg'

export default function BurgerComponent() {
    return (
        <Card style={{ width: "25rem", height:'100%' }}>
            <Card.Img src={BurgerImg} alt="Card image cap" />
            <Card>
                <Card.Title>Eat-Da-Burger</Card.Title>
                <Card.Text>A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.
            </Card.Text>
            </Card>

            <ListGroup>
                <ListGroup.Item>HTML, CSS</ListGroup.Item >
                <ListGroup.Item>Javascript, Express</ListGroup.Item >
                <ListGroup.Item>Handlebars</ListGroup.Item >
            </ListGroup>
            <Card>
                <Card.Link href="https://github.com/Chickey49/BurgerApp" class="card-link">GitHub Repo</Card.Link>
                <Card.Link href="https://mighty-basin-21779.herokuapp.com/" class="card-link">Deployed Link</Card.Link>
            </Card>
        </Card>
    )
}
