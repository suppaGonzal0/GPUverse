import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ChakraProvider} from '@chakra-ui/react'
import {theme} from "./chakraUI/Theme";

import ProductList from "./products/ProductList";
import Navbar from "./components/Navbar";
import CustomerList from "./customers/CustomerList";
import CustomerDetails from "./customers/CustomerDetails";

function App() {

    return (
        <ChakraProvider theme={theme}>

                <BrowserRouter>
                    <div className="grid grid-cols-6">
                        <Navbar className="lg:col-span-1"/>
                        <div className="lg:col-span-5 col-span-6 m-5">
                            <Routes>
                                <Route path="/" element={<ProductList/>}/>
                                <Route path="/dashboard" element={<ProductList/>}/>
                                <Route path="/products" element={<ProductList/>}/>
                                <Route path="/orders" element={<ProductList/>}/>
                                <Route path="/customers" element={<CustomerList/>}/>
                                <Route path="/customer/:id" element={<CustomerDetails/>}/>
                                <Route path= "*" element={<ProductList/>}/>
                            </Routes>
                        </div>
                    </div>

                </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
