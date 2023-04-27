import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {logo} from "../../constants/constants"
import {colors} from "../../constants/colors"
import {SearchBar} from "../"

const Navbar=()=>{

  return (
    <Stack
     direction={"row"}
     alignItems={"center"}
     justifyContent={"space-between"}
     p={2}
     sx={{position:"sticky", top:0, zIndex:999,background:colors.primary}}
     className='nav-stack'>
      <Link to={"/"}>
        <img src={logo} alt="youtube" width={120}/>
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar