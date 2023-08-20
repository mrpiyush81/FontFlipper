// import React, { useState } from "react";

export default function About(props) {
    
    let myStyle={
     color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white'
    }
     

     return (
          <div classNameName="container" style={myStyle}>
               <h3>About As</h3>
               <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                         <h2 className="accordion-header" id="headingOne">
                              <button
                                   className="accordion-button"
                                   type="button"
                                   data-bs-toggle="collapse"
                                   data-bs-target="#collapseOne"
                                   aria-expanded="true"
                                   aria-controls="collapseOne"
                                   style={myStyle}
                              >
                                  <strong>Analyze your text</strong> 
                              </button>
                         </h2>
                         <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                         >
                              <div className="accordion-body">
                                  Analyze Your text
                                  FontFlipper gives you a way to analyze your text quickly and efficiently,Be it word count ,character cout or
                              </div>
                         </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                         <h2 className="accordion-header" id="headingTwo">
                              <button
                                   className="accordion-button collapsed"
                                   type="button"
                                   data-bs-toggle="collapse"
                                   data-bs-target="#collapseTwo"
                                   aria-expanded="false"
                                   aria-controls="collapseTwo"
                                   style={myStyle}
                              >
                                  <strong> Free to use</strong>
                              </button>
                         </h2>
                         <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                         >
                              <div className="accordion-body">
                                   Free to use
                                   FontFlipper ia a free character counter tool that provids instant character count & word count statistics for a given 
                                   text.FontFlipper report the number of words and characters.Thus it is suitable for writring text with word/character
                                   limit. 
                              </div>
                         </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                         <h2 className="accordion-header" id="headingThree">
                              <button
                                   className="accordion-button collapsed"
                                   type="button"
                                   data-bs-toggle="collapse"
                                   data-bs-target="#collapseThree"
                                   aria-expanded="false"
                                   aria-controls="collapseThree"
                                   style={myStyle}
                              >
                                  <strong> Browser Compatible </strong> 
                              
                              </button>
                         </h2>
                         <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                         >
                              <div className="accordion-body">
                               Browseer Compatible
                               this word counter software works in any web browers such as Chrome,Firefox,Internet Explorer,safri,opera.
                              </div>
                         </div>
                    </div>
               </div>
               
          </div>
     );
}
