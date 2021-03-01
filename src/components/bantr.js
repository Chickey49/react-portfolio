import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import BantrImg from './assets/bantr.jpg'

export default function BantrComponent() {
    return (
        <Card style={{ width: "25rem" }}>
            <Card.Img src={BantrImg} alt="Card image cap" />
            <Card>
                <Card.Title>BANTR</Card.Title>
                <Card.Text>BANTR is a light-weight social media platform developed using Node,
                Express, MySQL, CSS and Handlebars. This app has great amount of data privacy and a robust
                model built around it. It has a login and sign-up static HTML pages which is authenticated
                using Passport.
            </Card.Text>
            </Card>

            <ListGroup>
                <ListGroup.Item class="list-group-item">HTML, CSS,</ListGroup.Item>
                <ListGroup.Item class="list-group-item">Javascript,</ListGroup.Item>
                <ListGroup.Item class="list-group-item">Jquery, Handlebars</ListGroup.Item>
            </ListGroup>
            <Card>
                <Card.Link href="https://github.com/Chickey49/Bantr">GitHub Repo</Card.Link>
                <Card.Link href="https://bantr.herokuapp.com/">Deployed Link</Card.Link>
            </Card>
        </Card>
    )
}
