import React, { createContext, Component } from 'react'

export const LanguageContext = createContext()


export class LanguageProvider extends Component {
  state = { language: 'english' }

  changeLanguage = (e) => {
    this.setState({ language: e.target.value })
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          ...this.state,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
