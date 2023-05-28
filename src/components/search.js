import React from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {FaSearch} from "react-icons/fa";
import axios from "axios";
import {baseURL} from "../environments/Environment";

const Search = ({searchURL, setRes}) => {

    const searcHandler = (e) => {
        axios.get(`${baseURL}${searchURL}?q=${e.target.value}`)
            .then(res => {
                setRes(res.data)
                }
            )
    }

    return (
        <div>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <FaSearch/>
                </InputLeftElement>
                <Input
                    onChange={searcHandler}
                    minWidth="200px"
                    width="300px"
                    bg="white"
                    variant="outlined"
                    type="text"
                    placeholder="Search....."/>
            </InputGroup>
        </div>
    );
};

export default Search;