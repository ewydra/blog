import React, { useCallback, useContext } from 'react'
import { NetworkConnectionContext } from '../contexts/NetworkConnectionContext'
import SnackbarContext from './Snackbar/SnackbarContext'

export function Button({ 
  disabled, 
  onClick, 
  children,
  type = "button", 
}) {
  const { showSnackbar } = useContext(SnackbarContext)
  const { isOnline } = useContext(NetworkConnectionContext)

  const handleClick = useCallback(() => {
    if (isOnline) {
      onClick()
    } else {
      showSnackbar('You are offline. You cannot perform this action', 'error');
    }
  }, [isOnline, onClick, showSnackbar])
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="button --primary"
    >
      {children}
    </button>
  )
}
