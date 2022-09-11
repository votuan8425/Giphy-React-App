import React from 'react'
import Logo from '../../images/giphyLogo.png'
import Avatar from '../../images/avatar.png'
import './header.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { KeyboardArrowDown } from '@mui/icons-material';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to={"/home"}><img className='logo-header' src={Logo} alt="" /></Link>
      <div className="menu">
        <div className="button-wrapper reactions">
          <div className="menu-button hover-reactions">
            <h2>Reactions</h2>
          </div>
        </div>
        <div className="button-wrapper entertainment">
          <div className="menu-button hover-entertainment">
            <h2>Entertainment</h2>
          </div>
        </div>
        <div className="button-wrapper sports">
          <div className="menu-button hover-sports">
            <h2>Sports</h2>
          </div>
        </div>
        <div className="button-wrapper stickers">
          <div className="menu-button hover-stickers">
            <h2>Stickers</h2>
          </div>
        </div>
        <div className="button-wrapper artists">
          <div className="menu-button hover-artists">
            <h2>Artists</h2>
          </div>
        </div>
        <div className="button-wrapper moreverticon">
          <div className="menu-button hover-moreverticon">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="button">
        <h2>Upload</h2>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div>
      <div className="profile">
        <img src={Avatar} alt="" />
        <h2>Yun</h2>
        <h2>Key</h2>
        <KeyboardArrowDown className='icon-header'/>
      </div>

    </div>
  )
}

export default Header