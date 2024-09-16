import React from 'react';  
import URLItem from './URLItem';  

const URLList = ({ urls }) => {  
  return (  
    <div>  
      {urls.map(({ originalURL, shortenedURL }, index) => (  
        <URLItem  
          key={index}  
          originalURL={originalURL}  
          shortenedURL={shortenedURL}  
        />  
      ))}  
    </div>  
  );  
};  

export default URLList;