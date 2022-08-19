import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './Page';
import * as resume from './resume.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page {...resume}/>
  </React.StrictMode>
);
