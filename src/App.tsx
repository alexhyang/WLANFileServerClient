import React from 'react'
import Nav from 'components/Nav'
import Main from 'components/Main'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Media mediaType="images" />} />
        <Route path="/videos" element={<Media mediaType="videos" />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
