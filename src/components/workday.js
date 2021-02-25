import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import WorkdayGif from './assets/WorkDayScheduler.gif'

export default function WorkdayComponent() {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img src={WorkdayGif} alt="Card image cap" />
            <Card.Body>
                <Card.Title>Daily Planner</Card.Title>
                <Card.Text>I built a daily planner that uses 70% javascript.
                Most elements are dynamically created. The current time is displayed in white while future
                times are green and past times are yellow.
                The user input persists with local storage.
                        </Card.Text>
            </Card.Body>

            <ListGroup>
                <ListGroup.Item>HTML, CSS</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/Chickey49/Cams-HW5">GitHub Repo</Card.Link>
                <Card.Link href="https://chickey49.github.io/Cams-HW5/">Deployed Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
