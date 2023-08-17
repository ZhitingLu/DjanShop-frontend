import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import Routes from './MyRoutes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Routes />);
