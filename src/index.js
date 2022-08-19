import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Page from './Page';
import * as resume from './resume.json'

library.add(fab, faAt, faPhone)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page {...resume}/>
  </React.StrictMode>
);
