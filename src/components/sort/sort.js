import {Button, Menu, MenuButton, MenuItem, MenuList, Select} from "@chakra-ui/react";
import {FaSort} from "react-icons/fa";
import axios from "axios";
import {baseURL} from "../../environments/Environment";

const Sort = ({sortVal, setRes}) => {

    const sortHandler = (sortURL) => {
        axios.get(baseURL + sortURL)
            .then(res => {
                    setRes(res.data)
                }
            )
    }

    return (
        // <Select
        //     bg="white"
        //     minWidth="100px">
        //     {sortVal.options.map(option => {
        //         return (
        //             <option
        //                 key={option.key}
        //                 onSelect={() => sortHandler(option.value)}>
        //                 {option.key}
        //             </option>
        //         )
        //     })}
        // </Select>
        <Menu>
            <MenuButton as={Button}
                        bg="white"
                        minWidth="100px"
                        variant="outlined"
                        leftIcon={<FaSort/>}>
                {sortVal.title}
            </MenuButton>
            <MenuList>
                {sortVal.options.map(option => {
                    return(
                        <MenuItem
                            key={option.key}
                            onClick={() => sortHandler(option.value)}>
                            {option.key}
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>

    );
};

export default Sort;