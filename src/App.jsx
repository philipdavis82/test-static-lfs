import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pieImg from './assets/pie.jpg'
import './App.css'
import { Button } from "@/components/ui/button"
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
// import.meta.env.BASE_URL;

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"+import.meta.env.BASE_URL}  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
