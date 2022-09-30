import React, { useState } from "react";
import { Box, Image, Grid, GridItem, Text as Heading } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { data } from './import'

export const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
    //console.log('test', imgSrc)
  };
  return (
    <Box
      p={{ base: "0px 5px", md: "0px 10px" }}
      id="vistazo"
      scrollMarginTop="60px"
    >
      <Heading
        color="white"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        pl="15px"
      >
        Comenzamos:
      </Heading>
      <Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semiBold"
        color="white"
        pl="15px"
      >
        Un recordatorio para ti, ! La imaginación nos hace infinitos ¡
      </Heading>
      <Box
        className={model ? "modelOpen" : "model"}
        w="100%"
        h="calc(100vh - 60px)"
        position="fixed"
        bottom="0"
        left="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        background="#000000"
        visibility={model ? "visible" : "hidden"}
        opacity={model ? "1" : "0"}
        transform={model ? "scale(1)" : "scale(0)"}
        overflow="hidden"
        transition="opacity .8s ease, visibility .4s ease, transform .3s ease-in"
        zIndex="99"
      >
        <Image
          src={tempimgSrc}
          w="auto"
          maxWidth="100%"
          h="auto"
          maxHeight="100%"
          display="block"
          lineHeight="0"
          boxSizing="border-box"
          p="20px 0px 20px"
          margin="0 auto"
        />
        <ArrowLeftIcon
          position="fixed"
          bottom="10px"
          left={{ base: "10px", md: "2rem" }}
          width={{ base: "2rem", md: "3rem" }}
          height={{ base: "2rem", md: "3rem" }}
          padding="5px"
          backgroundColor="rgba(0, 0, 0, 0.4)"
          color="gold"
          cursor="pointer"
          onClick={() => setModel(false)}
          transition="all 250ms ease"
          _hover={{
            transform: "translateX(-10px)",
          }}
        />
      </Box>
      <Grid
        templateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
        gap="10px"
        gridAutoFlow="dense"
        gridAutoRows="22rem"
        mt="30px"
      >
        {data.map((item, index) => {
          return (
            <GridItem
              key={index}
              transition="all 350ms ease"
              cursor="pointer"
              _hover={{
                opacity: 0.8,
                //filter: 'grayscale(9)',
              }}
              sx={{
                "&:nth-child(4n)": {
                  gridColumn: "span 2",
                  gridRow: "span 2",
                },
                "&:nth-child(2n)": {
                  gridColumn: { base: "span 1.5", md: "span 2" },
                },
              }}
              onClick={() => getImg(item.thumbnailSrc)}
            >
              <Image
                src={item.imgSrc}
                height="100%"
                objectFit="cover"
                w="100%"
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
//{
//console.warn(data)
//}
