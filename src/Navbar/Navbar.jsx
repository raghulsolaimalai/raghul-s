import React from "react";
import './Navbar.css';
function Navbar()
{
    return(
        <div>
    <nav class="navbar">
          <a href="#" class="logo">ADOPT A PET</a>
          <ul class="nav-list">
            <li><a href="">Home</a></li>
            <li><a href="#">Animals</a></li>
            <li><a href="#">MyProfile</a></li>
            <li><a href="Login">Login</a></li>
            <li><a href="Signup">Signup</a></li>
          </ul>
      </nav> 
          </div>
    );
}
export default Navbar;