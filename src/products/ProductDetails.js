import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {baseURL} from "../environments/Environment";
import {Card, Heading} from "@chakra-ui/react";
import {BsGpuCard} from "react-icons/bs";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/products/${id}`)
            .then(res => {
                    setProduct(res.data)

                }
            )
    }, [id])

    return (
        <div className="patternBG flex items-center justify-center">
            <Card width="800px" p="10">
                <div className="flex justify-around">
                    <div>
                        <BsGpuCard size={200}/>
                    </div>
                    <div>
                        <Heading size="lg">{product.model}</Heading>
                        <p>Brand: {product.brand}</p>
                        <p>Chipset: {product.chipset}</p>
                        <p>Memory: {product.memory}</p>
                        <p>CUDA Cores: {product.cuda}</p>
                        <Heading my="5">
                            {product.price} BDT
                        </Heading>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductDetails;