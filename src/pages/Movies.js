import React, { useState } from 'react'
import SearchForm from '../components/SearchForm'
import MovieCard from '../components/MovieCard'

const API_KEY = '4a3b711b'

export default function Movies() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = (term) => {
    setLoading(true)
    setError(null)

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${term}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === 'True') {
          setResults(data.Search)
        } else {
          setError("Aucun film trouvé")
        }
        setLoading(false)
      })
  }

  return (
    <div>
      <h1>Films</h1>

      <SearchForm onSearch={handleSearch} />

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {results.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}
