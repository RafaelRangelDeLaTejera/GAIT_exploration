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


const ChatWidget= ({convoPrompt}) => {

    const hasInitialCallBeenMade = useRef(false);

    useEffect(() => {
        if (!hasInitialCallBeenMade.current) {
            handleSend("", false);
            hasInitialCallBeenMade.current = true;
        }
    }, []);

    useEffect(() => {
        // This will run whenever convoPrompt changes
        setMsgInputValue(convoPrompt);
    }, [convoPrompt]);

    const  openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const inputRef = useRef();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chatHistory, setChatHistory] = useState([{
        "role": "user",
        "content": "I want you to have a casual conversation with me. I am new to Generative AI so please be patient with me and try to use proper grammar, sentence structure, try and be engaging, and also try and roll" +
            " with my conversation wherever it may lead. Assume the role of my partner in conversation and never break character. Avoid referring to yourself as AI but instead as just another being, and try and not to speak in large paragraphs. Please await for my next response which will be" +
            "when we start our conversation."
    }]);

    const hasSentInitialMessage = useRef(false);
    const [msgInputValue, setMsgInputValue] = useState(convoPrompt);

    const handleSend = async (message, showResponse = true) => {

        if (!hasSentInitialMessage.current) {
            hasSentInitialMessage.current = true;
            setMsgInputValue("");
        }

        let updatedChatHistory = [...chatHistory];

        if (showResponse){
            updatedChatHistory = [...updatedChatHistory, { "role": "user", "content": message }];
            setMessages(messages => [...messages,{
                message: message,
                direction: 'outgoing',
                sender: "User",
            }])
        }

        setMsgInputValue("");
        inputRef.current.focus();
        setLoading(true);

        console.log("message = " + message);
        console.log(updatedChatHistory);

        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                // messages: chatHistory,
                messages: updatedChatHistory,
                stream: false,
            });

            let response = completion.choices[0].message
            let response_text = completion.choices[0].message.content;
            console.log("Response:\n" + response_text);

            if (showResponse){
                setMessages( messages => [...messages, {
                    message: response_text,
                    direction: 'incoming',
                    sender: "ChatGPT",
                }])

                setChatHistory(chatHistory => [...updatedChatHistory, response]);

                console.log("in sendChatGPT ");
                console.log(chatHistory);
            }

        } catch (e) {
            console.error("Error Occurred, " + e.toString());
        }

        setLoading(false);

    };


    return(
        <div style={{
            height: "500px"
        }}>
            <ChatContainer>
                <ConversationHeader>
                    <Avatar src={'/display-pic.png'} name="User" />
                    <ConversationHeader.Content userName="ChatGPT" info={convoPrompt} />
                    <ConversationHeader.Actions>
                        <InfoButton />
                    </ConversationHeader.Actions>
                </ConversationHeader>
                <MessageList scrollBehavior="smooth" typingIndicator={loading && <TypingIndicator content="ChatGPT is thinking" />}>
                    {messages.map((m, i) => <Message key={i} model={m} />)}
                </MessageList>
                <MessageInput
                    sendDisabled={false}
                    onSend={(message) => handleSend(message, true)}
                    // onChange={setMsgInputValue}
                    onChange={(newMessage) => setMsgInputValue(newMessage)}
                    value={msgInputValue}
                    // value={convoPrompt}
                    ref={inputRef} />
            </ChatContainer>
        </div>
    );
}

export default ChatWidget;