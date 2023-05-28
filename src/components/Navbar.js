import React from 'react';
import {Card, CardBody, CardHeader, Heading, Button, CardFooter} from "@chakra-ui/react";
import {BsGpuCard, BsFillPersonFill} from "react-icons/bs"
import {FaHome, FaShoppingCart, FaListAlt} from "react-icons/fa"
import {MdSpaceDashboard, MdLogout} from "react-icons/md"
import {useNavigate} from "react-router-dom";

const Navbar = ({role, logout}) => {
    const navigate = useNavigate()
    return (<div className="my-5 ms-5">
        <Card height="95dvh">
            <CardHeader pb="0">
                <BsGpuCard size={45}/>
                <Heading size="lg">
                    GPUverse
                </Heading>
                <hr/>
            </CardHeader>

            <CardBody pt="0">

                <Button
                    leftIcon={<FaHome/>}
                    variant='ghost'
                    onClick={() => navigate('/')}>
                    Home
                </Button>

                {role === "admin" && <Button
                    leftIcon={<MdSpaceDashboard/>}
                    variant='ghost'
                    onClick={() => navigate('/dashboard')}>
                    Dashboard
                </Button>}

                <Button
                    leftIcon={<FaShoppingCart/>}
                    variant='ghost'
                    onClick={() => navigate('/products')}>
                    Products
                </Button>

                {role === "admin"
                    &&
                    <Button
                        leftIcon={<FaListAlt/>}
                        variant='ghost'
                        onClick={() => navigate('/orders')}>
                        Orders
                    </Button>}

                {role === "admin"
                    &&
                    <Button
                        leftIcon={<BsFillPersonFill/>}
                        variant='ghost'
                        onClick={() => navigate('/customers')}>
                        Customers
                    </Button>}
            </CardBody>

            <CardFooter>
                <Button
                    leftIcon={<MdLogout/>}
                    onClick={() => {
                        localStorage.clear()
                        logout(null)
                    }}
                    variant='ghost'>
                    Logout
                </Button>
            </CardFooter>

        </Card>
    </div>);
};

export default Navbar;