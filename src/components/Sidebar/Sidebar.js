import React from 'react';
import '../Sidebar/Sidebar.css';
import SidebarRow from '../Sidebar/SidebarRow';
import { ExpandMoreOutlined, Home, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, WatchLater, Whatshot, History } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={Home} />
            <SidebarRow title="Tranding" Icon={Whatshot} />
            <SidebarRow title="Subscription" Icon={Subscriptions} />
            <hr />
            <SidebarRow Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your Video" />
            <SidebarRow Icon={WatchLater} title="Watch later" />
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar
