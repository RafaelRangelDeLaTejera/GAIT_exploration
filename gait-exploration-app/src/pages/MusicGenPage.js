import React, {useEffect} from 'react';
import { Link } from "react-router-dom"
import GlobalNav from "../components/Global_Nav";
import MusicGen from "../components/MusicGen";

const MusicGenPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            <h1>Music Generation</h1>
            <MusicGen/>

        </div>
    );
}

export default MusicGenPage;