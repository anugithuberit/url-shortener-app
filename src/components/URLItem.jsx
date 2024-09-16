import React from 'react';  
import { Box, Text, Button, Link, Flex } from '@chakra-ui/react';  

const URLItem = ({ originalURL, shortenedURL }) => {  
  const copyToClipboard = () => {  
    navigator.clipboard.writeText(shortenedURL);  
    alert('Copied to clipboard!');  
  };  

  return (  
    <Flex justifyContent='space-between' p={4} borderWidth="1px" borderRadius="md" mb={2}>  
      <Link href={`https://${shortenedURL}`} target="_blank" color="teal.500">  
        {shortenedURL}  
      </Link>  
      <Button mt={2} onClick={copyToClipboard} colorScheme="teal" size="sm">  
        Copy  
      </Button>  
    </Flex>  
  );  
};  

export default URLItem;