import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import '../Header/Header.css';
import {Link} from 'react-router-dom'
const Header = () => {
    const [inputSearch, setInputSearch] = useState(''); 

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube" className="header__logo" />
                </Link>
            </div>
            <div className="header__input">
                <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} type="text"  placeholder="Search..." />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g8R5VmgqDqpRCwQfw2Y9V-DM-iXS59R9hQ&usqp=CAU" alt="avatar" />
            </div>
        </div>
    )
}

export default Header
