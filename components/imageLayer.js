import React from 'react'
import { Image } from 'react-bootstrap'

const ImageFramed = ({caption, size, children}) => {
  return (
    <div className={"framed-image-container"} style={{width: size, height: size, backgroundColour: 'green'}}>
        {children}
        <div className='framed-image-frame' style={{width: size, height: size}}>
            {/* <span className={"image-caption"}>{caption}</span> */}
        </div>
    </div>
  )
}

export default ImageFramed