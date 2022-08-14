import React from "react";
import * as C from '@chakra-ui/react';

const FormPersonalDetails = () => {
    return (
        <C.VStack>

            <C.Input 
            type="text" 
            placeholder="Nome completo" 
            borderColor="blue.700"/>

            <C.Input
            type="text"
            placeholder="Seu CPF"
            borderColor="blue.700"/>

            <C.Input 
            type="text" 
            placeholder="Seu celular" 
            borderColor="blue.700"/>

        </C.VStack>
    )
}

export default FormPersonalDetails