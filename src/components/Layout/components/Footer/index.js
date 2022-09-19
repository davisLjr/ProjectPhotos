import React from 'react'
import { Box, Image, Heading } from '@chakra-ui/react'
import logo from '../../../../resources/img/sinbglg.png'

export const Footer = () =>{
  return(
    <Box p='20px 40px 60px' bg='grayf'>
      <Box m=' 0 auto' w='fit-content'> 
          <Image h='60px' src={logo} cursor='pointer' alt='logo alejandro' />
      </Box>
      <Box>
        <Heading color='white'
         textAlign='center'
         fontSize='xl'
         fontWeight='light'
        >
          Alejandro Pavon 2022 Copyright © All Rights Reserved.
        </Heading>
      </Box>
    </Box>
  )
}