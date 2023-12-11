import React, {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom"
import OpenAI from 'openai';
// require('dotenv').config()


import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    ConversationHeader,
    Avatar,
    InfoButton,
    TypingIndicator,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";


const ChatWidget= ({openAI}) => {

    const inputRef = useRef();
    const [msgInputValue, setMsgInputValue] = useState("");
    const [messages, setMessages] = useState([]);



    const handleSend = message => {


        setMessages([...messages, {
            message,
            direction: 'outgoing'
        }]);
        setMsgInputValue("");
        inputRef.current.focus();

        // TODO: send message to ChatGPT + call handleReturn (find a way to not freeze the screen)

    };

    const handleSubmit = async (e) => {

    }

    // TODO: Once the ChatGPT response is pulled from Open AI call this function
    // const handleReturn = message => {
    //
    // };

    return(
        <div style={{
            height: "500px"
        }}>
            <ChatContainer>
                <ConversationHeader>
                    <Avatar src={'/display-pic.png'} name="User" />
                    <ConversationHeader.Content userName="ChatGPT" info="Active" />
                    <ConversationHeader.Actions>
                        <InfoButton />
                    </ConversationHeader.Actions>
                </ConversationHeader>
                <MessageList scrollBehavior="smooth" typingIndicator={<TypingIndicator content="ChatGPT is thinking" />}>
                    {messages.map((m, i) => <Message key={i} model={m} />)}
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={handleSend} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} />
            </ChatContainer>
        </div>
    );
}

export default ChatWidget;