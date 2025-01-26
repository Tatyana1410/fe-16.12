// import { useState } from 'react'
import Header from "./components/Header"
import TextContent from "./components/TextContent"
import Block from "./components/Block"
import TextPictures from "./components/TextPictures"
import Pictures from "./components/Pictures"
import Pricing from "./components/Pricing"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Main from "./components/price/Main"
import Posts from "./components/Posts"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Breaking from "./pages/Breaking"
import Rain from "./pages/Rain"
import MainPage from "./pages/MainPage"
import Squid from "./pages/Squid"
import Life from "./pages/Life"
import Money from "./pages/Money"

function App() {
  

  return (
    <>
    
        {/* <Pricing></Pricing> */}
        {/* <Main></Main> */}
        {/* <Posts title = 'Posts of users'></Posts> */}
        <main>
          <Header></Header>
          <TextContent></TextContent>
          <Block></Block>
          
          <Router>
          {/* <TextPictures></TextPictures> */}
            <Pictures></Pictures>
              <Routes>
                <Route path="/main" element={<MainPage></MainPage>}></Route>
                <Route path="/breaking" element={<Breaking></Breaking>}></Route>
                <Route path="/squid" element={<Squid></Squid>}></Route>
                <Route path="/life" element={<Life></Life>}></Route>
                <Route path="/money" element={<Money></Money>}></Route>
                <Route path="/rain" element={<Rain></Rain>}></Route>
              </Routes>
          </Router>
      
        </main>
        
    </>
  )
}

export default App
