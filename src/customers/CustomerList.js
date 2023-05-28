import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer, Button, Heading,
} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../environments/Environment";
import {FiEye} from "react-icons/fi"
import Sort from "../components/sort/sort";
import Search from "../components/search/search";
const CustomerList = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);

    const sort = {
        options: [
            {key: "Default", value: "/customers"},
            {key: "Name (Ascending)", value: "/customers?_sort=name&_order=asc"},
            {key: "Name (Descending)", value: "/customers?_sort=name&_order=desc"}
        ],
        title: "Sort by name",
    }

    const data = customers.map(customer => {
        return (
            <Tr key={customer.id}>
                <Td>{customer.id}</Td>
                <Td>{customer.name}</Td>
                <Td>{customer.phone}</Td>
                <Td>{customer.email}</Td>
                <Td>
                    <Button onClick={() => navigate(`/customer/${customer.id}`)}>
                        <FiEye size={20}/>
                    </Button>
                </Td>
            </Tr>
        )
    })

    useEffect(() => {
        axios.get(`${baseURL}/customers`)
            .then(res => {
                    setCustomers(res.data)
                }
            )
    }, [])

    return (
        <>
            <div className="flex justify-between mb-5">
                <Heading size="lg">Customers</Heading>
                <div className="flex gap-3">
                    <Sort sortVal={sort} setRes={setCustomers}/>
                    <Search searchURL="/customers" setRes={setCustomers}/>
                </div>
            </div>
            <TableContainer className="bg-white rounded-lg">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Phone</Th>
                            <Th>Email</Th>
                            <Th>View</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CustomerList;