import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'
import {ChannelCard, Videos} from "../"

const Channel=()=>{
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id}=useParams()
  useEffect(() => {
    const getData=async () =>{
      try {
        const dataChannelDetail= await ApiService.fetching(`channels?part=snippet&id=${id}`)
        console.log(dataChannelDetail);
        setChannelDetail(dataChannelDetail.items[0])
        const dataVideo= await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        console.log(dataVideo);
        setVideos(dataVideo.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])
  return (
    <Box minHeight={"95vh"} mt={2}>
      <Box>
        <Box width={"100%"} height={"300px"} zIndex={10} sx={{backgroundImage:`url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center"}}/>
        <ChannelCard video={channelDetail} marginTop={"-100px"}/>
      </Box>
      <Container maxWidth={"100%"}>
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Channel 