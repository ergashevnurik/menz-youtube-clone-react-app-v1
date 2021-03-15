import React from 'react';
import '../VideoRow/VideoRow.css';

const VideoRow = ({views, subs, description, channel, timeslamp, title, image}) => {
    return (
        <div className="videoRow">
            <img src={image} alt={title} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headLine">
                    {channel} + <span className="videoRow__subs"><span className="subs__number">{subs}</span> Subscribers</span> {views} views + {timeslamp}
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
