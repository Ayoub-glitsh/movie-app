import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API_KEY = '4a3b711b'

export default function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [id])

  if (!movie) return <p>Chargement...</p>

  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Image'

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <img src={poster} alt={movie.Title} style={{ width: 300 }} />

      <div>
        <h1>{movie.Title} ({movie.Year})</h1>
        <p><strong>Genre : </strong>{movie.Genre}</p>
        <p><strong>Acteurs : </strong>{movie.Actors}</p>
        <p><strong>Note IMDB : </strong>{movie.imdbRating}</p>
        <h3>Synopsis</h3>
        <p>{movie.Plot}</p>
      </div>
    </div>
  )
}
