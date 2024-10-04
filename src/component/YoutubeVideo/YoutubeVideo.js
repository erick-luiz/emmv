import React from 'react';
import './style.css'

let YoutubeVideo = () =>
    <div className="youtube-video col-12 my-2">
        <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/H2srMg3TkFE"
                title="YouTube video player"
                frameborder="0"
                autoplay
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>

        </iframe>
    </div>


export default YoutubeVideo