import React, { Component, createContext } from 'react'

//create context
export const ThemeContext = createContext()

//class name does not matter
export class ThemeProvider extends Component {
  state = { isDarkMode: true }
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