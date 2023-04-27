import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const ChannelCard = ({video,marginTop}) => {
  console.log(video);
  return (
    <Box
     sx={{
      boxShadow:"none",
      borderRadius:"20px",
      display:"flex",
      justifyContent:"center",
      width:{xs:"356px",md:"320px"},
      height:"326px",
      margin:"auto",
      marginTop:{marginTop}
     }}>
      <Link to={`/channel/${video?.snippet?.channelId}`} style={{textDecoration:"none", color:"black"}}>
      <CardContent sx={{ 
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
      }}>
        <CardMedia 
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{
          borderRadius:"50%",
          height:"180px",
          width:"180px",
          mb:2,
          border:"1px solid #e3e3e3",
        }}/>
        <Typography variant={"h6"}>{video?.snippet?.title}
          <CheckCircle sx={{fontSize:"14px",color:"grey",ml:"5px"}}/>
        </Typography>
        {video?.statistics?.subscriberCount && (
          <Typography sx={{fontSize:"15px", fontWeight:500, color:"gray",marginTop:"2px" }}>
            {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-US")} Subscriber
          </Typography>
        )}
      </CardContent>
      </Link>
     </Box>
  )
}

export default ChannelCard