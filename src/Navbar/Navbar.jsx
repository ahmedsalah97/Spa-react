
import { Link, NavLink } from "react-router-dom";

export function Navbar()
{
    return<>
    <nav className="navbar navbar-expand-lg p-4 ">
  <div className="container-fluid ">
    <Link className="navbar-brand text-white" to="/"><h3 className="text-white ms-5 fw-bold">START FRAMEWORK</h3>
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white mx-5" id="navbarTogglerDemo02">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item mx-2">
            <NavLink className={(x)=> x.isActive == true? "nav-link test" : "nav-link"} to="about"> <h5 className="text-white">About</h5></NavLink>
        </li>
        <li className="nav-item mx-2">
            <NavLink className={(x)=> x.isActive == true? "nav-link test" : "nav-link"} to="portfolio"> <h5 className="text-white">Portfolio</h5></NavLink>
        </li>
        <li className="nav-item mx-2">
            <NavLink className={(x)=> x.isActive == true? "nav-link test" : "nav-link"}to="contact"> <h5 className="text-white">Contact</h5></NavLink>
        </li>
        
      
      </ul>
     
    </div>
  </div>
</nav>
    
    </>
}
