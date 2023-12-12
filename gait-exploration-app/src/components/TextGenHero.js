import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/TextGenHero.css';

const TextGenHero = () => {
    return (
        <div>
            <Container fluid className='textgen-hero-container'>
                <Row>
                    <Col xs={12} className='text-overlay'>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TextGenHero;
