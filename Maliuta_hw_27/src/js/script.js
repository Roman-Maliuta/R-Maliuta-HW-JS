import React, {Component, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.jsx';
import { HashRouter } from "react-router-dom";
import '../styles/style.scss';

const root = createRoot(document.getElementById('app'));
root.render(
       <HashRouter>
              <App/>
       </HashRouter>
);

