import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
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
      <MenuList bg='transparent' w='260px' color='white' 
      backdropFilter= 'brightness(0.5)'
      >
        <MenuItem icon={<Icon as={MdCameraAlt} />} sx={Styles}>
          Quien soy 
        </MenuItem>
        <MenuItem icon={<Icon as ={MdFolderSpecial} />} sx={Styles} height= '45px'>
          Galeria
        </MenuItem>
        <MenuItem icon={<CalendarIcon />} sx={Styles} height= '45px'>
          Servicios
        </MenuItem>
        <MenuItem icon={<PhoneIcon/>} 
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
          >
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