import React from 'react'
import Nav from 'components/Nav'
import Main from 'components/Main'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <header className="App-header"></header>
      <div className="container">
        <div>First Div</div>
        <div>Second Div</div>
        <div className="player">
          <video controls muted>
            <source
              src="http://localhost:4000/video/test"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  )
}

export default App
