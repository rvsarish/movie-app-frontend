import React from 'react'
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';



export default function Counter() {
    let [like,setLike] = useState(0);
    let [dislike,setDislike] = useState(0);

    const increamentLike = () => setLike(like + 1);
    const increamentDislike = () => setDislike(dislike + 1);
    
  return (
    <div>
        <IconButton color="primary" aria-label="add an alarm" onClick={increamentLike}>
            <Badge badgeContent={like} color='primary'>
            <ThumbUpIcon/>
            </Badge>  
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm" onClick={increamentDislike}>
      <Badge badgeContent={dislike} color='error'>
            <ThumbDownIcon/>
            </Badge>  
      </IconButton>
    </div>
  )
}
