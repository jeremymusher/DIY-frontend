import React from "react";

function VideoPlayer(props){
    
    return(
        <iframe width = "850" height = "480" className = "videoCard" src={`https://www.youtube.com/embed/${props.video_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default VideoPlayer