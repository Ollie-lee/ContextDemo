import { red } from '@material-ui/core/colors'
import React from 'react'

export default function PageContent(props) {
  const styles = {
    backgroundColor: 'red',
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
