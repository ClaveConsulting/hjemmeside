import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ children }) => (
  <header
    style={{
      background: `#005550`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#FBE8D8`,
            textDecoration: `none`,
          }}
        >
          {children}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  children: PropTypes.string,
}

export default Header
