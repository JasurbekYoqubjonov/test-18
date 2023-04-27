import { Stack } from '@mui/material'
import React from 'react'
import {category} from "../../constants/constants"
import {colors} from "../../constants/colors"

const Category = ({selectCategoryHandler, selectCategory}) => {
  return (
    <Stack direction={"row"} className='category-stack'>
        {category.map(item=>{
            return(
               <button
                key={item.name}
                className='category-btn'
                style={{borderRadius:"0",
                background:item.name === selectCategory && colors.secondary,
                color: item.name === selectCategory && "#fff"
               }}
                onClick={()=>selectCategoryHandler(item.name)}>
                <span style={{color: item.name === selectCategory? "#fff": colors.secondary, marginRight:"15px"}}>{item.icon}</span>
                <span>{item.name}</span>
               </button>
            )
        })}
    </Stack>
  )
}

export default Category