import React from 'react';
import { render } from 'react-dom';

import style from './styles.css';

const App = () =>
  <div className={style.blueText}>
    Hello world!
  </div>;

render(
  <App />,
  document.getElementById('root')
);
