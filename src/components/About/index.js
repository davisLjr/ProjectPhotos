import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import image from '../../resources/img/colo.jpeg'

export const About = () => {
  return(
    <Box p={{ base:'0px 15px', md:'0px 40px' }} id='quiensoy' scrollMarginTop="80px">
      <Box color='white' mb='20px'>
        <Heading fontSize={{ base:'2xl', md:'3xl' }}>¿ QUIEN SOY ?</Heading> 
        <Text fontSize={{ base:'lg', md:'xl' }}> Con gusto aca me presentare</Text>  
      </Box>
      <Flex flexDirection={{base:'column', md:'row'}} justifyContent='space-between'>
        <Box
          backgroundImage={`url('${image}')`}
          backgroundRepeat="no-repeat"
          w={{ base:'100%', lg:'50%' }}
          maxW='900px'
          height={{base:'50vh', sm:'85vh'}}
          backgroundPosition='center 50%'
          backgroundSize="cover"
        ></Box>
        <Box w={{ base:'100%', lg:'50%' }} display='flex'
          alignItems='center'
          p={{base:'40px 20px', md:'0px 20px'}}
          maxW='780px'
        >
          <Box>
            <Text textTransform='uppercase' color='lightGold' fontWeight='bold'
            letterSpacing='2px'
            >
              Te podras preguntar
            </Text>
            <Heading
              fontSize={{ base:'xl', lg:'4xl' }}
              color='white'
              m='10px 0px '
            >
              Que hace y quien es este chico
            </Heading>
            <Text color='white'>soy un chico autodidacta en el mundo de la fotografia profesional, con muchas ganas de desenvolverme de manera correcta en este entorno, me encuentro aprendiendo las bases de la fotografia empleandola en mis practicas, usando metodos profesionales que me ayudaran a obtener la experiencia necesaria para ser todo un profesional en este arte de la fotografia.</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}