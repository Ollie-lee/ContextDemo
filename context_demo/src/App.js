import React from 'react';
import './App.css';
import Form from './Form'
import PageContent from './PageContent'
import Navbar from './Navbar'
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
