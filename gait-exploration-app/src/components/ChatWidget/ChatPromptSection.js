import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/ChatPromptSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatWidgetSkeleton from "./ChatWidget/ChatWidgetSkeleton";
import ChatWidget from "./ChatWidget/ChatWidget";

const ChatPromptSection = ({ prompts, loading }) => {
    const [convoPrompt, setConvoPrompt] = useState("");

    return (
        <div>
            <Container fluid className={'chat-prompt-section-container'}>
                <Row className="intro-text-row">
                    <p className="intro-text">
                        Enhance your conversations with ChatGPT, featuring advanced text-based generative AI for a more natural and intelligent interaction.
                        Curious to see it in action? Explore some examples showcasing the impressive capabilities of ChatGPT.
                    </p>
                </Row>
                <Row style={{ height: '50vh' }}>
                    <Col xs={4} className={'chat-widget-col'}>
                        <ChatWidgetSkeleton prompt={prompts[0]} loading={loading} setConvoPrompt={setConvoPrompt} />
                    </Col>
                    <Col xs={4} className={'chat-widget-col'}>
                        <ChatWidgetSkeleton prompt={prompts[1]} loading={loading} setConvoPrompt={setConvoPrompt} />
                    </Col>
                    <Col xs={4} className={'chat-widget-col'}>
                        <ChatWidgetSkeleton prompt={prompts[2]} loading={loading} setConvoPrompt={setConvoPrompt} />
                    </Col>
                </Row>
                <Row className="bottom-row">
                    <p>
                    Ready to explore the next level of conversational AI? 
                    Engage in a chat with ChatGPT and discover the seamless blend of natural language and intelligence. 
                    Give it a try and experience the intriguing conversational difference firsthand!
                    </p>
                </Row>
            </Container>
            <Container>
                <ChatWidget convoPrompt={convoPrompt} />
            </Container>
        </div>
    );
}

export default ChatPromptSection;
