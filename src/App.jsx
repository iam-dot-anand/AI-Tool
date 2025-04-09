import { useState } from "react";
import "./App.css";
import URL from "./assets/URL";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async (e) => {
    e.preventDefault();
    const payload = {
      contents: [
        {
          parts: [{ text: question }],
        },
      ],
    };

    try {
      let result = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      result = await result.json();
      setAnswer(result.candidates[0].content.parts[0].text);
      console.log(result.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching answer:", error);
    }
    setQuestion('');
  };

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1 bg-zinc-800">01</div>
      <div className="col-span-4">
        <div className="container h-9/10 overflow-scroll">
          <div className="text-white">
            {answer ? answer : "Hi Folks, Ask me anything.."}
          </div>
        </div>
        <div className="">
          <form
            className="bg-zinc-800 w-1/2 text-white m-auto border border-zinc-400 rounded-4xl flex"
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
      </div>
    </div>
  );
}

export default App;
