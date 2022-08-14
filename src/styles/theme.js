import { extendTheme } from "@chakra-ui/react";

//criando tema global para minha aplicação com chakra-ui
export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                fontSize: "20px", 
                fontFamily: "Poppins",
            },
        },
    },
});

