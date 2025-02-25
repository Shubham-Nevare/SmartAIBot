import React, { useContext } from "react";
import "../App.css";
import { RiImageAddLine, RiImageAiLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext, prevUser, user } from "../context/UserContext";
import Chat from "./Chat";
import { generateResponse } from "../gemini";
function Home() {
  const {
    startRes,
    setStartRes,
    popUp,
    setPopUp,
    input,
    setInput,
    feature,
    setFeature,
    showResult,
    setShowResult,
    prevFeature, setPrevFeature
  } = useContext(dataContext);
  async function handleSubmit(e) {
    setStartRes(true);
    setPrevFeature(feature);
    setShowResult("")
    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
    setInput("");
    const result = await generateResponse();
    setShowResult(result);
    setFeature("chat")
    user.data = null;
    user.mime_type = null;
    user.imgUrl = null;
  }

  function handleImage(e) {
    setFeature("upimg");
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result.split(",")[1];
      user.data = base64;
      user.mime_type = file.type;
      user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="home">
      <nav>
        <div className="logo">Smart AI Bot</div>
      </nav>
      <input
        type="file"
        accept="image/*"
        hidden
        id="inputImg"
        onChange={handleImage}
      />

      {!startRes ? (
        <div className="hero">
          <span id="tag">What can I help with ?</span>
          <div className="cate">
            <div
              className="upImg"
              onClick={() => {
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div className="genImg" onClick={() => setFeature("genimg")}>
              <RiImageAiLine />
              <span>Generate Image</span>
            </div>
            <div className="chat" onClick={() => setFeature("chat")}>
              <MdChatBubbleOutline />
              <span>Let's Chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}

      <form
        className="input-box"
        onSubmit={(e) => {
          e.preventDefault();
          if (input) {
            handleSubmit(e);
          }
        }}
      >
        {popUp ? (
          <div className="pop-up">
            <div
              className="select-up"
              onClick={() => {
                setPopUp(false);
                setFeature("chat")
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div className="select-gen" onClick={() => { setPopUp(false);
                setFeature("genImg")}}>
              <RiImageAiLine />
              <span>Generate Image</span>
            </div>
          </div>
        ) : null}

        <div
          id="add"
          onClick={() => {
            setPopUp((prev) => !prev);
          }}
        >
          {feature == "genImg" ? <RiImageAiLine id="genImg" /> : <FiPlus />}
        </div>
        <input
          type="text"
          placeholder="Ask Something..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {input ? (
          <button id="submit">
            <FaArrowUpLong />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default Home;
