import React, { useState } from 'react'


export default function TextForm(props) {

    const onclickHandle = () => {
        console.log("clicked on button")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const onclicklowHandle = () => {
        console.log("clicked on low button")
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const onclickclr = () => {
        console.log("clicked on clr button")
        let newText = "";
        setText(newText);
    }

    // const onclickbld=()=>
    // {
    //     console.log("clicked on clr button")
    //     let newText=text;
    //     newText.Style.color='red';
    //     setText(newText);
    // }


    const changeHandle = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("enter your text");
    return (
        <> <div style={{color:props.mode==='light'?'black':'white'}}>
            <div className="container"  >
                <h1>Enter text here:</h1>
                <textarea className="form-control" value={text} onChange={changeHandle}  style={{backgroundColor:props.mode==='light'?'white':'#1d3b59',color:props.mode==='light'?'black':'white'}}  id="boxarea" rows="3"></textarea>
            </div>
            <hr />
            <button className="btn btn-primary" disabled={text.length===0} onClick={onclickHandle}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={onclicklowHandle}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={onclickclr}>Clear</button>
            {/* <button className="btn btn-primary mx-2" onClick={onclickbld}>Bold</button> */}
            <hr />
            <div className="container" >
                <h3>this text summary :</h3>
                {/* <p>No. of words: {text.split(" ").filter((element) => { return element.length !== 0 }).length} , The length of text is: {text.length}</p>  not working in enter spaces */}
                <p>No. of words: {text.split(/\s/).filter((element) => { return element.length !== 0 }).length} , The length of text is: {text.length}</p>
                <p>Time taken to read: {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes </p>
                <hr />
                <h2>Preview:</h2>
                <p>{text}</p>
            </div>
            </div>

        </>
    )
}
