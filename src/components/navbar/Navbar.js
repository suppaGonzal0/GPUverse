import React from 'react';
import {Card, CardBody, CardHeader, Heading, Button, CardFooter} from "@chakra-ui/react";
import {BsGpuCard, BsFillPersonFill} from "react-icons/bs"
import {FaHome, FaShoppingCart, FaListAlt} from "react-icons/fa"
import {MdSpaceDashboard, MdLogout} from "react-icons/md"
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="me-5">
            <Card height="95vh">
                <CardHeader  pb="0">
                    <BsGpuCard size={45}/>
                    <Heading size="lg">
                        GPUverse
                    </Heading>
                    <hr/>
                </CardHeader>

                <CardBody  pt="0">

                    <Button
                        leftIcon={<FaHome />}
                        variant='ghost'
                        onClick={() => navigate('/')}>
                        Home
                    </Button>

                    <Button
                        leftIcon={<MdSpaceDashboard />}
                        variant='ghost'
                        onClick={() => navigate('/dashboard')}>
                        Dashboard
                    </Button>

                    <Button
                        leftIcon={<FaShoppingCart />}
                        variant='ghost'
                        onClick={() => navigate('/products')}>
                        Products
                    </Button>

                    <Button
                        leftIcon={<FaListAlt />}
                        variant='ghost'
                        onClick={() => navigate('/orders')}>
                        Orders
                    </Button>

                    <Button
                        leftIcon={<BsFillPersonFill />}
                        variant='ghost'
                        onClick={() => navigate('/customers')}>
                        Customers
                    </Button>
                </CardBody>

                <CardFooter>
                    <Button
                        leftIcon={<MdLogout/>}
                        variant='ghost'>
                        Logout
                    </Button>
                </CardFooter>

            </Card>
        </div>
    );
};

export default Navbar;