import React, {useEffect} from 'react';
import { Link } from "react-router-dom"
import GlobalNav from "../components/Global_Nav";


const VideoGenPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            <h1>Video Generation</h1>
        </div>
    );
}

export default VideoGenPage;