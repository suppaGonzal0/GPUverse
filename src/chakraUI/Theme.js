import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                color: 'default',
                bg: '#E2E8F0',
            },
        }),
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                ghost: {
                    width: "100%",
                    justifyContent: "flex-start",
                    marginY: "5px"
                }
            }
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