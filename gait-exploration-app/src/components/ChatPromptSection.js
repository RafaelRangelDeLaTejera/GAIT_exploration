import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/ChatPromptSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import chatWidgetSkeleton from "./ChatWidget/ChatWidgetSkeleton";
import ChatWidgetSkeleton from "./ChatWidget/ChatWidgetSkeleton";
//import OpenAI from "openai";
import ChatWidget from "./ChatWidget/ChatWidget";


const ChatPromptSection = ({prompts, loading}) => {

    const [convoPrompt, setConvoPrompt] = useState("");


    return (
        <div>
            <Container fluid className={'chat-prompt-section-container'}>
                <Row style={{ height: '30vh', backgroundColor:'green'}}></Row>
                <Row style={{ height: '50vh'}}>
                    <Col xs={4} className={'chat-widget-col'}>
                        <ChatWidgetSkeleton prompt={prompts[0]} loading={loading} setConvoPrompt = {setConvoPrompt}/>
                    </Col>
                    <Col xs={4} className={'chat-widget-col'}>
                        <ChatWidgetSkeleton prompt={prompts[1]} loading={loading} setConvoPrompt = {setConvoPrompt}/>
                    </Col>

                    <Col xs={4} className={'chat-widget-col'}>
                        <ChatWidgetSkeleton prompt={prompts[2]} loading={loading} setConvoPrompt = {setConvoPrompt}/>
                    </Col>
                </Row>
                <Row style={{ height: '30vh', backgroundColor:'green'}}></Row>
            </Container>
            <Container>
                <ChatWidget convoPrompt={convoPrompt}/>
            </Container>
            {/*<Container fluid className={'chat-prompt-section-container'}>*/}
            {/*     <Row style={{ height: '90vh'}}>*/}
            {/*         <Col sm={12} style={{height:'5vh', backgroundColor:'green'}}></Col>*/}
            {/*         <Col sm={4} className={'chat-widget-col'}>Col 1</Col>*/}
            {/*         <Col sm={4} className={'chat-widget-col'}>Col 2</Col>*/}
            {/*         <Col sm={4} className={'chat-widget-col'}>Col 3</Col>*/}
            {/*         <Col sm={12} style={{height:'5vh', backgroundColor:'green'}}></Col>*/}
            {/*         /!*<Col md={12} style={{backgroundColor:'green'}}></Col>*!/*/}
            {/*     </Row>*/}
            {/*</Container>*/}
        </div>
    );
}

export default ChatPromptSection;
