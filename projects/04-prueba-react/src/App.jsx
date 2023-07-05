import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Characters from './components/Characters'
import Pagination from './components/Pagination'
import './app.css'





function App() {
  const [characters, setCharacters] = useState([])

  const [info, setInfo] = useState({})

  const initialUrl = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
  }

  const onPrev = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)

  }



  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])



  return (
    <>
      <div className='bg-gray-900 '>
        <Navbar brand={"Rick and Morty API"} />
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
      </div>

    </>
  )
}

export default App
