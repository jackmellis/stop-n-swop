import { createElement } from 'react';
import { render } from 'react-dom';
import jpex from 'jpex';
import './index.css';
import App from './ui/app/App';

jpex.constant<Window>(window);

const node = document.getElementById('root');
render(createElement(App), node);
