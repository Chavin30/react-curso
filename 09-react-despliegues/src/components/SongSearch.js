import React,{useState,useEffect} from 'react'
import Loader from './Loader'
import { helpHttp } from './helpHttp'
import SongDetails from './SongDetails'
import SongForm from './SongForm'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Error from '../pages/Error'
import SongTable from './SongTable'
import SongPage from '../pages/SongPage'

let MySongsInit = JSON.parse(localStorage.getItem("mySongs")) || []

const SongSearch = (e) => {
  
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)
    const [mySongs,setMySongs] = useState(MySongsInit)

    useEffect(()=>{
      if(search === null) return
      const fetchData = async () =>{
        const {artist, song} = search;
        let artisUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
        let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

        
        setLoading(true)
        const [artistRes, songRes] = await Promise.all([
          helpHttp().get(artisUrl), 
          helpHttp().get(songUrl)
        ])
        setLoading(false)
        setBio(artistRes)
        setLyric(songRes)
        
      }
      
      fetchData()
      localStorage.setItem("mySongs",JSON.stringify(mySongs))

    },[search,mySongs])

    const handleSearch = (data) =>{
        setSearch(data)
    }

    const handleSaveSong = () =>{
      let currentSong ={
        search,
        lyric,
        bio
      }
      let songs = [...mySongs,currentSong]
      setMySongs(songs)
      localStorage.setItem('mySongs',JSON.stringify(songs))
      setSearch(null)
    }

    const handleDeleteSong = (id) =>{
      let isDelete = window.confirm(`¿Estas seguro de elimnar la cancion con el id ${id}?`)
      if(isDelete){
        let songs = mySongs.filter((el,index) => index !==id)
        setMySongs(songs)
        localStorage.setItem('mySongs',songs)
      }
    }
 
  return (
    <div>
        <HashRouter basename='canciones'>
          <header>
            <h2>SongSearch</h2>
            <Link to='/'>Home</Link>
          </header>
          {loading && <Loader/>}
          <article className='grid-1-2'>
            <Routes>
              <Route path='/' 
                element={
                  <>
                    <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong}/>
                    <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong}/>
                    {search && !loading && ( 
                      <SongDetails search={search} lyric={lyric} bio={bio}/>
                    )}
                  </>
                } />
                <Route path='/:id' element={<SongPage mySongs={mySongs}/>}/>
                <Route path='*'  element={<Error/>} />
            </Routes>
          </article>
        </HashRouter>
    </div>
  )
}

export default SongSearch