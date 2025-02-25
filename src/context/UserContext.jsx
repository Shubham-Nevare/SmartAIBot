import React, { createContext, useState } from 'react'

export const dataContext = createContext()

export const user={
  data: null,
  mime_type:null,
  imgUrl:null
}
export const prevUser={
  data: null,
  mime_type:null,
  prompt:null,
  imgUrl:null
}
function UserContext({children}) {
    const [startRes, setStartRes] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [input, setInput] =useState("")
    const [feature, setFeature] =useState("chat")
    const [showResult, setShowResult] = useState("")
    const [prevFeature, setPrevFeature] = useState("chat") 
    const value={
        startRes, setStartRes,
        popUp, setPopUp,
        input, setInput,
        feature, setFeature,
        showResult, setShowResult,
        prevFeature, setPrevFeature
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