import React from 'react';

export const PhotoFrame = ({title,url}) => {
   // if(!title) return;
  return(
    <div className="photoframe">
      <img src={url} alt="oops"/>
      <div className="caption">{title}</div>
    </div>
  )
}
