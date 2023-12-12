import React, {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom"
import GlobalNav from "../components/Global_Nav";
import OpenAI from "openai";
import ImageGen from "../components/ImageGen";
import ImageGenHeroSection from "../components/ImageGenHeroSection";

const ImageGenPage = () => {

    const [prompts, setPrompts] = useState(["", "", ""]);
    // const [openAIObj, setOpenAIObj] = useState(null);
    const [promptsloading, setPromptsloading] = useState('')

    const promptGenerated = useRef(false)
    const  openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            <ImageGenHeroSection />
            <ImageGen />
        </div>
    );
}

export default ImageGenPage;