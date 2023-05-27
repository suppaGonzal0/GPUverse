import {baseURL} from "../../environments/Environment";

import './ProductList.css';

import {useEffect, useState} from "react";
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
    Menu,
    MenuButton,
    MenuList,
    MenuItem, InputGroup, InputLeftElement, Input,
} from '@chakra-ui/react'

import {FaShoppingCart, FaSort, FaSearch} from 'react-icons/fa'

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/products`)
            .then(res => {
                    setProducts(res.data)
                }
            )
    }, [])

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

                <CardFooter display='flex' flexDirection='column'>
                    <hr/>
                    <Heading align="center" mb="16px">
                        {product.price} BDT
                    </Heading>
                    <Button leftIcon={<FaShoppingCart/>}>
                        Add to cart
                    </Button>
                </CardFooter>

            </Card>
        )
    })

    const menu =
        <Menu>
            <MenuButton as={Button}
                        bg="white"
                        leftIcon={<FaSort/>}>
                Sort
            </MenuButton>
            <MenuList>
                <MenuItem>Default</MenuItem>
                <MenuItem>Price (Low to High)</MenuItem>
                <MenuItem>Price (High to Low)</MenuItem>
            </MenuList>
        </Menu>

    const searchBar =
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <FaSearch/>
            </InputLeftElement>
            <Input
                minWidth="200px"
                width="300px"
                bg="white"
                variant="filled"
                type="text"
                placeholder="Search....."/>
        </InputGroup>


    return (
        <>
        {menu}
        {searchBar}
    <SimpleGrid spacing={4}
                templateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
        {productCards}
    </SimpleGrid>
</>
)
    ;
};

export default ProductList;