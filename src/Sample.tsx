import * as React from 'react';
import { Component } from 'react';
import { AppTheme, ThemeContext } from './App';

interface SampleProps {}

interface SampleState {}

class Sample extends React.Component<SampleProps, SampleState> {
  render() {
    return (
      <>
        <h4>Sample Component</h4>
        <hr />
        <AppTheme.Consumer>
          {(theme: ThemeContext) => {
            return (
              <>
                <p>Theme: {theme.light ? 'Light' : 'Dark'}</p>
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    if (theme.setLight) {
                      theme.setLight((t) => !t);
                    }
                  }}
                >
                  Toggle Theme
                </button>
              </>
            );
          }}
        </AppTheme.Consumer>
      </>
    );
  }
}

export default Sample;
