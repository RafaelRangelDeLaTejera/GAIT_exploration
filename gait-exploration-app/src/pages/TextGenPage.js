import React, {useEffect} from 'react';
import { Link } from "react-router-dom"
import GlobalNav from "../components/Global_Nav";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import TextGenHero from "../components/TextGenHero";
import ChatPromptSection from "../components/ChatPromptSection";



const TextGenPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            <TextGenHero />
            <ChatPromptSection />



            {/*<AnimatedTextGenHero />*/}
            <ChatWidget />
        </div>
    );
}

export default TextGenPage;