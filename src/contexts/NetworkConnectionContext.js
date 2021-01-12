import React, { useEffect, useState } from 'react'

export const NetworkConnectionContext = React.createContext()

export function NetworkConnectionProvider({ children }) {
  const [isOnline, setOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setOnline(true))
    window.addEventListener('offline', () => setOnline(false))

    return () => {
      window.removeEventListener('online')
      window.removeEventListener('offline')
    }
  }, [])

  return (
    <NetworkConnectionContext.Provider value={{isOnline}}>
      {children}
    </NetworkConnectionContext.Provider>
  )
}
