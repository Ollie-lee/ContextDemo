import React, { Component, createContext } from 'react'

//create context
export const ThemeContext = createContext()

//class name does not matter
export class ThemeProvider extends Component {
  state = { isDarkMode: true }

  toggleTheme = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
      toggleTheme: this.toggleTheme
    })
  }

  render() {
    return (
      //grab Provider of the context
      // here, we pass an object into the value
      <ThemeContext.Provider value={{
        ...this.state,
        firstContext: true
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}