import React from 'react'

import DarkTheme, { createTheme } from 'react-dark-theme'
import Landing from './Landing'
import Navbar from './Navbar'


const lightTheme = {
  background: 'white',
  text: 'black',
}

const darkTheme = {
  background: 'black',
  text: 'white',
}

const myTheme = createTheme(darkTheme, lightTheme)

class Theme extends React.Component {
  render() {
    return (
        
      <div style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
        <DarkTheme light={lightTheme} dark={darkTheme} />
        
         
      </div>

    )
  }
}
export default Theme;