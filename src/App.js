import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import {ChakraProvider} from '@chakra-ui/react'
import {theme} from "./chakraUI/Theme";

import ProductList from "./products/ProductList";
import Navbar from "./components/Navbar";
import CustomerList from "./customers/CustomerList";
import CustomerDetails from "./customers/CustomerDetails";
import ProductDetails from "./products/ProductDetails";
import Login from "./login&reg/Login";
import Register from "./login&reg/Register";
import {useEffect, useState} from "react";

function App() {

    const [loggedIn, setLoggedIn] = useState(null)

    useEffect(() => {
        setLoggedIn(localStorage.getItem('role'))
    }, [loggedIn])

    return (
        <ChakraProvider theme={theme}>

            <BrowserRouter>
                {
                    loggedIn
                        ?
                        <div className="grid grid-cols-6">
                            <Navbar className="lg:col-span-1" role={loggedIn} logout={setLoggedIn}/>
                            <div className="lg:col-span-5 col-span-6 m-5">
                                <Routes>
                                    <Route path="/" element={<ProductList/>}/>
                                    <Route path="/dashboard" element={<ProductList/>}/>
                                    <Route path="/orders" element={<ProductList/>}/>
                                    <Route path="/customers" element={<CustomerList/>}/>
                                    <Route path="/customer/:id" element={<CustomerDetails/>}/>
                                    <Route path="/products" element={<ProductList />}/>
                                    <Route path="/product/:id" element={<ProductDetails/>}/>
                                    <Route path="*" element={<Navigate to="/" replace />}/>
                                </Routes>
                            </div>
                        </div>
                        :
                        <Routes>
                            <Route path="/login" element={<Login login={setLoggedIn}/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="*" element={<Navigate to="/login" replace />}/>
                        </Routes>
                }


            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
