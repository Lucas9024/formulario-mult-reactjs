import React from "react";
import * as C from '@chakra-ui/react';

const FormAddress = () => {
    return (
        <C.VStack>

            <C.Input 
            type="text" 
            placeholder="Sua cidade, UF" 
            borderColor="blue.700"/>

            <C.Input
            type="text"
            placeholder="Rua"
            borderColor="blue.700"/>

            <C.Input 
            type="text" 
            placeholder="Seu cep" 
            borderColor="blue.700"/>

        </C.VStack>
    )
}

export default FormAddress