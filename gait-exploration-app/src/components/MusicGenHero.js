import React, {useEffect, useRef, useState} from 'react';
import {Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/MusicGenHero.css"

const MusicGenHero = ()=>{
    return(
        <div className={'main-div-music-gen-hero'}>
            <Container className={'main-container-music-gen-hero'} fluid>
                <Row className={'top-row-music-gen-hero'}>
                    <Col xs = {12}/>
                </Row>
                <Row className={'middle-row-music-gen-hero'}>
                    <Col xs = {9} className={'content-col-music-gen-hero'}>
                        <h1 className={'hero-header'}>Music Generation</h1>
                    </Col>
                    <Col xs = {3}/>
                </Row>
                <Row className={'bottom-row-music-gen-hero'}>
                    <Col xs = {12}/>
                </Row>
            </Container>
        </div>
    )
}
export default MusicGenHero;