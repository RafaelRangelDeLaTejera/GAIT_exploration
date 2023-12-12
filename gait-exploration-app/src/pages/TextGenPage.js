

import React, {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom"
import GlobalNav from "../components/Global_Nav";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import TextGenHero from "../components/TextGenHero";
import ChatPromptSection from "../components/ChatPromptSection 1";
import OpenAI from "openai";


const TextGenPage = ({openAIObj}) => {


    const promptGenerated = useRef(false)
    const  openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });



    useEffect(() => {
        window.scrollTo(0, 0);

        if (!promptGenerated.current) {
            fetchChatGPTStarterPrompt();
            console.log("Calling fetchChatGPTPrompts")
        }

        return () => fetchChatGPTStarterPrompt().current = true;
    }, []);

    const [prompts, setPrompts] = useState(["", "", ""]);
    // const [openAIObj, setOpenAIObj] = useState(null);
    const [promptsloading, setPromptsloading] = useState('')


    const fetchChatGPTStarterPrompt = async () => {

        setPromptsloading(true); //TODO: make chatGPT loading wheel
        const output = ["", "", ""];

        for (let i = 0; i<3; i++){
            let prompt = "";
            try{
                const stream = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [{
                        "role": "user",
                        "content": 'Generate a single, clear sample prompt for a beginner to initiate a conversation with ChatGPT. This prompt should only be one sentence long and should be either creative, interesting, or about mind boggling topics. Provide only the prompt text without any additional explanation, filler words, or acknowledgements, and make sure to use proper grammar and punctuation.'
                    }],
                    stream: true,
                });

                for await(const chunk of stream){
                    if(chunk.choices && chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content) {
                        prompt += chunk.choices[0].delta.content;
                        console.log('Prompt ' + i + ': ' + prompt);
                        // setPrompt(prev => prev + chunk.choices[0].delta.content);
                        // console.log("for loop" + i.toString() + output[i]);
                        // console.log("for loop" + i.toString() + chunk.choices[0].delta.content);
                    }
                }
                output[i] = prompt;
                // output[i] = 'blah'
            }
            catch (e){
                console.error("Error Occurred, " + e.toString());
                // console.log(typeof(openAIObj));
            }
        }
        setPromptsloading(false);
        setPrompts(output);
    }


    return (
        <div >
            <GlobalNav />
            <TextGenHero />
            <ChatPromptSection prompts={prompts} loading={promptsloading}/>
        </div>
    );
}

export default TextGenPage;