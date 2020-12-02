import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Routing Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">All</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
