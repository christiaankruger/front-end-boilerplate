import { configure } from 'mobx';
import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

configure({ enforceActions: true });

const renderApp = () => render(<App />, document.getElementById('main'));

renderApp();
