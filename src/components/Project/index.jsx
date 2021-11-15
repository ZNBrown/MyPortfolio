import React, { useState } from 'react'
import './style.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

export const Project = ({ item }) => {

    return (
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={item.source} /> */}
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.text}
            </Card.Text>
            <Button href={item.link}>Visit!</Button>
        </Card.Body>
        </Card>
    )
}
