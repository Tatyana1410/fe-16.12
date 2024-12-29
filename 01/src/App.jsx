// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header"
import TextContent from "./components/TextContent"
import Block from "./components/Block"
import TextPictures from "./components/TextPictures"
import Pictures from "./components/Pictures"
import Pricing from "./components/Pricing"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


function App() {
  

  return (
    <>
    <Pricing></Pricing>
    <main>
    <Header></Header>
    <TextContent></TextContent>
    <Block></Block>
    <TextPictures></TextPictures>
    <Pictures></Pictures>
    </main>
    
      
    </>
  )
}

export default App
