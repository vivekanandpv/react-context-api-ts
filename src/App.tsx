import * as React from 'react';
import Parent from './Parent';
import Sample from './Sample';

export interface ThemeContext {
  light?: boolean;
  setLight?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppTheme = React.createContext<ThemeContext>({});

export const ThemeProvider = AppTheme.Provider;

const App = () => {
  const [light, setLight] = React.useState(true);

  return (
    <>
      <div className='p-5'>
        <h2>React State Management</h2>
        <hr />
        <ThemeProvider value={{ light, setLight }}>
          <Parent />
          <hr />
          <Sample />
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
