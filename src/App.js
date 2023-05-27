import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ChakraProvider} from '@chakra-ui/react'
import {theme} from "./chakraUI/Theme";

import ProductList from "./products/product-list/ProductList";

function App() {

    return (
        <ChakraProvider theme={theme}>

            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/products" element={<ProductList/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
