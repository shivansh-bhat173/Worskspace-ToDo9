import React from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

const Comments = ({ by, comment, time }) => {
 console.log(time)
  function initial() {
    let arr = by.split(" ");
    let o = arr[0].charAt(0);
    let oo = arr[1].charAt(0);
    return o + oo;
  }

  return (
    <div style={{ display: "flex",marginTop:'10px',justifyContent:'space-around'}}>
        <div style={{width:'25%',display:'flex',justifyContent:'flex-end'}}>
      <Tooltip title={by}>
        <Avatar sx={{ bgcolor: deepOrange[400] }}>{initial()}</Avatar>
      </Tooltip>
        </div>
      <div style={{width:'75%'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>

      <p style={{margin:'0'}}>{by} </p>
      <p style={{margin:'0',fontSize:'15px'}}>{time} </p>
        </div>
      <p style={{margin:'0'}}>{comment}</p>

      </div>
      

    </div>
  );
};

export default Comments;
