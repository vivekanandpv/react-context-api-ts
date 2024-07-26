import * as React from 'react';
import { AppTheme } from './App';

const Child = () => {
  const theme = React.useContext(AppTheme);

  const toggle = () => {
    if (theme.setLight) {
      theme.setLight((t) => !t);
    }
  };

  return (
    <>
      <h4>Child Component</h4>
      <p>Theme: {theme.light ? 'Light' : 'Dark'}</p>
      <button className='btn btn-primary' onClick={toggle}>
        Toggle Theme
      </button>
    </>
  );
};

export default Child;
