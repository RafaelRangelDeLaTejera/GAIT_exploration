import React, {useEffect} from 'react';
import GlobalNav from "../components/Global_Nav";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <GlobalNav />
        </div>
    );
}

export default Home;