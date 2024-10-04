import React from 'react';

let Youtube = () =>
    <div className="col-12 my-2">
    <a href="https://www.youtube.com/watch?v=H2srMg3TkFE"  
    className="btn btn-block btn-primary link-btn link-hover-animation link-btn-rounded  animate__animated animate__infinite animate__pulse animate__delay-2s" 
    style={{background: "#FF0909",color: "#000", "border-width": "0px", "border-color": "#000", "border-style": "solid"}}>
        <div className="link-btn-image-wrapper link-btn-rounded" style={{display: "none"}}>
            <img alt="kldjsflkj lsdkjfl k" src="https://app.ihit.bio/" className="link-btn-image" loading="lazy" />
        </div>

        <svg className="svg-inline--fa fa-youtube fa-w-18 mr-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>

        Assista o clipe no Youtube    </a>
    </div>


export default Youtube