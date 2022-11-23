import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {

      



    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const handleClear= ()=>{
      
      setText("")
    }
    const Copy= ()=>{
      navigator.clipboard.writeText(text);
      setText("")
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }

    const [text, setText] = useState(''); 
    
    return (
        <>
        <div className="container"> 
            <h1>Enter the text to analyze below</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={Copy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
