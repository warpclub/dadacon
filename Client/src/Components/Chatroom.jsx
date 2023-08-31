import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { useAtomValue } from "jotai";
// import useWebSocket, { ReadyState } from 'react-use-websocket';
import SockJS from "sockjs-client/dist/sockjs";
import { token } from "../../store";

const morseC = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "\"": ".-..-.",
  "$": "...-..-",
  "!": "-.-.--",
  "@": ".--.-.",
  " ": "/",
  "Á": ".__._",
  "Ä": "._._",
  "É": ".._..",
  "Ñ": "__.__",
  "Ö": "___.",
  "Ü": "..__"
};

const messages = ['Hello']
function Chatroom() {
  const userToken = useAtomValue(token)


  function Encode(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    const data = text.toLowerCase().split("");
    return data.map(m => morseC[m] || "").join(" ");
  }
  function Decode(text) {
    if (!text || typeof text !== "string") throw new Error("Invalid input");
    const data = text.split(" ");
    const table = Object.values(morseC);
    const ids = [];

    data.forEach(txt => {
      const get = table.findIndex(x => x === txt);
      if (get !== -1) ids.push(get);
    });
    let str = "";
    ids.forEach(id => str += (Object.keys(morseC)[id] || ""));

    return str;
  }

  const [message, setMessage] = useState('');
  const [morse, setMorse] = useState(false)
  const socketUrl = `wss://dadacon.onrender.com/ws/chat/1/?token=${userToken}`
  const client = new WebSocket(socketUrl);
  const [connectionStatus, setConnectionStatus] = 'not ready'

  client.onopen = () => {
    setConnectionStatus('open')
  }

  client.onmessage = () => {
    console.log(message)
  }
  
  // client.connect(socketUrl)

  const sendMsg = async () => {
    // let msg
    // if (morse){
    //     msg=Decode(message)
    //     console.log(msg)
    // }
    // else{
    //     msg=message
    //     console.log(msg)
    // }

    messages.push(message)
    localStorage.setItem('m', JSON.stringify(messages))
    client.send({
      message: JSON.stringify({ 'text': message, 'morse': morse })
    })

    setMessage('')
    setMorse(false)
  }

  const clickMorse = () => {
    try {
      setMorse(!morse)
      if (morse) {
        setMessage(Decode(message))
      } else {
        setMessage(Encode(message))
      }
    } catch (e) {
      setMorse(false)
    }
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };


  return (
    <div>
      <div className=" flex h-full antialiased text-gray-800">
        
        <div className="flex flex-row h-[600px] w-5/6 mx-auto overflow-x-hidden">


          <div className="flex flex-col flex-auto h-[500px] p-6">
            <div
              className="flex flex-col flex-auto w-10/12 rounded-2xl bg-[url('/chatBG.jpg')] h-full p-4"
            >
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-end gap-y-2 h-full " id='wall'>

                    <span className="text-gray-500 text-center">The WebSocket is currently {connectionStatus} - {userToken}</span>
                    {JSON.parse(localStorage.getItem('m')).map((m, i) => {
                      return (
                        <div key={i} className="p-3 rounded-lg">
                          <div className="flex items-center justify-start flex-row-reverse">
                            <div
                              className="flex items-center justify-center shrink-0 h-10 w-10 rounded-full bg-indigo-500 "
                            >
                              ME
                            </div>
                            <div
                              className="relative mr-3 text-sm shrink bg-indigo-100 py-2 px-4 shadow rounded-xl"
                            >
                              <div>
                                {m}
                              </div>

                            </div>
                          </div>
                        </div>
                      )
                    })
                    }



                  </div>
                </div>
              </div>
            </div>

            <div className='flex w-4/5 gap-y-3 rounded-xl mt-4 justify-around min-[833px]:flex-row flex-col'>
              <input type="text" className='p-2 rounded-xl w-3/4 shrink focus:outline-none'
                placeholder='Enter message....'
                value={message}
                onChange={handleChange} />

              <div className='flex justify-between w-2/12 gap-x-2 shrink '>
                <button onClick={clickMorse} className='flex items-center shrink  justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 '>
                  <span className="shrink">Morse</span>
                </button>
                <button onClick={sendMsg}
                  className="flex items-center shrink justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1"
                >
                  <span className="shrink">Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px shrink"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Chatroom
