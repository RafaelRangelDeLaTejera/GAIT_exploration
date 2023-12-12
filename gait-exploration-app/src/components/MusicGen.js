import React, { useState } from 'react';
import axios from 'axios';
import "../css/MusicGen.css"
import MusicGenHero from "./MusicGenHero";
import MusicGenExplanationSection from "./MusicGenExplanationSection";
import Button from "react-bootstrap/Button";
import {Col} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap-icons/font/bootstrap-icons.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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
            <MusicGenHero/>
            <MusicGenExplanationSection/>
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
                            <Button variant = "primary" type="submit" className={'input-button-music'}>
                                <i className="bi bi-send-fill" style={{color:"beige",fontSize:"8vh",alignSelf:"center"}}/>
                            </Button>
                        </form>

                    </Col>
                        {isLoading ? (
                            <Col xs = {12} className={'d-flex align-items-center justify-content-center'} style={{height:"20vh",paddingBottom:"20vh"}}>
                                <div style={{fontWeight:"800",fontSize:"40px",color:"beige"}}>Loading...</div>
                            </Col>
                        ) : (musicPath && (
                            <Col xs = {12} className={'d-flex align-items-center justify-content-center'} style={{height:"20vh",paddingBottom:"20vh"}}>
                                <div>
                                    <p style={{textAlign:"center",fontWeight:"800",fontSize:"30px",color:"beige",marginBottom:"2vh",marginTop:"12vh"}}>Your Music :)</p>
                                    <AudioPlayer src={musicPath} style={{width:"35vw",backgroundColor:"beige",borderRadius:"10px"}}>
                                        Your browser does not support the audio element.
                                    </AudioPlayer>
                                </div>
                            </Col>

                        ))}
                </Row>

            </Container>

        </div>
    );
};

export default MusicGen;
