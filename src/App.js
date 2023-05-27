import './App.css';

import { ChakraProvider } from '@chakra-ui/react'

import ProductList from "./products/product-list/ProductList";

function App() {

    return (
        <ChakraProvider>
            <div className="App">
                <ProductList/>
            </div>
        </ChakraProvider>
    );
}

export default App;
