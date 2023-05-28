import {Field, Formik} from "formik";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Heading
} from "@chakra-ui/react";

const Register = () => {
    return (
        <Flex align="center" justify="center" h="100vh">
            <Box bg="white" p={10} rounded="md">
                <Formik
                    initialValues={{
                        name: "",
                        phone: "",
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values, {resetForm}) => {
                        alert(JSON.stringify(values, null, 2))
                        resetForm();
                    }}
                >
                    {({handleSubmit, errors, touched}) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={5} align="flex-start" alignItems="center">
                                <Heading size="lg">Register</Heading>
                                <FormControl isRequired isInvalid={!!errors.name && touched.name}>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Field
                                        width={"350px"}
                                        as={Input}
                                        id="name"
                                        name="name"
                                        type="tel"
                                        variant="filled"
                                        validate={(value) => {
                                            let error;

                                            if (value.length === 0) {
                                                error = "Name number must not be null";
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                </FormControl>
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
                                <FormControl isRequired isInvalid={!!errors.email && touched.email}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Field
                                        width={"350px"}
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="tel"
                                        variant="filled"
                                        validate={(value) => {
                                            let error;

                                            if (value.length === 0) {
                                                error = "Email number must not be null";
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
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
                                <Button
                                    type="submit"
                                    bg="#1A202C"
                                    color="white"
                                    _hover={{bg: 'rgba(32,39,52,0.84)'}}
                                    width="full">
                                    Create
                                </Button>
                                <a href="/login">Already have an account</a>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}

export default Register;