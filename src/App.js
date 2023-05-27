import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ChakraProvider} from '@chakra-ui/react'
import {theme} from "./chakraUI/Theme";

import ProductList from "./products/product-list/ProductList";
import Navbar from "./components/navbar/Navbar";

function App() {

    return (
        <ChakraProvider theme={theme}>

                <BrowserRouter>
                    <div className="grid grid-cols-6">
                        <Navbar className="lg:col-span-1"/>
                        <div className="lg:col-span-5 col-span-6">
                            <Routes>
                                <Route path="/" element={<ProductList/>}/>
                                <Route path="/dashboard" element={<ProductList/>}/>
                                <Route path="/products" element={<ProductList/>}/>
                                <Route path="/orders" element={<ProductList/>}/>
                                <Route path="/customers" element={<ProductList/>}/>
                                <Route path= "*" element={<ProductList/>}/>
                            </Routes>
                        </div>
                    </div>

                </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
