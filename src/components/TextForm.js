import React, {useState} from 'react'


export default function TextForm() {
    const onclickHandle=()=>
    {
        console.log("clicked on button")
        let newText= text.toUpperCase();
        setText(newText);
    }

    const changeHandle=(event)=>
    {
        setText(event.target.value);
    }

    const[text,setText]=useState("enter your text");
  return (
  <>
  <div className="mb-3">
    <h1>Enter text here:</h1>
    <textarea className="form-control" value={text} onChange={changeHandle} id="boxarea" rows="3"></textarea>
  </div>
   <button className="btn btn-primary" onClick={onclickHandle}>Convert to Upper Case</button>
   </>
  )
}
