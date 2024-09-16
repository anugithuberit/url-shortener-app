import React from 'react';  
import { Container, Heading } from '@chakra-ui/react';  
import URLForm from './components/URLForm';  
import URLList from './components/URLList';  
import useLocalStorage from './hooks/useLocalStorage';  

const App = () => {  
  const [urls, setUrls] = useLocalStorage('shortenedUrls', []);  

  const addURL = (shortenedURL, originalURL) => {  
    const newURL = { shortenedURL, originalURL };  
    setUrls((prev) => [...prev, newURL]);  
  };  

  return (  
    <Container maxW="container.md" mt={5}>  
      <Heading textAlign="center" mb={5}>URL Shortening App</Heading>  
      <URLForm addURL={addURL} />  
      <URLList urls={urls} />  
    </Container>  
  );  
};  

export default App;