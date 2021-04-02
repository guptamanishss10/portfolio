import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
 
             <a className="navbar-brand" href="#">Navbar</a>

           <ul className="navbar-nav ml-auto">
             <li className="nav-item active ">
                <a className="nav-link" href="#">Home </a>
             </li>
             </ul>
             <ul  className="navbar-nav ml-auto">
             <li className="nav-item ">
             <a className="nav-link" href="#">Link</a>
             </li>
             </ul>
             <ul  className="navbar-nav ml-auto">
             <li className="nav-item ">
             <a className="nav-link" href="#">Valid</a>
            </li>
            </ul>
  </div>
 
  
</nav>
    )
}

export default Navbar
