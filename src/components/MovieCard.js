import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Props:
 * - movie : objet retourné par OMDb (Title, Year, Poster, imdbID)
 */
export default function MovieCard({ movie }) {
  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Poster'
  return (
    <div style={{
      width: 200,
      border: '1px solid #ddd',
      borderRadius: 8,
      overflow: 'hidden',
      background: '#fff'
    }}>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={poster} alt={movie.Title} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
        <div style={{ padding: '8px' }}>
          <div style={{ fontWeight: '700', fontSize: 14 }}>{movie.Title}</div>
          <div style={{ color: '#555', fontSize: 13 }}>{movie.Year}</div>
        </div>
      </Link>
    </div>
  )
}
