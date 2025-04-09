import React, { useState } from 'react'

export const Form = () => {
    const [question, setQuestion] = useState("");
  const askQuestion = (e) => {
    e.preventDefault();
    setQuestion('');
    console.log(question);
  };
  return (
    <div>
        <form
            className="bg-zinc-800 w-1/2 text-white m-auto border border-zinc-400  rounded-4xl flex"
            onSubmit={askQuestion}
          >
            <input
              type="text"
              value={question}
              placeholder="Ask me anything.."
              className="w-full h-full p-3 outline-none"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="px-3 cursor-pointer">Ask</button>
          </form>
    </div>
  )
}
