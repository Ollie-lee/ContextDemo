import React, { Component, createContext } from 'react'

//create context
export const ThemeContext = createContext()

//class name does not matter
export class ThemeProvider extends Component {
  state = { isDarkMode: false }

  toggleTheme = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    })
  }

  render() {
    return (
      //grab Provider of the context
      // here, we pass an object into the value
      <ThemeContext.Provider value={{
        ...this.state,
        toggleTheme: this.toggleTheme
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}