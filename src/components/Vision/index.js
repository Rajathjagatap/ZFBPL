import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './vision.css';


class Vision extends React.Component{
    render(){
        return(
            <div>
                <Header/>

                <div className='col-md-12 text-center container-class' style={{paddingTop:'2vh'}}>
                    <h1 className="title-section"><span class="title-regular">VISION & MISSION</span></h1>
                    <hr className="title-underline-center"></hr>
                </div>
                <div className='col-md-12 container-class' style={{paddingTop:'20px'}}>
                        <p className='font_family_montserrat_bold' style={{fontSize:'25px'}}>VISION</p>
                        <div className='col-md-9 col-sm-12'>
                        <ul className='list-padding'>
                            <li className='font_family_montserrat text-align'>To be a leading value-adding iron ore processing unit and supplier to secondary steel industry</li>
                            <li className='font_family_montserrat text-align'>To ensure sustainable growth of the company by having synergy to all our supplying companies, while following best practice of corporate governance and promoting ecological balance and mineral conservation</li>
                            <li className='font_family_montserrat text-align'>To share developmental benefits with people living in and around our plant, while improving the welfare of employees</li>
                            <li className='font_family_montserrat text-align'>To ensure high level of customer satisfaction, to achieve standards of productivity by scientific mineral processing & adequate thrust on R & D, power consumption, environment standards, preservation of flora & fauna, water resources.</li>
                            <li className='font_family_montserrat text-align'>To expand the mineral process activities in other minerals in & outside our area by acquiring new process system</li>
                        </ul>
                        </div>
                </div>

                <div className='col-md-12 container-class' style={{paddingTop:'20px',marginBottom:'4vh'}}>
                        <p className='font_family_montserrat_bold' style={{fontSize:'25px'}}>MISSION</p>
                        <div className='col-md-9 col-sm-12'>
                        <ul className='list-padding'>
                            <li className='font_family_montserrat text-align'>To transform natural resources into prosperity and sustainable development and recycle of exiting excavated iron ore mineral sources.</li>
                            <li className='font_family_montserrat text-align'>We put safety first in everything we do. We make safety a way of life, inside and outside the work place. We show genuine concern and take responsibility for our own safety and that of others.</li>
                            <li className='font_family_montserrat text-align'> We truly believe that all injuries are preventable.
                             We continually reassess risks and comply with rules and procedure</li>
                        </ul>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Vision;