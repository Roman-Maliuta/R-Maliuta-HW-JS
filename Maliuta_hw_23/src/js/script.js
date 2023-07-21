import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/style.scss';

import { Container } from './container/Container.jsx';

const App = () => {
    return (
        <Container/>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(App());

