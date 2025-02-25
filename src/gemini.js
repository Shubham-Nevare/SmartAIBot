import { prevUser} from "./context/UserContext";

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD3JXVHhpmQZ3XNtdA3CEFzBMlCrGRHXy0"

export async function generateResponse(){
    const RequestOption={
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "contents": [{
    "parts":[
      {"text": prevUser.prompt },
      prevUser.data?[{
        "inline_data": {
          "mime_type":prevUser.mime_type,
          "data": prevUser.data
        }
      }]:[]
      
    ]
  }]
        })
    }
    try{
        const response= await fetch(Api_Url, RequestOption)
        const data = await response.json()
        const apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
        return apiResponse;
    }
    catch{

    }
}