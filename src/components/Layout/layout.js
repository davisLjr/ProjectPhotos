
import * as React from "react"
import PropTypes from "prop-types"

import { Box} from '@chakra-ui/react'
import {Header }from './components/Header'
import {Footer} from './components/Footer'

export const Layout = ({ children }) => {

  return (
    <Box background="base">
      <Header />
      <main>{children}</main>
      <Footer/>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


