import { configure } from 'mobx';
import { render } from 'react-dom';
import React from 'react';
import { App } from './App';

configure({ enforceActions: true });

const renderApp = () => render(<App />, document.getElementById('main'));

renderApp();
