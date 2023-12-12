import React, {useEffect, useRef, useState} from 'react';
import {Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/MusicGenExplanantionSection.css"

const MusicGenExplanationSection = () =>{
    return(
        <div className={'main-div-music-exp'}>
            <Container className={'main-container-music-exp'} fluid>
                <Row className={'main-row-music-exp'}>
                    <Col xs = {8}className={'content-col-music-exp'}>
                        Welcome to the world of music generation apps,
                        where the power to create music is at your fingertips!
                        Simply enter a song you want generated and wait for the result.
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default MusicGenExplanationSection;
