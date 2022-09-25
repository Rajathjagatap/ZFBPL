import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';

class Services extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='col-md-12 text-center container-class' style={{paddingTop:'2vh'}}>
                    <h1 className="title-section"><span class="title-regular">SERVICES</span></h1>
                    <hr className="title-underline-center"></hr>
                </div>

                <div className='col-md-12 row container-class' style={{paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Iron Ore Benefication</p>
                        <p className='font_family_montserrat' style={{textAlign:'justify'}}>A process adapted to upgrade ore is called Beneficiation. Iron Ore is upgraded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries. 
                        Our beneficiation plant has a capacity of 100 Tons per hour by which we can easily achieve the demands of the customer. We have sufficient import of raw material sources from 60 active mines in Bellary district.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic.png")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>

                <div className='col-md-12 row container-class' style={{paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Manganese Ore Beneficiation</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>A process adapted to upgrade ore is called Beneficiation. Manganese Ore is upgraded to higher manganese content through concentration. Manganese ore is beneficiated to all around the world to meet the quality requirement of large steel industries. We have sufficient import of required raw material source from 5 major manganese ore mines which are located in karnataka and they are very much closer to plant.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic2.png")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>

                <div className='col-md-12 row container-class' style={{paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trade & Supply of Iron Ore & Manganese Ore .</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>We have expertise in offering well graded manganese and iron ore. The manganese ore and iron ore is prepared and set according to industrial guidelines and client’s expectations. We assure and ensure consignment is delivered on time on a priority basis. We ensure provided ore is of high quality, meets required quantity and delivered with authenticity. We have location advantage when compared to others as around 25 mines are in surrounding to our plant with in 10 Kms.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic3.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>
                <div className='col-md-12 row container-class' style={{paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trading of Sponge Iron, Slag Sand, Manganese Ore & Quartz</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>We have expertise in offering well graded Sponge Iron, Slag Sand and Quartz. The required components are prepared and set according to industrial guidelines and client’s expectations. We assure and ensure consignment is delivered on time on a priority basis. We ensure provided ore is of high quality and authenticity.
                        There are sufficient sponge iron plants, integrated steel plants and pelletisation plants available.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic4.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>
                <div className='col-md-12 row container-class' style={{paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Transportation</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>We offer quick and better transportation service to assure and ensure timely delivery and enhance reach ability. We provide transportation through both roadways as well as railways. We ensure consignment is reached on time and intact. Customer are our first priority and we do not compromise on authenticity of the consignments and required quantity for the clients. </p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic5.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>
                <div className='col-md-12 row container-class' style={{paddingTop:'5vh', marginBottom:'20px'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trading of Iron ore scrap Domestic and Import of scrap</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.
                        A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic6.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>

                <Footer/>
            </div>

        );
    }
}

export default Services;