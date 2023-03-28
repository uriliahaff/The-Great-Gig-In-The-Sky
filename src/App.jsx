import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { Routes, Route, Navigate } from 'react-router-dom'

import { ChakraProvider } from "@chakra-ui/react";
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';

function App() {



  return (

    <ChakraProvider>
        <div>
          <Navbar logo="https://www.linkpicture.com/q/logo_744.png"/>
        </div>

    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/items" element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/items/:id' element={<ItemDetails/>}/>
        <Route path='/404' element={<h2>Error 404: Not founrd!</h2>}/>
    </Routes>


    </ChakraProvider>
  )
}

export default App
