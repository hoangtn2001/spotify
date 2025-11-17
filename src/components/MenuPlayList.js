import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { Playlist } from './Playlist'

function MenuPlayList() {
  return (
    <div className='playListContainer'>
        <div className="nameContainer">
            <p>Playlist</p>
            <i> <FaPlus /></i>
        </div>
        <div className="playListScroll">
        {
                Playlist && Playlist.map((list)=>(
                    <div key={list.id} className="playList" >
                        <i className="list">
                            <BsMusicNoteList />
                        </i>
                        <p>{list.name}</p>
                        <i className="trash">
                            <BsTrash />
                        </i>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export  {MenuPlayList}