import React, { useState } from 'react'

/**
 * Props:
 * - onSearch(term) : fonction appelée à la soumission
 */
export default function SearchForm({ onSearch, initial = '' }) {
  const [term, setTerm] = useState(initial)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (term.trim() !== '') onSearch(term.trim())
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Rechercher un film (ex: batman)"
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Rechercher</button>
    </form>
  )
}
