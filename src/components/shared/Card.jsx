import React from 'react'

function Card({children,reverse}) {
  // return (
  //   <div className={"card ${reverse && 'reverse'}"}>{children}</div>
  // )
  return(
    <div className='card' style={{backgroundColor:reverse?'black':'white'}}>{children}</div>
  )
}

export default Card