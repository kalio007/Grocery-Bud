import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert}) => {
//useEffect to 
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert()
      return()=> clearTimeout(timeout)
    },3000)
  }, [])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
