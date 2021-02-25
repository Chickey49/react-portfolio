import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import NavbarComponent from "./navbar"

export default function HomeComponent() {
    return (
        <div>
            <NavbarComponent />
            <Container>
                <div className="homeDiv">
                    <Row>
                        <Col className="title">
                            <h1>
                                Hello, World!
                </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content">
                            <h2>
                                My name is Cameron and I would love to be a part of your team!
                </h2>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
