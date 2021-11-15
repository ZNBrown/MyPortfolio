import React from 'react'
import { Project } from '../../components/Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Projects = () => {
    const viraleyes = 
    { 
        "title":"viral-eyes",  
        "text":"A simple website using expressJS and JSON to simulate a anonymous blog",
        "link":"https://viral-eyes.netlify.app",
        "source":"https://drive.google.com/uc?id=11wEon8THzHEOuxZ2sfVfw7EXy6UfsDCT"
    }
    const habittracker =
    {
        "title":"Trackit",  
        "text":"A website built to help users keep track of their habits. Uses bitcrypt and jwt to handle authentication through the client, API and database.",
        "link":"https://habit-trackit.netlify.app",
        "source":"https://drive.google.com/uc?id=11wEon8THzHEOuxZ2sfVfw7EXy6UfsDCT"
    }
    return (

        <>
            <Container>
            <Row>
                <Col><Project item={viraleyes} /></Col>
                <Col><Project item={habittracker}/></Col>
            </Row>
            {/* <Row>
                <Col><Project /></Col>
                <Col><Project /></Col>
            </Row> */}
            </Container>
        </>
    )
}