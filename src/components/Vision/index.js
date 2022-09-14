import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './vision.css';


class Vision extends React.Component{
    render(){
        return(
            <div>
                <Header/>

                <div className='col-md-12 text-center' style={{paddingRight:'10vw',paddingLeft:'10vw',paddingTop:'2vh'}}>
                    <h1 className="title-section"><span class="title-regular">VISION & MISSION</span></h1>
                    <hr className="title-underline-center"></hr>
                </div>
                <div className='col-md-12' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'20px'}}>
                        <p className='font_family_montserrat_bold' style={{fontSize:'25px'}}>VISION</p>
                        <div className='col-md-9 col-sm-12'>
                        <ul style={{paddingLeft:'3rem'}}>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry</li>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry. To ensure sustainable growth of the company
                            while following best practice of corportae goverance and promoting ecological balance and mineral conservation</li>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry. To ensure sustainable growth of the company
                            while following best practice of corportae goverance and promoting ecological balance and mineral conservation</li>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry. To ensure sustainable growth of the company
                            while following best practice of corportae goverance and promoting ecological balance and mineral conservation</li>
                        </ul>
                        </div>
                </div>

                <div className='col-md-12' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'20px',marginBottom:'4vh'}}>
                        <p className='font_family_montserrat_bold' style={{fontSize:'25px'}}>MISSION</p>
                        <div className='col-md-9 col-sm-12'>
                        <ul style={{paddingLeft:'3rem'}}>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry</li>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry. To ensure sustainable growth of the company
                            while following best practice of corportae goverance and promoting ecological balance and mineral conservation</li>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry. To ensure sustainable growth of the company
                            while following best practice of corportae goverance and promoting ecological balance and mineral conservation</li>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry. To ensure sustainable growth of the company
                            while following best practice of corportae goverance and promoting ecological balance and mineral conservation</li>
                        </ul>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Vision;