import React, {useState} from 'react'
import { Box, Image, Grid, GridItem, Text as Heading  } from '@chakra-ui/react'
import Img3 from '../../resources/img/images/3.jpg'
import Img4 from '../../resources/img/images/4.jpg'
import Img5 from '../../resources/img/images/5.jpg'
import Img6 from '../../resources/img/images/6.jpg'
import Img7 from '../../resources/img/images/7.jpg'
import Img8 from '../../resources/img/images/8.jpg'

import Img9 from '../../resources/img/images/9.jpg'
import Img11 from '../../resources/img/images/11.jpg'
import Img12 from '../../resources/img/images/12.jpg'
import Img13 from '../../resources/img/images/13.jpg'
import Img14 from '../../resources/img/images/14.jpg'
import Img15 from '../../resources/img/images/15.jpg'

import Img16 from '../../resources/img/images/16.jpg'
import Img17 from '../../resources/img/images/17.jpg'
import Img18 from '../../resources/img/images/18.jpg'
import Img19 from '../../resources/img/images/19.jpg'
import Img20 from '../../resources/img/images/20.jpg'
import Img21 from '../../resources/img/images/21.jpg'

import { CloseIcon } from '@chakra-ui/icons'

export const Gallery = () => {

  let data =[
    {
      id:3,
      imgSrc:Img3,
    },
    {
      id:4,
      imgSrc:Img4,
    },
    {
      id:5,
      imgSrc:Img5,
    },
    {
      id:6,
      imgSrc:Img6,
    },
    {
      id:7,
      imgSrc:Img7,
    },
    {
      id:8,
      imgSrc:Img8,
    },
    {
      id:9,
      imgSrc:Img9,
    },
    {
      id:11,
      imgSrc:Img11,
    },
    {
      id:12,
      imgSrc:Img12,
    },
    {
      id:13,
      imgSrc:Img13,
    },
    {
      id:14,
      imgSrc:Img14,
    },
    {
      id:15,
      imgSrc:Img15,
    },
    {
      id:16,
      imgSrc:Img16,
    },
    {
      id:17,
      imgSrc:Img17,
    },
    {
      id:18,
      imgSrc:Img18,
    },
    {
      id:19,
      imgSrc:Img19,
    },
    {
      id:20,
      imgSrc:Img20,
    },
    {
      id:21,
      imgSrc:Img21,
    },
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
    //console.log('test', imgSrc)
  }
  return(
    <Box p={{base:'0px 5px', md:'0px 10px'}} id='vistazo'
    scrollMarginTop="60px">
      <Heading 
      color='white'
      fontSize='3xl'
      fontWeight='bold'
      pl='20px'
      >
      Comenzamos:
      </Heading>
      <Heading
        fontSize='xl'
        fontWeight='semiBold'
        color='white'
        pl='20px'
      >
        Un recordatorio para ti, ! La imaginación nos hace infinitos ¡
      </Heading>
      <Box className={model? "modelOpen" : "model"}
        w='100%'
        h='calc(100vh - 60px)'
        position='fixed'
        bottom='0'
        left='0'
        display='flex'
        justifyContent='center'
        alignItems='center'
        background='#000000'
        visibility={model ? 'visible' : 'hidden'}
        opacity={model ? '1' : '0'}
        transform={model ? 'scale(1)' : 'scale(0)'}
        overflow='hidden'
        transition='opacity .8s ease, visibility .4s ease, transform .3s ease-in'
        zIndex='99'
      >
      <Image src={tempimgSrc} 
        w='auto'
        maxWidth='100%'
        h='auto'
        maxHeight='100%'
        display='block'
        lineHeight='0'
        boxSizing='border-box'
        p='20px 0px 20px'
        margin='0 auto'
      />
      <CloseIcon
        position='fixed'
        top='10px'
        right='10px'
        width='2rem'
        height='2rem'
        padding='5px'
        backgroundColor='rgba(0, 0, 0, 0.4)'
        color='gold'
        cursor='pointer'
        onClick={()=> setModel(false)} 
      />
    </Box>
      <Grid
        templateColumns='repeat(auto-fit, minmax(15rem, 1fr))' gap='10px'
        gridAutoFlow='dense'
        gridAutoRows='22rem'
        mt='30px'
      >
        {data.map((item, index) => {
          return(
            <GridItem key={index}
            transition='all 350ms ease'
            cursor='pointer'
            _hover={{
              opacity: 0.8,
              //filter: 'grayscale(9)',
            }}
            sx={{
              
              '&:nth-child(4n)': {
                gridColumn: 'span 2',
                gridRow: 'span 2',
              },
              '&:nth-child(2n)': {
                gridColumn: {base:'span 1.5', md:'span 2'},
              }
            }}
            onClick={()=> getImg(item.imgSrc)}
            >
              <Image src={item.imgSrc} height='100%' 
              objectFit='cover'
              w='100%'
              />
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}
//{
  //console.warn(data)
//}