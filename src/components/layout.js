import React from "react"
import { Link } from "gatsby"
import  { BreakpointProvider } from 'react-socks';

export default ({ children }) => (
  <BreakpointProvider>
    <div>
      <nav>
        <Link to="/" className="projects-link" activeClassName="active">
          <p>Projects</p>
        </Link>
        <Link to="/contact" className="contact-link" activeClassName="active">
          <p>Contact</p>
        </Link>
      </nav>
      {children}
    </div>
  </BreakpointProvider>
)

