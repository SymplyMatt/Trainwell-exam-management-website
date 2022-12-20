import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
        <div className="container">
            <div className="navbar-translate">
            </div>

            <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="../assets/img/blurred-image-1.jpg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Report a Problem</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Not an Admin?</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav