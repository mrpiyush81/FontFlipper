import React from "react";

function Alert(props) {
     const cpiatlazed = (word) => {
          const lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
     };
     return (
          <div style={{height:'30px'}}>
        { props.alert && <div
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
               >
                     <strong>{cpiatlazed(props.alert.type)} :: </strong>
                    {props.alert.msg}
               </div> }
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
               </div>
          )
     
}

export default Alert;
