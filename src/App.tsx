import './App.css'
import * as ai from '@replit/ai'
import React, { useEffect } from 'react';


export default function App() {

  const maxTokens = 1024;
  const model = "chat-bison";
  const temperature = 0.3;

  let parsedConversation: Array<ai.ChatMessage> = [{
    "author": "User:",
    "content": "Hello"
  }]

  const req: ai.ChatOptions = {
    messages: parsedConversation,
    maxOutputTokens: maxTokens,
    model,
    temperature
  }


  useEffect(() => {
    const fetch = async () => {
      let result;
      try {
        result = await ai.chat(req);
      } catch (e) {
        result = { error: e }
      }
      console.log(result)
    }
    fetch();
  }, [])

  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
    </main>
  )
}