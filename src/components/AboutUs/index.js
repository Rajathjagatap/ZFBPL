import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './aboutus.css'


class AboutUs extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <Header/>
                {/* <div className='col-md-12'> */}
                <div className='col-md-12 text-center container-class'>
                    <h1 className="title-section"><span class="title-regular">ABOUT US</span></h1>
                    <hr className="title-underline-center"></hr>
                    <p class="lead font_family_montserrat" style={{marginTop:'20px'}}>Zest Ferro Beneficiation Private Limited started as a Beneficiation process plant comprising Trading and Transportation . The company has grown into one of the most consistent and prominent players in the Mining Industry. The company has focused on business diversification and expansion which has significantly boosted its performance over the last 12 years. The company has grown into stages with a lot of efforts, without losing confidence with an intention to start an industry for self employment and provide jobs to the deprived residents of the local area.
                    We ensure sustainable growth of the company by following corporate governance and ecological balance.</p>
                    <p class="lead font_family_montserrat">Our management team comprises a mixed pool of industry professionals from various fields such as Mining & Geology, Finance & Strategy , Mechanical and Human Resources. After making successful efforts to improve the standards of business activity and to avoid environmental pollution of fine particles of manganese and iron ores, we have erected a Beneficiation Plant in the year 2011-2012, to utilize the natural resources fully without causing environmental damage and supply to various steel industries at the most competitive rates.
                    We put safety first in everything we do. We make safety a way of life, inside and outside the work place.</p>
                
                <div className="row col-md-12" style={{marginTop:'10vh'}}>
                    
                        <div className="col-md-3 col-sm-6">
                            <div>
                                <i class="fa fa-desktop"></i>
                                <label style={{fontWeight:800}}><strong style={{fontSize:'52px'}}>100</strong>
                                    <br/>Capacity</label>
                                <p className='font_family_montserrat'>The beneficiation plant has capacity of 100 Tons per hour .</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div>
                                <i class="fa fa-user"></i>
                                <label style={{fontWeight:800}}><strong style={{fontSize:'52px'}}>15</strong>
                                    <br/>Experience</label>
                                <p className='font_family_montserrat'>Has process, technical team with 15 years experience in the beneficiation
                                    process.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div>
                                <i className="fa fa-code"></i>
                                <label style={{fontWeight:800}}><strong style={{fontSize:'52px'}}>6</strong>
                                    <br/>Bore Wells</label>
                                <p className='font_family_montserrat'>The complete plant has 6 BoreWells with good water level </p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div>
                                <i className="fa fa-trophy"></i>
                                <label style={{fontWeight:800}}><strong style={{fontSize:'52px'}}>25</strong>
                                    <br/>Mining Leases</label>
                                <p className='font_family_montserrat'>The plant is in the core mining area, surrounded by 25 mining leases with in radius of 20 kms .</p>
                            </div>
                        </div>
                  
                </div>
                <div class="row">
                    <div class="container col-md-6">
                        <div class="row">
                            <div class="spotlight-container" style={{textAlign:'left'}}>
                                <h2 class="title-section text_orange"><span class="title-regular">COMPANY</span><br/>MILESTONE</h2>
                                <hr class="title-underline-center" style={{margin:'inherit'}}/>
                                <ul style={{paddingTop:'3vh',paddingLeft:'10px',marginRight:'20px'}}>
                                <li style={{fontSize:'16px',textAlign:'justify'}} className="font_family_montserrat"> For a period of 4 years up to 2008-09, firm was active in MineralTrading.</li>
                                <li style={{fontSize:'16px', textAlign:'justify'}} className="font_family_montserrat"> Firm started their own stock yard in 2009-10 </li>
                                <li style={{fontSize:'16px', textAlign:'justify'}} className="font_family_montserrat"> For a period of 2 years up to 20010-011, firm was active in Dry mineral process (Crushing Activity)  </li>
                                <li style={{fontSize:'16px'}} className="font_family_montserrat"> Started own project of Beneficiation plant in the year 2011-12 </li>
                                <li style={{fontSize:'16px', textAlign:'justify'}} className="font_family_montserrat"> Started an aggregate stone quarry with complete crushing set up , supplying
                                    aggregate material of 40 mm 20 mm 12mm and dust to various client. 2014-15. </li>
                                </ul>
                                {/* <!-- <a href="#" class="btn btn-primary">More Information</a> --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 spotlight-img-cont"> <img src={require("../../assets/cover-pic.png")} alt="cover-pic" style={{width:'100%', height:'100%'}}/></div>
                </div>

                <div class="row" style={{marginTop:'3vh'}}>
                <div class="col-md-6 col-md-pull-6 spotlight-img-cont"><img src={require("../../assets/cover-pic4.jpeg")} alt="cover-pic" style={{width:'100%', height:'100%'}}/> </div>
                    <div class="container col-md-6 col-md-push-6" style={{padding:'20px'}}>
                        <div class="row">
                            <div class="spotlight-container" style={{textAlign:'left'}}>
                                <h2 class="title-section text_orange"><span class="title-regular">COMPANY</span><br/>SPOTLIGHT</h2>
                                <hr class="title-underline-center" style={{margin:'inherit'}} />
                                <ul style={{paddingTop:'3vh',paddingLeft:'10px',marginRight:'20px'}}>
                                <li style={{fontSize:'16px',textAlign:'justify'}} className="font_family_montserrat"> Started job work to produce M-SAND for various construction , road projects and other sites . We have the complete solution to produce M-SAND on both dry and wet process 2015-16.</li>
                                <li style={{fontSize:'16px',textAlign:'justify'}} className="font_family_montserrat"> Traded in Iron scrape, aluminium scrape, coal, dolomite and lime stone</li>
                                <li style={{fontSize:'16px',textAlign:'justify'}} className="font_family_montserrat"> Done R&D on iron ore processing equipments and the various economical process for the iron ore beneficiation, developed own design equipments.</li>
                                <li style={{fontSize:'16px',textAlign:'justify'}} className="font_family_montserrat"> The Beneficiation Plant erection and commissioning started in 2018-19 and Commercial operations started from August 2020. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-md-6 col-md-pull-6 spotlight-img-cont"><img src={require("../../assets/cover-pic.png")} alt="cover-pic" style={{width:'100%', height:'100%'}}/> </div> */}
                </div>

                
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;