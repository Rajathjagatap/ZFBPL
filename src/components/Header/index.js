import React from 'react';
import './header.css';

class Header extends React.Component{

  
    render(){
        return(
          <div>
            <div className='leaves' style={{width:'100%'}}></div>
          <nav class="navbar navbar-expand-lg navbar-light nav-bg py-lg-0"  style={{borderBottom: '0.5px solid', borderBottomColor: '#D3D3D3',flexWrap:'wrap'}}>
              <div className='navbar-logo-name'>
              <a class="navbar-brand" href="/"> <img
                  src={require("../../assets/logo.png")}
                  alt=""
                  className="d-inline-block align-text-top logo"
                /></a>
                <p className='header-font header-font-size' style={{alignSelf:'center',color:'#880015',marginTop:'10px'}}>ZEST FERRO BENEFICATION PRIVATE LIMITED , SANDUR <br/><p className="header-font" style={{fontSize:'18px'}}>Iron & Manganese Beneficiation Plant<span style={{fontSize:'17px',float:'right',fontFamily:'Charmonman', color:'black',marginTop:'4px'}}>Never Ending Zeal</span></p></p>
                {/* <p  style={{alignSelf:'center', fontFamily:'Dancing Script'}}>Never Ending Zeal</p> */}
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse header-list" id="navbarResponsive">
                <ul class="navbar-nav ms-auto" style={{marginRight:'10px'}}>
                  <li class="nav-item" id="home">
                    <a class="nav-link header-font txt" href="/">HOME
                    </a>
                  </li>
                  <li class="nav-item" id="about" >
                    <a class="nav-link txt header-font"  href="/aboutus" >ABOUT US</a>
                  </li>
                  <li class="nav-item" id="vision">
                    <a class="nav-link txt header-font"  href="/vision" >VISION</a>
                  </li>
                  <li class="nav-item" id="csr">
                    <a class="nav-link txt header-font" href="/csr" >CSR</a>
                  </li>
                  <li class="nav-item" id="services">
                    <a class="nav-link txt header-font" href="/services" >SERVICES</a>
                  </li>
                  <li class="nav-item" id="contact">
                    <a class="nav-link txt header-font"  href="/contactus" >CONTACT US</a>
                  </li>
                </ul>
          
            </div>
          </nav>
          </div>

        // <nav class="navbar navbar-expand-lg navbar-light bg-light py-lg-0">
          

        // <a class="navbar-brand" href="/"> <img
        //     src={require("../../assets/logo.png")}
        //     alt=""
        //     width="100"
        //     height="100"
        //     className="d-inline-block align-text-top"
        //     style={{marginLeft:'20px',padding:'15px'}}
        //   /></a>
        //   <p className='font_family_montserrat text_orange' style={{fontSize:"20px", fontWeight:800}}>Zest Ferro Benefication Pvt Ltd</p>
        // <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        //   <span class="navbar-toggler-icon"></span>
        // </button>
        // <div class="collapse navbar-collapse" id="navbarResponsive">
        //   <ul class="navbar-nav ms-auto" style={{marginRight:'10px'}}>
        //     <li class="nav-item" id="home">
        //       <a class="nav-link font_family_montserrat" href="/">HOME
        //       </a>
        //     </li>
        //     <li class="nav-item" id="about">
        //       <a class="nav-link font_family_montserrat"  href="/aboutus">ABOUT US</a>
        //     </li>
        //     <li class="nav-item" id="vision">
        //       <a class="nav-link font_family_montserrat"  href="/vision">VISION</a>
        //     </li>
        //     <li class="nav-item" id="csr">
        //       <a class="nav-link font_family_montserrat"  href="/services">CSR</a>
        //     </li>
        //     <li class="nav-item" id="services">
        //       <a class="nav-link font_family_montserrat"  href="/services">SERVICES</a>
        //     </li>
        //     <li class="nav-item" id="contact">
        //       <a class="nav-link font_family_montserrat"  href="/contactus">CONTACT US</a>
        //     </li>
        //   </ul>

        // </div>
        // </nav>
                      
        )
    }
}

export default Header;