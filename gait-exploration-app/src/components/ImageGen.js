import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import OpenAI from "openai";
import Col from "react-bootstrap/Col";
import '../css/ImageGen.css';

const ImageGen = () => {

    const  openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const generateImage = async () => {
        try {
            setIsLoading(true);
            const response = await openai.images.generate({
                prompt: prompt,
            });


            const generatedImageUrl = response.data[0].url;
            setImageUrl(generatedImageUrl);
            console.log(response);
            setIsLoading(false)
        } catch (error) {
            console.error('Error generating image:', error);
            // Handle error, show a message to the user, etc.
        }
    };

    return (
        <div>
            <Col md={12} className="CostumCol">
                <Form style={{ width: '50%', padding: '20px'  }}>
                    <Form.Group controlId="formPrompt" style={{ marginBottom: '10px' }}>
                        <Form.Label className="text-image-gen">Enter a prompt:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g., dog jumping over a cat"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="image-gen-text-field"
                        />
                    </Form.Group>
                    <Button className="image-gen-button" onClick={generateImage}>
                        Generate Image
                    </Button>
                </Form>
            </Col>

            <Col md={12} className="image-column">
                {isLoading ? (
                    <p style={{textAlign:"center",fontWeight:"800",fontSize:"30px",color:"beige",marginBottom:"2vh",marginTop:"12vh"}}>Loading...</p>
                ) : (imageUrl && (
                    <div >
                        <Image src={imageUrl} alt="Generated Image" fluid style={{ maxWidth: '400px', height: 'auto', alignContent: 'center' }}/>
                    </div>
                ))}
            </Col>



        </div>
    );
};

export default ImageGen;