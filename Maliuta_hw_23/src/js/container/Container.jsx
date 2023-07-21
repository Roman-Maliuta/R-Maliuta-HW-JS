import React from 'react';

import {Header, Main, Aside} from '../components/index.js';

export const Container = () => {
    return (
        <div>
          <Header/>
          <div className="container">
             <Aside/>
             <Main/>
          </div>
        </div>
    );
};