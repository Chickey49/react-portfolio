import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import NavbarComponent from './navbar'
import StalkComponent from './stalk'
import WeatherComponent from './weather'
import WorkdayComponent from './workday'
import QuizComponent from './quiz'
import BantrComponent from './bantr'
import BurgerComponent from './burger'
import EmpGenComponent from './employee'
import GlucoseComponent from './glucose'

export default function PortfolioComponent() {
    return (
        <div className='portDiv'>
            <NavbarComponent />
            <Container style={{ justifyContent: 'center' }}>
                <Row>
                    <Col>
                        <StalkComponent />
                    </Col>
                    <Col>
                        <WeatherComponent />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                    <Col>
                        <WorkdayComponent />
                    </Col>
                    <Col>
                        <QuizComponent />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                    <Col>
                        <BantrComponent />
                    </Col>
                    <Col>
                        <BurgerComponent/>
                    </Col>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                    <Col>
                        <EmpGenComponent/>
                    </Col>
                    <Col>
                        <GlucoseComponent/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
