import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home/'
import Faq from './pages/FAQ/'
import Error from './components/Error/'
import Sign from './pages/Signin/'
import Login from './pages/Login/'
import Wait from './pages/Wait/'
import Room from './pages/Room/'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Fira Sans', 'Poppins', 'Oxygen', 'Cantarell', sans-serif; 
    font-size: 1rem;
    font-weight: 600;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
//! Don't forget to reactivate React.StrictMode
root.render(
  <React.Fragment>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/waiting" element={<Wait />} />
        <Route path="/call-room" element={<Room />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.Fragment>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
