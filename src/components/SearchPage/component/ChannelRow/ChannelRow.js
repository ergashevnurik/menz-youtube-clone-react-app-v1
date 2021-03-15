import { Avatar } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import React from 'react';
import '../ChannelRow/ChannelRow.css'

const ChannelRow = ({image, channel, subs, numberOfVideos, verified, description}) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt={channel} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutline />}</h4>
                <p>
                    {subs} subscribers + {numberOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
