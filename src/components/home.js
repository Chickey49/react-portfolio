import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Row, Col, Container, Button, Card } from 'react-bootstrap'
import NavbarComponent from "./navbar"

export default function HomeComponent() {
    return (
        <div>
            <NavbarComponent />
            <div style={{marginLeft:'20%', marginTop: "40px"}}>
                <Card className="text-center"style={{backgroundImage:'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)', width:'80%'}}>
                    <Card.Header>Welcome!</Card.Header>
                    <Card.Body >
                        <Card.Title>Thank you for visiting my Portfolio Site!</Card.Title>
                        <Card.Text>
                            I am A Junior React Developer looking to be a useful contributer to any team while continuing to learn on the way!                        </Card.Text>
                        <Button variant="primary" href="/portfolio">See my projects!</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Contact info</Card.Footer>
                    <Card.Text>Email: Camslens@gmail.com</Card.Text>
                    <Card.Text>Github: https://github.com/Chickey49</Card.Text>
                </Card>
                    <Col>
                        <Row>
                            <Card.Text>
                                
                            </Card.Text>
                        </Row>
                    </Col>
            </div>
        </div>
    )
}
