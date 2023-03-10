import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
//useEffect to manage the the notification timing 
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert()
      return()=> clearTimeout(timeout)
    },3000)
  }, [list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
