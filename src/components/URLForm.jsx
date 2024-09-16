import React, { useState } from 'react';  
import { Button, Input, FormControl, FormLabel, Alert } from '@chakra-ui/react';  
import { shortenURL } from '../api'; // Import your API function  

const URLForm = ({ addURL }) => {  
    const [longUrl, setLongUrl] = useState('');  
    const [shortenedUrl, setShortenedUrl] = useState('');  
    const [error, setError] = useState('');  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        setError('');  
        setShortenedUrl('');  

        try {  
            const shortUrl = await shortenURL(longUrl); // Use the correct function name  
            setShortenedUrl(shortUrl);  
            addURL(shortUrl); // Optionally add the short URL to parent state if needed  
        } catch (err) {  
            setError(err.message);  
        }  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <FormControl>  
                <FormLabel>Enter URL</FormLabel>  
                <Input  
                    type="url"  
                    value={longUrl}  
                    onChange={(e) => setLongUrl(e.target.value)} // Corrected to setLongUrl  
                    placeholder="https://example.com"  
                    required // Optional: makes the field mandatory  
                />  
                {error && <Alert status="error" mt={2}>{error}</Alert>}  
                {shortenedUrl && ( // Optionally display the shortened URL  
                    <Alert status="success" mt={2}>  
                        Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>  
                    </Alert>  
                )}  
            </FormControl>  
            <Button mt={4} colorScheme="teal" type="submit">  
                Shorten URL  
            </Button>  
        </form>  
    );  
};  

export default URLForm;