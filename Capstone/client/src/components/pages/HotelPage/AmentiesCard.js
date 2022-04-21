import React, { useState } from 'react'

export const AmentiesCard = ({data}) => {
  return(
    <div>
        <div style={{height:"5rem", width:"10rem", boxShadow:"3px 3px 10px -2px #7D7D7D",background:"white", borderRadius:"0.5rem", textAlign:"center", paddingTop:"1.5rem", marginRight:"20px"}} >
          {data}
        </div>
    </div>
   )

 }