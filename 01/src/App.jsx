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
import Main from "./components/price/Main"

function App() {
  

  return (
    <>
    {/* <Pricing></Pricing> */}
    <Main></Main>
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
