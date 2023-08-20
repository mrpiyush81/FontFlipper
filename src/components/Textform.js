import React, { useState } from "react";

export default function Textform(props) {
     const handleUpclick = () => {
          console.log("upper case was click" + text);
          let newtext = text.toUpperCase();
          setText(newtext);
          props.showalert("Converted to uppercase!", "success");
     };
     const handlelowclick = () => {
          console.log("upper case was click" + text);
          let newtext = text.toLowerCase();
          setText(newtext);
          props.showalert("Converted to Lowercase!", "success");
     };
     const handleitalicclick = () => {
          // console.log(" "+text);
          const ita = document.getElementById("italic");
          const ak = document.getElementById("mybox");
          if (ak.style.fontStyle !== "italic") {
               props.showalert("Converted to italic!", "success");
               ak.style.fontStyle = "italic";
               ita.innerHTML = "convert to normal";
          } else {
               props.showalert("Converted to Normal!", "success");
               ak.style.fontStyle = "normal";
               ita.innerHTML = "convert to italic";
          }
     };
     const handleclear = () => {
          // console.log(" "+text);
          let newtext = " ";
          setText(newtext);
          props.showalert("Text  Cleared!", "success");
     };
     const handlecopy = () => {
          // console.log(" "+text);

          const taxt = document.getElementById("mybox");
          taxt.select();
          navigator.clipboard.writeText(taxt.value);
          document.getSelection().removeAllRanges();
          props.showalert("copied to clipboard", "success");
     };
     const handleremove = () => {
          // console.log(" "+text);

          props.showalert("Extra space removed!", "success");

          let newtext = text.split(/[ ]+/);
          setText(newtext.join(" "));
     };

     const onchangeUp = (event) => {
          console.log("upper case was change");
          setText(event.target.value);
     };

     const [text, setText] = useState("");

     return (
          <>
               <div
                    className="container"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
               >
                    <h1>{props.hading} -</h1>
                    <div className="mb-3">
                         <textarea
                              className="form-control"
                              onChange={onchangeUp}
                              value={text}
                              id="mybox"
                              rows="8"
                              style={{
                                   backgroundColor:
                                        props.mode === "dark"
                                             ? "black"
                                             : "white",
                                   color:
                                        props.mode === "dark"
                                             ? "white"
                                             : "black",
                              }}
                         ></textarea>
                    </div>
                    <button disabled={text.length===0}
                         className="btn btn-primary my-1 mx-1"
                         onClick={handleUpclick}
                    >
                         Convert to Uppercase
                    </button>
                    <button disabled={text.length===0}
                         className="btn btn-primary my-1 mx-1"
                         onClick={handlelowclick}
                    >
                         Convert to lowercase
                    </button>
                    <button disabled={text.length===0}
                         className="btn btn-primary my-1 mx-1"
                         id="italic"
                         onClick={handleitalicclick}
                    >
                         convert to italic
                    </button>
                    <button disabled={text.length===0}
                         className="btn btn-primary my-1 mx-1"
                         onClick={handleclear}
                    >
                         clear
                    </button>
                    <button disabled={text.length===0}
                         className="btn btn-primary my-1 mx-1"
                         onClick={handlecopy}
                    >
                         copy
                    </button>
                    <button disabled={text.length===0}
                         className="btn btn-primary my-1 mx-1"
                         onClick={handleremove}
                    >
                         Remove Space
                    </button>
               </div>

               <div
                    className="container1"
                    style={{
                         color: props.mode === "dark" ? "white" : "black",
                         borderColor: props.mode === "dark" ? "white" : "black",
                    }}
               >
                    <h2>your text summary</h2>
                    <h4>
                         {
                              text.split(/\s+/).filter((element) => {
                                   return element.length !== 0;
                              }).length
                         }
                         words,{text.trim().length} characters
                    </h4>
                    <h4>
                         {0.008 *
                              text.split(" ").filter((element) => {
                                   return element.length !== 0;
                                   }).length}{' '}
                         Minutes read{" "}
                    </h4>
                    <h4>Preview</h4>
                    <p>
                         {text.length > 0 ? text : "Enter Somthing preview it here"}
                    </p>
               </div>
          </>
     );
}
