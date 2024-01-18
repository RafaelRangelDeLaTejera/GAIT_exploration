import React, {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom"
import GlobalNav from "../components/Global_Nav";
import OpenAI from "openai";
import ImageGen from "../components/ImageGen";
import Col from "react-bootstrap/Col";
import '../css/ImageGenHeroSection.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ImageGenHeroSection = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <Container fluid>
                <Row style={{backgroundColor: "darkslategray"}}>
                    <Col xs={2}/>
                    <Col xs={8} className={"Title"} style={{padding: "1%"}}>
                        <p >Image Generation</p>
                    </Col>
                    <Col xs={2}/>

                    <Col xs={12} className="Description" style={{padding: "1%"}}>
                        <p style={{width:"80vw"}}>Go crazy with our image generation application, here you can let
                            your imagination go crazy and bring your ideas to life </p>
                    </Col>
                </Row>

            </Container>




        </div>
    );
}

export default ImageGenHeroSection;