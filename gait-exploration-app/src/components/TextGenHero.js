import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/TextGenHero.css'

const TextGenHero = () => {
    return(
        <div>
            <Container fluid className='textgen-hero-container'>
                <Row>
                    <Col xs={'12'} className={'textgen-hero-col-top'}></Col>
                    <Col xs={1} className='textgen-hero-col-left'></Col>
                    <Col xs={8} className='textgen-hero-col-title'>
                        <h1>Text Gen Title</h1>
                        <h2>Learn more about Text-based Generative AI</h2>
                    </Col>
                    <Col className={'textgen-hero-col-right'}></Col>
                    <Col xs={'12'} className={'textgen-hero-col-bottom'}></Col>
                </Row>
            </Container>
        </div>

    );
}

export default TextGenHero;