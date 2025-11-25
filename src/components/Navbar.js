import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const active = (p) => (location.pathname === p ? { fontWeight: '700' } : {})

  return (
    <nav style={{
      display: 'flex',
      gap: '16px',
      padding: '12px 20px',
      borderBottom: '1px solid #eee',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: '700' }}>Movie App</div>
      <Link to="/" style={active('/')}>Home</Link>
      <Link to="/movies" style={active('/movies')}>Movies</Link>
      <Link to="/about" style={active('/about')}>About</Link>
    </nav>
  )
}
