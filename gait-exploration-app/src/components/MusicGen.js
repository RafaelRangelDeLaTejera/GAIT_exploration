import React, { useState } from 'react';
import axios from 'axios';
import "../css/MusicGen.css"
import MusicGenHero from "./MusicGenHero";
import MusicGenExplanationSection from "./MusicGenExplanationSection";
import Button from "react-bootstrap/Button";
import {Col} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const MusicGen = () => {
    const [textInput, setTextInput] = useState('');
    const [musicPath, setMusicPath] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/generate-music', { text: textInput });
            setMusicPath(`http://localhost:3001/generated-music/${response.data.filename}`);
        } catch (error) {
            console.error('Error sending text to server:', error);
        } finally {
            setIsLoading(false); // Stop loading regardless of the outcome
        }

    };

    return (
        <div>
            <MusicGenHero></MusicGenHero>
            <MusicGenExplanationSection></MusicGenExplanationSection>
            <Container fluid className = {'main-music-gen'}>
                <Row className={'main-row-music-gen'}>
                    <Col xs = {12} className={'d-flex align-items-center justify-content-center'} style={{height:"50vh"}}>
                        <form onSubmit={handleSubmit} className={'form-music'}>
                            <input
                                type="text"
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                placeholder="e.g. Latin Music"
                                className={'input-music-gen'}
                            />
                            <Button variant = "primary" type="submit" className={'input-button-music'}>Generate Music</Button>
                        </form>

                    </Col>
                    <Col xs = {12} className={'d-flex align-items-center justify-content-center'} style={{height:"20vh",paddingBottom:"20vh"}}>
                        {isLoading ? (
                            <div style={{fontWeight:"800",fontSize:"40px"}}>Loading...</div>
                        ) : (musicPath && (
                            <div>
                                <audio controls src={musicPath} style={{width:"35vw",}}>
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        ))}
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default MusicGen;
