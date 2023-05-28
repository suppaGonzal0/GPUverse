import {Field, Formik} from "formik";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack, Heading, Text
} from "@chakra-ui/react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = ({login}) => {
    const [error, setError] = useState("")
    const navigate = useNavigate();

    return (
        <Flex align="center" justify="center" h="95vh">
            <Box bg="white" p={10} rounded="md">
                <Formik
                    initialValues={{
                        phone: "",
                        password: "",
                    }}
                    onSubmit={(values,{resetForm}) => {
                        if (values.phone === "12341234" && values.password === "password") {
                            localStorage.setItem("role", "admin")
                            login(true)
                            navigate("/")
                        } else if(values.phone === "56785678" && values.password === "password"){
                            localStorage.setItem("role", "customer")
                            navigate("/")
                            login(true)
                        } else {
                            setError("Credentials Mismatch!")
                        }
                        resetForm();
                    }}
                >
                    {({handleSubmit, errors, touched}) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={5} align="flex-start" alignItems="center">
                                <Heading size="lg">Welcome</Heading>
                                <FormControl isRequired isInvalid={!!errors.phone && touched.phone}>
                                    <FormLabel htmlFor="phone">Phone</FormLabel>
                                    <Field
                                        width={"350px"}
                                        as={Input}
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        variant="filled"
                                        validate={(value) => {
                                            let error;

                                            if (value.length === 0) {
                                                error = "Phone number must not be null";
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                                </FormControl>
                                <FormControl isRequired isInvalid={!!errors.password && touched.password}>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Field
                                        as={Input}
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="filled"
                                        validate={(value) => {
                                            let error;

                                            if (value.length < 6) {
                                                error = "Password must contain at least 6 characters";
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                                {
                                    error ?
                                        <div className="flex items-center gap-2">
                                            <Heading
                                                size="xs"
                                                color="red">{error}
                                            </Heading>
                                            <Button
                                                size="xs"
                                                bg="red"
                                                color="white"
                                                _hover={{color: 'white'}}
                                                onClick={() => setError("")}>
                                                Try Again
                                            </Button>
                                        </div>
                                        :
                                        <Button
                                            type="submit"
                                            bg="#1A202C"
                                            color="white"
                                            _hover={{bg: 'rgba(32,39,52,0.84)'}}
                                            width="full">
                                            Login
                                        </Button>}
                                <a href="/register">Don't have an account</a>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}

export default Login;