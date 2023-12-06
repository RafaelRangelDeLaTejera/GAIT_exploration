import React, {useEffect, useRef, useState} from 'react';


import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    ConversationHeader,
    Avatar,
    MessageInput,
    MessageList,
} from "@chatscope/chat-ui-kit-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '/Users/anshulgowda/Documents/CODE/GAIT_exploration/gait-exploration-app/src/css/ChatWidgetSkeleton.css'

const ChatWidgetSkeleton = () => {


    return(
        <div style={{
            height: "500px"
        }}>
            <Row style={{justifyContent:'center'}}>
                <Col xs={12} className={'textgen-prompt-header-col'}>
                    <ConversationHeader style={{
                        borderRadius:'15px',
                    }}>
                        <Avatar src={'/display-pic.png'} name="Chat GPT" status="available"/>
                        <ConversationHeader.Content style={{maxWidth:'inherit', overflowWrap: 'break-word'}} userName="{Chat GPThkjhkl Conversation Description}" info="Active" />
                        <ConversationHeader.Actions>
                            {/*<InfoButton />*/}
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                </Col>
                <Col xs={12}>
                    <MessageInput style={{
                        width: 'fit-content',
                        height: '20vh',
                        paddingTop: '2vh',
                        paddingBlock: '2vh',
                        paddingLeft: '2vh',
                        borderRadius: '15px',
                        marginTop: '2vh'
                    }} attachButton={false} placeholder="{Chat GPT Generated text}" value={"CHAT GPT GENERATED STUFF"}/>
                </Col>

            </Row>
            {/*<ChatContainer>*/}
            {/*    <ConversationHeader>*/}
            {/*        <Avatar src={'/display-pic.png'} name="Chat GPT" status="available"/>*/}
            {/*        <ConversationHeader.Content userName="{Chat GPT Conversation Description}" info="Active" />*/}
            {/*        <ConversationHeader.Actions>*/}
            {/*            /!*<InfoButton />*!/*/}
            {/*        </ConversationHeader.Actions>*/}
            {/*    </ConversationHeader>*/}
            {/*    <br style={{backgroundColor: "white"}}/>*/}
            {/*    <MessageInput attachButton={false} placeholder="{Chat GPT Generated text}" />*/}
            {/*</ChatContainer>*/}
        </div>
    );
}

export default ChatWidgetSkeleton;