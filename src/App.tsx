import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Media, Stories, Favs } from 'pages'

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
