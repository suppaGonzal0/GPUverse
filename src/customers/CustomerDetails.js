import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {baseURL} from "../environments/Environment";
import {Card, Heading} from "@chakra-ui/react";
import {MdEmail} from "react-icons/md";
import {BsTelephoneFill, BsPersonCircle} from "react-icons/bs";
import "./Customer.css"
const CustomerDetails = () => {
    const {id} = useParams();
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/customers/${id}`)
            .then(res => {
                    setCustomer(res.data)
                }
            )
    }, [id])

    return (
        <div className="customerProfileBG flex items-center justify-center">
            <Card width="400px" p="10" className="flex-col items-center gap-2">
                <BsPersonCircle size={100}/>
                <Heading size="lg">{customer.name}</Heading>
                <Heading className="flex items-center gap-1">
                    <BsTelephoneFill/> {customer.phone}
                </Heading>
                <Heading className="flex items-center gap-1">
                    <MdEmail/> {customer.email}
                </Heading>
            </Card>
        </div>
    );
};

export default CustomerDetails;