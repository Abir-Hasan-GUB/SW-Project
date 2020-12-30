import React from 'react';
import './LoadingText.css';

const LoadingText = () => {
    return (
       <div className="container px-0">
            <div class="loadingBody">
            <h1 class="loading" data-text="Loading...">Loading...</h1>
        </div>
       </div>
    );
};

export default LoadingText;