import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  Link as MenuItem,
  IconButton,
 
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import {  MdCameraAlt, MdFolderSpecial } from 'react-icons/md'
import { PhoneIcon, CalendarIcon, HamburgerIcon  } from '@chakra-ui/icons'


export const HeaderMobile = () => {
  return(
    <Menu >
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon color='white' />}
        variant='outline'
        bg='transparent'
        borderColor='white'
        _hover={{
          borderColor:'lightGold',
          'svg':{
            color:'lightGold'
          }
        }}
        _active={{
          background:'transparent'
        }}
      />
      <MenuList bg='transparent' w='260px' 
      color='white' 
      backdropFilter= 'brightness(0.5)'
      display='flex'
      flexDirection='column'
      >
        <MenuItem  sx={Styles}
          href='#quiensoy'
          p='5px 0px 10px'
          >
          <Icon as={MdCameraAlt} m='0px 10px' marginBottom='-3px'/>
          Quien Soy
        </MenuItem>
        <MenuItem sx={Styles} height= '45px' 
          href='#vistazo'
          paddingTop='10px'
        >
          <Icon as ={MdFolderSpecial} m='0px 10px' marginBottom='-3px'/>
          Galeria
        </MenuItem>
        <MenuItem  sx={Styles} height= '45px'
          href='#servicios'
          paddingTop='10px'
        >
          <CalendarIcon m='0px 10px'/>
          Servicios
        </MenuItem>
        <MenuItem  
          sx={{
            _hover:{
              background:'transparent',
              backdropFilter: 'brightness(0.5)',
            },
            _active:{
              background:'transparent',
              backdropFilter: 'brightness(0.5)'
            },
            _focus:{
              background:'transparent',
              backdropFilter: 'brightness(0.5)'
            }
          }} 
          href='#contacto'
          paddingTop='10px'
        >
          <PhoneIcon m='0px 10px '/>
          Contacto
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
const Styles = {
  borderBottom:'1px solid white',
  _hover:{
    background:'transparent',
    backdropFilter: 'brightness(0.5)',
    borderBottom:'1px solid white'
  },
  _active:{
    background:'transparent',
    backdropFilter: 'brightness(0.5)'
  },
  _focus:{
    background:'transparent',
    backdropFilter: 'brightness(0.5)'
  }
}