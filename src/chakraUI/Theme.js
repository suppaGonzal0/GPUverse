import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                colorScheme: "red"
            },
        },
        Heading: {
            defaultProps: {
                size: 'md'
            },
            baseStyle: {
                fontFamily: "Nunito",
            }
        },
    }

})