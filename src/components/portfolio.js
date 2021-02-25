import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import NavbarComponent from './navbar'
import StalkComponent from './stalk'
import WeatherComponent from './weather'
import WorkdayComponent from './workday'
import QuizComponent from './quiz'

export default function PortfolioComponent() {
    return (
        <div className='portDiv'>
            <NavbarComponent />
            <Container style={{justifyContent: 'center'}}>
            <Row>
                <Col>
                    <StalkComponent />
                </Col>
                <Col>
                    <WeatherComponent />
                </Col>
            </Row>
            <Row style={{paddingTop: '10px'}}>
                <Col>
                    <WorkdayComponent />
                </Col>
                <Col>
                <QuizComponent/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
