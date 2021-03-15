import { Avatar } from '@material-ui/core'
import React from 'react'
import '../component/VideoCard.css'

const VideoCard = ({image, title, channel, views, timeslamp,channelImage}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="video__info">
                <Avatar className="viewsCard__avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} + {timeslamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
