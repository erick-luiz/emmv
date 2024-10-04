import React from "react";

function Logo() {
  return (
    <div className="row">
        <div id="link-verified-wrapper-top" className="col-12 my-2 text-center" style={{display: "none"}}>
            <div></div>
        </div>

    
        <div data-biolink-block-id="11551" className="col-12 my-2">
            <div className="d-flex flex-column align-items-center">
                <img src="./images/logo-1.png" alt="Avatar"
                    className="link-image link-avatar-rounded"
                    style={{width: "250px", height: "250px", "border-width": "0px", "border-color": "#000", "border-style": "solid"}} />
            </div>
        </div>
    </div>
  );
}

export default Logo;