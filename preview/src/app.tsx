import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Preview from "./components/Preview"

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Preview />}/>
      <Route path="/:page" element={<Preview />}/>
    </Routes>
  </BrowserRouter>
)