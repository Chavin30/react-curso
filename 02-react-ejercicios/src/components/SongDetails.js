import React from 'react'
import Message from '../assets/Message'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const SongDetails = ({search,lyric,bio}) => {
  if(!lyric || !bio) return null
  return (
    <>
        {lyric.error || lyric.name==='AbortError' ? <Message msg={`Error: no existe la cancion <em>${search.song}</em>`} bgColor="#dc3545"/> : <SongLyrics title={search.song} lyrics={lyric.lyrics}/>}
        {bio.artists ? <SongArtist artist={bio.artists[0]}/> : <Message msg={`Error: no existe el interprete ${search.artist}`} bgColor="#dc3545"/>}
    </>
  )
}

export default SongDetails