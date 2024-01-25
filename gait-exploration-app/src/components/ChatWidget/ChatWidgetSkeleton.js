import React, { useEffect, useRef, useState } from 'react';
import { ConversationHeader, Avatar, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/ChatWidgetSkeleton.css'; // Import your CSS file

const ChatWidgetSkeleton = ({ prompt, loading, setConvoPrompt }) => {
    function handleSend(e) {
        setConvoPrompt(prompt);
        window.scrollTo(0, 2000);
    }

    return (
        <div className="chat-widget-skeleton">
            <Row style={{ justifyContent: 'center' }}>
                <Col xs={12} className="textgen-prompt-header-col">
                    <ConversationHeader style={{ borderRadius: '15px' }}>
                        <Avatar src={'/display-pic.png'} name="Chat GPT" status="available" />
                        <ConversationHeader.Content style={{ maxWidth: 'inherit', overflowWrap: 'break-word' }} userName="Chat GPT Friend" info="Active" />
                        <ConversationHeader.Actions>
                            {/* ... (any additional actions) */}
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                </Col>
                <Col xs={12}>
                    {loading && <TypingIndicator content="ChatGPT is thinking ..." />}
                    <MessageInput style={{
                        width: 'fit-content',
                        height: '20vh',
                        paddingTop: '2vh',
                        paddingBlock: '2vh',
                        paddingLeft: '2vh',
                        borderRadius: '15px',
                        marginTop: '2vh'
                    }} onSend={handleSend} attachButton={false} sendDisabled={false} disabled={false} placeholder="{Chat GPT Generated text}" value={prompt} />
                </Col>
            </Row>
        </div>
    );
}

export default ChatWidgetSkeleton;
