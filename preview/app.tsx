import React from 'react'
import {createRoot} from 'react-dom/client'
import Library from "./components/Library"
import {BrowserRouter} from "react-router-dom";

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Library />
  </BrowserRouter>
)