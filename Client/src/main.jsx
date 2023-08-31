import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { render } from "react-dom";
import { Provider } from 'jotai'

const root = createRoot(document.getElementById("root"))

root.render(
    <Provider>
        <App />
    </Provider>
)
// document.getElementById("root"));
