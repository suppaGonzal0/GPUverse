import React from 'react';
import {Button, Heading} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="patternBG">
            <div className="h-full flex flex-col items-center justify-center gap-4">
                <Heading size="xl">
                    Welcome to GPUverse
                </Heading>
                <Heading size="lg" className="text-center">
                    Explore our extensive collection of GPUs from leading brands,
                    <br/>
                    ensuring you find the perfect match for your requirements
                </Heading>
                <div className="text-center m-8">
                    <Button
                        onClick={() => navigate("/products")}
                        bg="#1A202C"
                        color="white"
                        _hover="color: 'white">
                        Start Journey
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;