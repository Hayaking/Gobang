import React, {PropTypes, Component} from 'react' ;
import {render} from 'react-dom';

import './style.css';
import Game from './components/NewGame';

const container = document.getElementById('react-app');
render(<Game col={17} row={17}/>, container);

