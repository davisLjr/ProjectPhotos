import React, {useState} from 'react'
import { Flex, Spacer, Box, Image, HStack, Link} from '@chakra-ui/react'
import logo from '../../../../resources/img/sinbglg.png'
import { HeaderMobile } from './mobile'

export const Header = () =>{
  const [hero, setHero] = useState(false);

  const cambiobg = () => {
    if(window.scrollY >= 60){
      setHero(true)
    }else{
      setHero(false)
    }
  }
  //console.log('cambio',hero)
  window.addEventListener('scroll', cambiobg);
  return(
    <>

      <Flex height='60px' 
        boxShadow={hero ? 'sm' : 'none'} 
        w='100%' 
        p='0px 20px' 
        zIndex='999'
        position='fixed'
        top='0px'
        bg={hero ?  'base' : 'transparent'}
        transition='all 200ms ease'
        >
        <Box>
          <Image h='60px' src={logo} cursor='pointer' alt='logo alejandro' />
        </Box>
        <Spacer />
        <Box className='test' display='flex'>
          <HStack spacing='24px'
            color='white'
            fontSize='15px'
            display={{ base:'none', md:'flex' }}
            >
            <Box position='relative' p='9px 0px'>
              <Link 
              sx={styles}
              href='#quiensoy'
              >
                Quien Soy!
              </Link>
            </Box>
            <Box position='relative' p='9px 0px'>
              <Link  
              sx={styles}
              href='#vistazo'
              >
                Galeria! 
              </Link>
            </Box>
            <Box position='relative' p='9px 0px'>
              <Link 
              sx={styles}
              href='#servicios'
              >
                Servicios! 
              </Link>
            </Box>
            <Box position='relative' p='9px 0px' 
              borderTop='2px solid'
              borderBottom='2px solid'
              borderColor='gold'
            >
              <Link 
              sx={styles}
              href='#contacto'
              >
                Contacto! 
              </Link>
            </Box>
          </HStack>
          <HStack>
            <Box display={{ base:'block', md:'none' }}>
              <HeaderMobile/>
            </Box>
          </HStack>
        </Box>
      </Flex>
      
    </>
  )
}
const styles = {
  p:'19px 15px',
  _before:{
    content: "''",
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '3px',
    background: 'gold',
    transform: 'scaleX(0)',
    transformOrigin: 'top left',
    transition: 'transform 0.3s',
  },
  _after:{
    content: "''",
    position: 'absolute',
    bottom: '0',
    right: '0',
    width : '100%',
    height: '3px',
    background: 'gold',
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.3s'
  },
  _hover:{
    _before:{
      transform: 'scaleX(1)',
      transition: 'transform 0.2s 0.3s'
    },
    _after:{
      transform: 'scaleX(1)' ,
      transition: 'transform 0.2s 0.1s',
    },
  },
  _active:{
    _before:{
      transform: 'scaleX(1)',
      transition: 'transform 0.2s 0.3s'
    },
    _after:{
      transform: 'scaleX(1)' ,
      transition: 'transform 0.2s 0.1s',
    },
  }
}