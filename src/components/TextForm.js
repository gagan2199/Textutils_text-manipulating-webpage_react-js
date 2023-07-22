import React, {useState} from 'react'


export default function TextForm() {

    const onclickHandle=()=>
    {
        console.log("clicked on button")
        let newText= text.toUpperCase();
        setText(newText);
    }

    const onclicklowHandle=()=>
    {
        console.log("clicked on low button")
        let newText= text.toLocaleLowerCase();
        setText(newText);
    }

    const onclickclr=()=>
    {
        console.log("clicked on clr button")
        let newText= "";
        setText(newText);
    }

    // const onclickbld=()=>
    // {
    //     console.log("clicked on clr button")
    //     let newText=text;
    //     newText.Style.color='red';
    //     setText(newText);
    // }


    const changeHandle=(event)=>
    {
        setText(event.target.value);
    }

    const[text,setText]=useState("enter your text");
  return (
  <>
  <div className="container" >
    <h1>Enter text here:</h1>
    <textarea className="form-control" value={text} onChange={changeHandle} id="boxarea" rows="3"></textarea>
  </div>
  <hr />
   <button className="btn btn-primary" onClick={onclickHandle}>Convert to Upper Case</button>
   <button className="btn btn-primary mx-2" onClick={onclicklowHandle}>Convert to Upper Case</button>
   <button className="btn btn-primary mx-2" onClick={onclickclr}>Clear</button>
   {/* <button className="btn btn-primary mx-2" onClick={onclickbld}>Bold</button> */}
   <hr />
   <div className="container">
    <h3>this text summary :</h3>
    <p>No. of words: {text.split(" ").length} , The length of text is: {text.length}</p>
    <p>Time taken to read: {0.008 * text.split(" ").length} minutes </p>
    <hr />
    <h2>Preview:</h2>
    <p>{text}</p>


   </div>

   </>
  )
}
