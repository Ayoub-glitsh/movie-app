import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const TREND_IDS = ['tt0111161', 'tt0068646', 'tt0468569', 'tt0167260']
const API_KEY = '4a3b711b'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(
      TREND_IDS.map(id =>
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
          .then(res => res.json())
      )
    ).then(data => {
      setMovies(data)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <h1>Accueil</h1>
      <p>Films en tendance :</p>

      {loading && <p>Chargement...</p>}

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {movies.map(m => <MovieCard key={m.imdbID} movie={m} />)}
      </div>
    </div>
  )
}
