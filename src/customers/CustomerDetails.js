import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {baseURL} from "../environments/Environment";
import {Heading} from "@chakra-ui/react";
import {MdEmail, MdNumbers} from "react-icons/md";
import {BsTelephoneFill} from "react-icons/bs";

const CustomerDetails = () => {
    const {id} = useParams();
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/customers/${id}`)
            .then(res => {
                    setCustomer(res.data)
                    console.log(res.data)
                }
            )
    }, [id])

    return (
        <>
            <Heading size="lg">{customer.name}</Heading>
            <Heading className="flex items-center gap-1">
                <MdNumbers/> {customer.id}
            </Heading>
            <Heading className="flex items-center gap-1">
                <BsTelephoneFill/> {customer.phone}
            </Heading>
            <Heading className="flex items-center gap-1">
                <MdEmail/> {customer.email}
            </Heading>
        </>
    );
};

export default CustomerDetails;