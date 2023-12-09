// import React, {useEffect, useRef, useState} from 'react';
// import { Link } from "react-router-dom"
// import OpenAI from 'openai';
// require('dotenv').config()
//
//
// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//     MainContainer,
//     ChatContainer,
//     ConversationHeader,
//     Avatar,
//     InfoButton,
//     TypingIndicator,
//     MessageList,
//     Message,
//     MessageInput,
// } from "@chatscope/chat-ui-kit-react";
//
//
// const ChatWidget= () => {
//
//     const openai = new OpenAI({
//         apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     });
//
//
//     const [prompt, setPrompt] = useState('');
//     const [apiResponse, setApiResponse] = useState('');
//     const [loading, setLoading] = useState('');
//
//
//     const inputRef = useRef();
//     const [msgInputValue, setMsgInputValue] = useState("");
//     const [messages, setMessages] = useState([]);
//
//
//
//     const handleSend = message => {
//         setMessages([...messages, {
//             message,
//             direction: 'outgoing'
//         }]);
//         setMsgInputValue("");
//         inputRef.current.focus();
//
//         // TODO: send message to ChatGPT + call handleReturn (find a way to not freeze the screen)
//
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true); //TODO: make chatGPT loading wheel
//
//         try{
//             const stream = await openai.chat.completions.create({
//                 model: "gpt-3.5-turbo",
//                 messages: [{"role": "user", "content": "Assume that I have never used chatgpt and give me a singular random sample prompt to start a conversation with ChatGPT. Only return the prompt with no other filler word, text, acklnowledgements, etc. I only want the prompt"}],
//                 stream: true,
//                 n: 3,
//             });
//             for await(const chunk of stream){
//                 process.stdout.write(chunk.choices[0]?.delta?.content || "");
//                 process.stdout.write(chunk.choices[1]?.delta?.content || "");
//                 process.stdout.write(chunk.choices[2]?.delta?.content || "");
//             }
//
//         }
//         catch (e){
//             process.stdout.write(e.toString() + 'Error Occurred and Catch');
//         }
//         setLoading(false);
//
//     }
//
//     // TODO: Once the ChatGPT response is pulled from Open AI call this function
//     // const handleReturn = message => {
//     //
//     // };
//
//     return(
//         <div style={{
//             height: "500px"
//         }}>
//             <ChatContainer>
//                 <ConversationHeader>
//                     <Avatar src={'/display-pic.png'} name="User" />
//                     <ConversationHeader.Content userName="ChatGPT" info="Active" />
//                     <ConversationHeader.Actions>
//                         <InfoButton />
//                     </ConversationHeader.Actions>
//                 </ConversationHeader>
//                 <MessageList scrollBehavior="smooth" typingIndicator={<TypingIndicator content="ChatGPT is thinking" />}>
//                     {messages.map((m, i) => <Message key={i} model={m} />)}
//                 </MessageList>
//                 <MessageInput placeholder="Type message here" onSend={handleSend} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} />
//             </ChatContainer>
//         </div>
//     );
// }
//
// export default ChatWidget;