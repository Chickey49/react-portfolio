import React from 'react'
import { Card } from 'react-bootstrap'

export default function AboutComponent() {
    return (
        <Card>
            <Card.Img></Card.Img>
            <Card.Title>About Cameron</Card.Title>
            <Card.Text>University of Washington, Seattle, WA</Card.Text>
            <Card.Text>
            Six month Javascript bootcamp where I learned progressively more complex development skills, from HTML to React.js with Javascript. We learned to write great code from scratch using SOLID principles and became competent in frameworks such as React, Express and Node
            </Card.Text>
        </Card>
    )
}
