import React from 'react'

const Footer = () => {
    let yr=new Date().getFullYear();
    return (
        <>
        <div id="ffoot">

        <div className="rowe">
            <div className="cole">
                <h3>site map </h3>
            </div>
            <div className="cole"> 
            <h3>social </h3></div>
        </div>
        <div className="rowe">
            <div className="cole">
                <a href="#" className="active">home</a>
            </div>
            <div className="cole">

                <i className="fa fa-instagram"></i>
                    <a href="https://www.instagram.com/ishan_nandwal/">instagram</a>
            </div>
        </div>
        
        <div className="rowe">
            <div className="cole">
                <a href="#">services</a>
            </div>
            <div className="cole">

                <i className="fa fa-envelope"></i>
                    <a href="mailto:ishannandwal7@gmail.com">email</a>
            </div>
        </div>
        <div className="rowe">
            <div className="cole">
                <a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html">about</a>
            </div>
            <div className="cole">

                <i className="fa fa-linkedin"></i>
                    <a href="www.linkedin.com/in/ishan-nandwal">linedin</a>
            </div>
        </div>
        
        <p>
        ©  ishan nandwal {yr}
        </p>
        
        </div>
        {/* <div id="ffoot">

          <div className="right-side">
              <h3>site map:</h3>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#" className="disabled"> service</a></li>
                  <li><a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html">about</a></li>

              </ul>
          </div>
          <div className="left-side">
              <h3>social :</h3>
              <ul>
                  <li>
                  <div className="row">
                      <div className="col">
                      <i className="fa fa-instagram"></i> 
                      </div>
                      <div className="col">
                      <a href="#">instagram</a>
                      </div>
                  </div>

                  </li>
                  <li>
                  <div className="row">
                      <div className="col">
                      <i className="fa fa-linkedin"></i> 
                      </div>
                      <div className="col">
                      <a href="#">linkedin</a>
                      </div>
                  </div>

                  </li>  <li>
                  <div className="row">
                      <div className="col">
                      <i className="fa fa-envelope"></i> 
                      </div>
                      <div className="col">
                      <a href="#">email</a>
                      </div>
                  </div>

                  </li>
                                 
                

                  
              </ul>
          </div>
        </div> */}
        </>
    )
}

export default Footer
