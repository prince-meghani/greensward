// src/App.jsx
import React from 'react'
import Navbar from './component/nevbar'
import Footer from './component/footer'
import Home from './component/home'

function App() {
  return (
    <>
      <Navbar />
      <main className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
        <Home />
      </main>
      <Footer />
    </>
  )
}
export default App
