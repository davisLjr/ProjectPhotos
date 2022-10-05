import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export const Success = ({setIsSuccess}) => {
    return(
        <Box 
            width='100%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            textAlign='center'
        >
            <Box mt='20px'>
                <Heading
                    color="lightGold"
                    textAlign="center"
                    letterSpacing="2px"
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily="heading"
                    mb="10px"
                >
                    Consulta enviada
                </Heading>
                <Text
                    color="gold"
                >
                    Recibimos tu Consulta correctamente <br/>
                    Pronto te estaremos respondiendo <br/>
                    que tengas un excelente dia. 
                </Text>
                <Button type="submit" variant="solidPrimary" fontFamily="heading" mt="10px" onClick={setIsSuccess}>
                    Volver 
                </Button>
            </Box>
        </Box>
    )
}