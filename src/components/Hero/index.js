import React from 'react'
import { Box, Heading, Text, Link as Button } from '@chakra-ui/react'
import image from '../../resources/img/hero.jpg'

export const Hero = () => {
  return (
    <Box
      //brightness='1.30'
      //brightness='70%'
      backgroundImage={`url('${image}')`}
      backgroundPosition="center 50%"
      backgroundRepeat="no-repeat"
      height='815px'
      backgroundSize="cover"
      filter='auto'
      marginTop='-75px'
      display='flex'
      justifyContent='space-between'
      pt='60px'
      mb='90px'
    >
      <Box
        background='base'
        height='100%'
        width='100px'
        borderRight='1px solid'
        borderColor='white'
      ></Box>
      <Box h='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        mt='20px'
      >
        <Heading
          color='white'
          letterSpacing='5px'
          fontSize='3xl'
          p='10px 0px'
          textShadow='2px 1px 2px rgba(0,0,0,0.6)'
          textAlign='end'
        >
          MY PROJECT
        </Heading>
        <Box textAlign='end' w={{ base: '100%', md: '80%' }} bg='baseTransp' p=' 10px 25px' alignSelf='end'
          border='1px solid'
          borderColor='white'
        >
          <Text color='white' fontWeight='600' maxW='500px'>
            Hola!, me presento.<br /> Soy un Alejandro un fotografo con grandes metas, aca podras ver mis trabajos, y como dicen por ahi
            <Text fontStyle='italic'>
              " Un viaje largo comienza con un solo paso "
            </Text>
          </Text>
        </Box>
        <Box textAlign='end' w='80%' alignSelf='end' mt='20px'>
          <Button href='#vistazo'
            color='white'
            p='10px'
            bg='transparent'
            border='1px solid'
            borderColor='white'
            _hover={{
              borderColor: 'transparent',
            }}
          >
            echa un ojo
          </Button>
        </Box>
      </Box>
      <Box
        background='base'
        height='200px'
        width='200px'
        justifyContent='center'
        alignItems='center'
        borderLeft='1px solid'
        borderBottom='1px solid'
        borderColor='white'
        display={{ base: 'none', md: 'flex' }}
      >
        <Text
          fontSize='2xl'
          color='white'
          fontFamily='Aboreto, cursive'
        >
          Alejandro <br />
          Pabon
        </Text>
      </Box>
    </Box>
  )
} 