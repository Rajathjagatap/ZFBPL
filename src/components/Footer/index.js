import React from 'react';
import './footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className='col-md-12 footer'>
               <div style={{textAlign:'center'}}>
                    <p className="text_orange font_family_montserrat" style={{paddingTop:'30px'}}>ZFBPL</p>
                    <p className="text_orange font_family_montserrat">© Copyright 2022. All rights reserved</p>
               </div>
            </div>
        )
    }
}

export default Footer;