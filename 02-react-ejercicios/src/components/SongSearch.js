import React,{useState,useEffect} from 'react'
import Loader from '../assets/loader/Loader'
import { helpHttp } from '../helpers/helpHttp'
import SongDetails from './SongDetails'
import SongForm from './SongForm'

const SongSearch = (e) => {
  
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      if(search === null) return
      const fetchData = async () =>{
        const {artist, song} = search;
        let artisUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
        let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

        console.log(artisUrl,songUrl)
        setLoading(true)
        const [artistRes, songRes] = await Promise.all([
          helpHttp().get(artisUrl), 
          helpHttp().get(songUrl)
        ])
        setLoading(false)
        setBio(artistRes)
        setLyric(songRes)
        console.log(songRes)
      }
      
      fetchData()

    },[search])

    const handleSearch = (data) =>{
        setSearch(data)
    }
 
  return (
    <div>
        <h2>SongSearch</h2>
        <article className='grid-1-3'>
        {loading && <Loader/>}
        <SongForm handleSearch={handleSearch}/>
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio}/>
          )}
        </article>
    </div>
  )
}

export default SongSearch