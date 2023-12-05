import React, {useEffect} from 'react';
import GlobalNav from "../components/Global_Nav";
import { Link } from "react-router-dom"


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
            <h1>HomePage</h1>
        </div>
    );
}

export default Home;