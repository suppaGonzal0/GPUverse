import {baseURL} from "../environments/Environment";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Button,
    Heading,
    useDisclosure
} from '@chakra-ui/react'

import {FaShoppingCart} from 'react-icons/fa'
import Sort from "../components/sort";
import Search from "../components/search";
import Cart from "../components/Cart";

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    const sort = {
        options: [
            {key: "Default", value: "/products"},
            {key: "Price (Low to High)", value: "/products?_sort=price&_order=asc"},
            {key: "Price (High to Low)", value: "/products?_sort=price&_order=desc"}
        ],
        title: "Sort by price",
    }

    const productCards = products.map(product => {
        return (
            <Card key={product.id}>

                <CardHeader cursor="pointer"
                            onClick={() => navigate(`/products/${product.id}`)}>
                    <Heading>{product.brand} {product.chipset} {product.model}</Heading>
                </CardHeader>

                <CardBody paddingY="0">
                    <li>Fans: {product.fans}</li>
                    <li>Memory: {product.memory}</li>
                    <li>CUDA Cores: {product.cuda}</li>
                </CardBody>

                <CardFooter className="flex-col">
                    <hr/>
                    <Heading className="text-center mb-3">
                        {product.price} BDT
                    </Heading>
                    <Button
                        onClick={() => addToCart({product})}
                        leftIcon={<FaShoppingCart/>}>
                        Add to cart
                    </Button>
                </CardFooter>

            </Card>
        )
    })

    useEffect(() => {
        axios.get(`${baseURL}/products`)
            .then(res => {
                    setProducts(res.data)
                }
            )
    }, [])

    const addToCart = (item) => {
        const currQty = cartItems.filter(c => c.id === item.product.id).length
        if ((currQty > 0)) {
            console.log(item.product.quantity)
            axios.put(`${baseURL}/cart/${item.product.id}`,
                {...item.product, quantity: currQty+1})
                .then(res => {
                        console.log(res)
                    }
                )
        } else {
            axios.post(`${baseURL}/cart`, {...item.product, quantity: 1})
                .then(res => {
                        console.log(res)
                    }
                )
        }
    }


    return (
        <>
            <div className="flex justify-between mb-5">
                <Heading size="lg">Products</Heading>
                <div className="flex gap-3">
                    <Sort sortVal={sort} setRes={setProducts}/>
                    <Search searchURL="/products" setRes={setProducts}/>
                </div>
            </div>
            <SimpleGrid spacing={4}
                        templateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
                {productCards}
            </SimpleGrid>

            <div className="text-center mt-8">
                <Button p="25px" className="gap-2" bg="#1A202C" color="white"
                        minWidth="300px" variant="outlined" ref={btnRef} onClick={onOpen}>
                    <FaShoppingCart/> View Cart
                </Button>
            </div>

            <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                isOpen={isOpen}
                onClose={onClose}
                btnRef={btnRef}/>
        </>
    )
        ;
};

export default ProductList;