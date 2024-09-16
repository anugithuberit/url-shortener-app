// api.js  
import axios from 'axios';  

export async function shortenURL(longUrl) {  
    const apiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`;  

    try {  
        const response = await axios.get(apiUrl);  
        return response.data.shorturl;
    } catch (error) {  
        console.error('Error while shortening URL:', error);  
        throw new Error('Could not shorten URL');  
    }  
}