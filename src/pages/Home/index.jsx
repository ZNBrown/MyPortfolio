import React from 'react'
import { Summary } from '../../components/SummaryCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Home = () => {
    return (

        <>
            <Container>
            <Row>
                <Col><Summary /></Col>
            </Row>
            <Row>
            </Row>
            </Container>
        </>
    )
}