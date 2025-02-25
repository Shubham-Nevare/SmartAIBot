import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {
  const {input, setInput,prevInput, setPrevInput, showResult, setShowResult, feature, setFeature, prevFeature, setPrevFeature} =useContext(dataContext)
  return (
    <div className='chat-page'>
        <div className="user">

          {prevFeature=="upimg"?<> <img src={prevUser.imgUrl} alt="" />
          <span>{prevUser.prompt}</span></>
          :  <span>{prevUser.prompt}</span>
          }
           
        </div>
        <div className="ai">
        {prevFeature=="genimg"
        ?
        <> <img src={prevUser.imgUrl} alt="" />
        {!showResult?   <span>Loading...</span>:<span>{showResult}</span> }
        </>
          :  !showResult
          ?
            <span>Loading...</span>:<span>{showResult}</span> }
        </div>
    </div>
  )
}

export default Chat