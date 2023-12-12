import React, {useEffect} from 'react';
import GlobalNav from "../components/Global_Nav";
import { Link } from "react-router-dom"
import TextGenPage from "./TextGenPage";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <TextGenPage></TextGenPage>
        </div>
    );
}

export default Home;