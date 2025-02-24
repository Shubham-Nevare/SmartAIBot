import React, { createContext, useState } from 'react'

export const dataContext = createContext()

function UserContext({children}) {
    const [startRes, setStartRes] = useState(false)
    const value={
        startRes, setStartRes
    }
  return (
    <div>
        <dataContext.Provider value={value}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext