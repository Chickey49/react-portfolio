import React from 'react'
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './navbar'
import FlyingImg from './assets/Flying.jpg'
import FamilyImg from './assets/family.jpg'

const styles = {
    card: {
        border: 'none',
        background: "linear-gradient(270deg, rgba(103,116,118,1) 8%, rgba(158,182,187,1) 95%, rgba(158,182,187,1) 100%)"
    }
}


export default function AboutComponent() {
    return (
        <div>
            <NavbarComponent />
            <Container style={{ justifyContent: 'center', backgroundColor: 'transparent', marginTop: '20px' }}>
                <Card style={styles.card}>
                    <Container style={{ height: '200px', width: '300px', backgroundColor: 'transparent' }}>
                        <Card.Img style={{ padding: '10px' }} src={FamilyImg} />
                    </Container>
                    <div>
                        <ListGroup style={{ width: '50%', marginLeft: '25%' }}>
                            <ListGroup.Item style={{ marginTop: '75px' }}>
                                <Card.Text>
                                    University of Washington, Seattle, WA
                    </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Card.Text>
                                    Six month Javascript bootcamp where I learned progressively more complex development skills, from HTML to React.js with Javascript. We learned to write great code from scratch using SOLID principles and became competent in frameworks such as React, Express and Node
                    </Card.Text>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
                <Container style={{ justifyContent: 'center', backgroundColor: 'transparent', marginTop: '20px' }}>
                    <Card style={styles.card}>
                        <Container style={{ height: '150px', width: '300px', backgroundColor: 'transparent' }}>
                            <Card.Img src={FlyingImg} style={{ padding: '10px' }} />
                        </Container>
                        <ListGroup style={{ width: '50%', marginLeft: '25%' }}>
                            <ListGroup.Item style={{ marginTop: '75px' }}>
                                <Card.Text>
                                    Big Bend Community College, Moses Lake, WA
                    </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Card.Text>
                                    An intense, two-year Commercial Pilot Associate’s degree program requiring study in physics, math, FAA regulations and aeronautic science.  Completed first year and earned a Private Pilot’s License before leaving due to Covid-19.
                    </Card.Text>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Row >
                        <Col style={{ justifyContent: 'center', marginTop: '25px' }}>
                            <Card style={{ width: '50%', marginLeft: '25%' }}>
                                <ListGroup >
                                    <Card.Title>Frameworks:</Card.Title>
                                    <ListGroup.Item> React.js, PWA, Node.js, Express, MVC, Passport.js</ListGroup.Item>
                                    <Card.Title>API:</Card.Title>
                                    <ListGroup.Item> JSON, AJAX, Firebase</ListGroup.Item>
                                    <Card.Title>Databases:</Card.Title>
                                    <ListGroup.Item> MySQL, MongoDB</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
