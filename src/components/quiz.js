import React from 'react'
import { ListGroup, Card } from 'react-bootstrap'
import QuizGif from './assets/QuizGame.gif'

export default function QuizComponent() {
    return (
        <Card style={{ width: "25rem" }}>
            <Card.Img src={QuizGif} alt="Card image cap" />
            <Card.Body>
                <Card.Text>Quiz Game</Card.Text>
                <Card.Text>This quiz game was an early assignment. Running mostly on javascript, I
                created three questions and three answers corresponding.
                User score was determined from subtracting time left from total 60 seconds. I.E user took 10
                seconds to complete the game.
            </Card.Text>
            </Card.Body>

            <ListGroup class="list-group list-group-flush">
                <ListGroup.Item class="list-group-item">HTML, CSS</ListGroup.Item>
                <ListGroup.Item class="list-group-item">Javascript</ListGroup.Item>
            </ListGroup>
            <Card>
                <Card.Link href="https://github.com/Chickey49/Cams-HW4">GitHub Repo</Card.Link>
                <Card.Link href="https://chickey49.github.io/Cams-HW4/">Deployed Link</Card.Link>
            </Card>
        </Card>
    )
}
