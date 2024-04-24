import { useState } from "react";
import './App.css'


function App() {
const[text, setText] = useState("");

  const textChange = (e)=>{
    setText(e.target.value);
  }

  const uppercase = ()=>{
    const toUppercase = text.toUpperCase();
    setText(toUppercase);
  }

  const lowercase = ()=>{
    const toLowercase = text.toLowerCase();
    setText(toLowercase);
  }

  const clearText = ()=>{
    setText("");
  }

  const copyText = ()=>{
    navigator.clipboard.writeText(text)
    .then(()=>{
      alert("Text Copied");
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const removeExtra = ()=>{
    let length = text.length;
    let ans = "";
    for(let i=1; i<length; i++){
      if(text[i]===" " && text[i-1]===" "){
        continue;
      }
      else{
        ans += text[i-1];
      }
    }

    setText(ans);
  }



  return (
    <div className="App">
      <h1 className="heading">Text Editor</h1>


      <section className="textArea_section">
      <label htmlFor="text" className="text-base font-semibold">Enter Your Text Here:</label><br/><br/>
      <textarea id="text" name="" rows={10} cols={90} className="border-2 border-black " value={text} onChange={textChange}>{text}</textarea>
      </section>
      <br/>
      <br/>
      <br/>
      <section className="button">
      <button onClick={uppercase}>Uppercase</button>
      <button onClick={lowercase}>Lowercase</button>
      <button onClick={clearText}>Clear Text</button>
      <button onClick={copyText}>Copy to Clipbord</button>
      <button onClick={removeExtra}>Remove Extra space</button>
      </section>
    </div>
  );
}

export default App;
