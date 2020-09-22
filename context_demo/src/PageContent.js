import { red } from '@material-ui/core/colors'
import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext)

  const styles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100vh',
    width: '100vw',
    overflow: 'scroll',
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}
