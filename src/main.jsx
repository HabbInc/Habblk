import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
// components/FacebookFeed.js


function FacebookFeed() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="facebook-feed" style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/habbinc"
        data-tabs="timeline"
        data-width="500"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/habbinc"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/habbinc">HABB Pvt Ltd</a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookFeed;
