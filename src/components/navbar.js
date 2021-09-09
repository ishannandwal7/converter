import React from 'react';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <a href="#" className="nav-brand">unit converter</a>
                <button className="navbar-toggler " data-toggle="collapse" data-target="#ishan"> <i className="fa fa-bars" ></i></button>
                <div className="collapse navbar-collapse" id="ishan">

                <ul className="navbar-nav" id="lnk">
                    <li className="nav-item active"><a href="#" className="nav-link">home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link disabled">services</a></li>
                    <li className="nav-item"><a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html" className="nav-link">about</a></li>

                </ul>
                </div>
               
            </nav>

        </>
    )
}

export default Navbar;
