import React from 'react'
import "../styles/LeftMenu.css"
import { Menu } from './Menu';
import {FaSpotify, FaEllipsisH} from "react-icons/fa";
import { BiSearchAlt} from "react-icons/bi";
import { MenuList } from './MenuList';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';

function LeftContainer() {
  return (
    <div className='leftMenu'>
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder='Search...' />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title = {'Menu'} menuObject = {MenuList}/>
      <MenuPlayList />

      <TrackList/>
    </div>
  )
}

export {LeftContainer};