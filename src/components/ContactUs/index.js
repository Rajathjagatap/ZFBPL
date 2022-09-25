import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './contact.css';

class ContactUs extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='col-md-12 text-center' style={{paddingRight:'10vw',paddingLeft:'10vw',paddingTop:'2vh'}}>
                    <h1 className="title-section"><span class="title-regular">CONTACT US</span></h1>
                    <hr className="title-underline-center"></hr>
                    <p className='font_family_montserrat' style={{fontSize:'20px', marginTop:'5vh'}}>We Would Love to connect with People like you!</p>
                </div>
                <div className='col-md-12 row' style={{marginBottom:'5vh', marginTop:'5vh'}}>
                    <div className='col-md-6 address'>
                        <p className='font_family_montserrat_bold'style={{fontSize:'20px'}}>Say Hello!</p>
                        
                        <div><i class="fa fa-mobile" aria-hidden="true"><span className="font_family_montserrat" style={{color:'black',fontSize:'16px',marginBottom:'10px',marginLeft:'10px'}}>+91 1234567890</span></i></div>
                        <div style={{marginTop:'10px'}}><i class="fa fa-map-marker" aria-hidden="true"><span className="font_family_montserrat" style={{color:'black',fontSize:'16px',marginLeft:'10px'}}>
                        Sy No: 121/B , Py No: 114 , 18 Hullikunte Villages , Nandhihalli Road , Sandur – 583119, Bellari-Dist , Karnataka .
</span></i></div>

                        <div style={{marginTop:'10px'}}><i class="fa fa-envelope" style={{fontSize:'30px'}} aria-hidden="true"><span className="font_family_montserrat" style={{color:'black',fontSize:'16px',marginLeft:'10px'}}>zfbpl@gmail.com</span></i></div>

                    </div>
                    <div className='col-md-6 email'>
                                <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}> Write to Us!</p>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="usr" placeholder="NAME"/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="email" placeholder="EMAIL"/>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="5" id="message" placeholder="MESSAGE"></textarea>
                                </div>
                                <button type="button" class="btn btn-default" style={{backgroundColor:'#ff5800',color:'#fff'}}onclick="sendEmail()">SEND <i class="fa fa-envelope" style={{display:'inline-block',color:'#fff',fontSize:'23px'}}></i></button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactUs;