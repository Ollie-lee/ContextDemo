import React, { createContext, Component, useState } from 'react'

export const LanguageContext = createContext()


export function LanguageProvider(props) {
  const [language, setLanguage] = useState('english')

  // changeLanguage = (e) => {
  //   this.setState({ language: e.target.value })
  // }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}

