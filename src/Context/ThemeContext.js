import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

const Provider = ThemeContext.Provider;

const ThemeConsumer = ThemeContext.Consumer;

export const withTheme = (Comp) => {
  return class WithTheme extends Component {
    
    render() {
      return (
        <ThemeConsumer>
          { 
            ({theme, changeTheme}) => <Comp {...this.props} theme={theme} changeTheme={changeTheme} />
          }
        </ThemeConsumer>
      )
        
    }
  }
}

export default class ThemeProvider extends Component {
  state = {
    theme: 'dark'
  }

  handleTheme = () => {
    const { theme } = this.state
    this.setState({
      theme: (theme === 'dark') ? 'light' : 'dark',
    })
  }

  render() {
    const { theme } = this.state
    const { children } = this.props;
    return (
      <Provider value={{
        theme,
        changeTheme: this.handleTheme
      }}>
        {children}
      </Provider>
    )
  }
}