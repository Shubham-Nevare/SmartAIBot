import React, { useContext } from 'react'
import "../App.css"
import { RiImageAddLine, RiImageAiLine } from 'react-icons/ri'
import { MdChatBubbleOutline } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'
import { FaArrowUpLong } from 'react-icons/fa6'
import { dataContext } from '../context/UserContext'
import Chat from './Chat'
function Home() {
    const {startRes, setStartRes} = useContext(dataContext)
    function handleSubmit(e){
        e.preventDefault()
        setStartRes(true)
    }
  return (
    <div className='home'>
        <nav>
            <div className="logo">
                Smart AI Bot
            </div>
        </nav>

        {!startRes?
        <div className="hero">
        <span id='tag'>What can I help with ?</span>
        <div className="cate">
            <div className="upImg">
                <RiImageAddLine />
                <span>Upload Image</span>
            </div>
            <div className="genImg">
                <RiImageAiLine />
                <span>Generate Image</span>
            </div>
            <div className="chat">
                <MdChatBubbleOutline />
                <span>Let's Chat</span>
            </div>
        </div>
    </div>
    :
    <Chat />
    }
        
        <form className='input-box' onSubmit={(e)=> handleSubmit(e)}>
            <button id='add'>
                <FiPlus />
            </button>
            <input type="text" placeholder='Ask Something...'/>
            <button id='submit'>
                <FaArrowUpLong />
            </button>
        </form>
    </div>
  )
}

export default Home