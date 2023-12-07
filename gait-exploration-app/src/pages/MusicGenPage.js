import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalNav from '../components/Global_Nav';

const PageContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    /* Add more styles as needed */
`;

const MusicGenPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageContainer>
            <GlobalNav />
            <h1>Music Generation</h1>
            <p>
                Music generation allows you to create music using algorithms and AI. Explore the possibilities of creating unique compositions effortlessly!
            </p>
            <section>
                <h2>Try it Yourself</h2>
                <p>Follow the steps below to create your own music:</p>
                <ol>
                    <li>Step 1: Choose a musical style or genre.</li>
                    <li>Step 2: Set the tempo and mood for your composition.</li>
                    <li>Step 3: Adjust instrument preferences and parameters.</li>
                    <li>Step 4: Click the "Generate" button to create your music.</li>
                </ol>
                <div>
                    {/* Placeholder for the music generation widget */}
                    {/* Replace this with the actual implementation or library */}
                    <div>
                        {/* This could be a custom component or an embedded widget */}
                        {/* Example: <MusicGenerationWidget /> */}
                        <p>Music Generation Widget Goes Here</p>
                    </div>
                </div>
            </section>
            <p>
                For more information, check out the <Link to="/documentation">documentation</Link>.
            </p>
            {/* Add more content as needed */}
        </PageContainer>
    );
};

export default MusicGenPage;
