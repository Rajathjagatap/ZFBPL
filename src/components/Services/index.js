import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Services extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='col-md-12 text-center' style={{paddingRight:'10vw',paddingLeft:'10vw',paddingTop:'2vh'}}>
                    <h1 className="title-section"><span class="title-regular">SERVICES</span></h1>
                    <hr className="title-underline-center"></hr>
                </div>

                <div className='col-md-12 row' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Iron Ore Benefication</p>
                        <p className='font_family_montserrat' style={{textAlign:'justify'}}>A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.
                        A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic.png")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>

                <div className='col-md-12 row' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Manganese Ore Beneficiation</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.
                        A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic2.png")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>

                <div className='col-md-12 row' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trade & Supply of Iron Ore & Manganese Ore .</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.
                        A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic3.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>
                <div className='col-md-12 row' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trading of Sponge Iron,Slag Sand,Manganese Ore, Quartz</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.
                        A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic4.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>
                <div className='col-md-12 row' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'5vh'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trade and process of Manganese Oxide.</p>
                        <p className='font_family_montserrat'  style={{textAlign:'justify'}}>A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.
                        A process adapt to up grade ore is called Beneficiation. Iron Ore is up graded to higher iron content through concentration. Iron ore is beneficiated to all around the world to meet the quality requirement of large steel industries.</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={require("../../assets/cover-pic5.jpeg")} alt="" style={{width:'100%',height:'200px'}}/>
                    </div>
                </div>
                <div className='col-md-12 row' style={{paddingRight:'10vw',paddingLeft:'10vw', paddingTop:'5vh', marginBottom:'20px'}}>
                    <div className='col-md-9'>
                        <p className='font_family_montserrat_bold' style={{fontSize:'20px'}}>Trading of Iron ore scrap Domestic and Import of scrapn</p>
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