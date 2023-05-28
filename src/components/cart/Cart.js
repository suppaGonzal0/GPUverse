import {useEffect} from 'react';
import {
    Button, Card, CardBody, CardHeader, CloseButton,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Heading,
} from "@chakra-ui/react";

import axios from "axios";
import {baseURL} from "../../environments/Environment";

const Cart = ({btnRef, onClose, isOpen, cartItems, setCartItems}) => {

    const getItems = () => {
        axios.get(`${baseURL}/cart`)
            .then(res => {
                    setCartItems(res.data)
                }
            )
    }

    useEffect(() => {
        getItems()
    }, [isOpen])

    const removeItem = ({item}) => {
        axios.delete(`${baseURL}/cart/${item.id}`)
            .then(res => {
                getItems()
                }
            )
    }

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Your Items</DrawerHeader>

                <DrawerBody>
                    {
                        cartItems.map(item => {
                           return (
                               <Card key={item.id} className="mb-3" bg="#EDF2F7">
                                   <CardHeader className="flex items-center justify-between" pb="0">
                                       <Heading size="sm">{item.model}</Heading>
                                       <CloseButton onClick={() => removeItem({item})}/>
                                   </CardHeader>
                                   <CardBody pt="0" className="flex gap-4">
                                       <p>Qty: {item.quantity}</p>
                                       <b>{item.price} BDT</b>
                                   </CardBody>
                               </Card>
                           )
                        })
                    }
                </DrawerBody>

                <DrawerFooter className="flex-col align-center">
                    <Button
                        width="100%">
                        Checkout
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Cart;