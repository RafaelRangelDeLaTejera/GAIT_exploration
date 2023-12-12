import React, { useState } from 'react';
import axios from 'axios';

const MusicGen = () => {
    const [textInput, setTextInput] = useState('');
    const [musicPath, setMusicPath] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/generate-music', { text: textInput });
            setMusicPath(`http://localhost:3001/generated-music/${response.data.filename}`);
        } catch (error) {
            console.error('Error sending text to server:', error);
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Enter text"
                />
                <button type="submit">Generate Music</button>
            </form>
            {musicPath && (
                <div>
                    <audio controls src={musicPath}>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default MusicGen;
