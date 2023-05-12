import Counter from "./Components/Counter.js";
import Form from "./Components/Form.js"
import Form1 from "./Components/Form1.js"
import Counter1 from "./Components/Counter1.js";
import React, { useState } from "react";

const App = () => {

  let [text, setText] = useState("")

  return (
    <div className="app">
      <Counter />
      <br />
      <Form />
      <br />
      <div>
        <Form1 updateText={setText} />
        <p>{text}</p>
      </div>
      <div>
        <Counter1 />
      </div>
    </div>
  )
}

export default App;