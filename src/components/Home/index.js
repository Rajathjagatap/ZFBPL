import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Home extends React.Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="col-md-12 row" style={{marginTop:'2vh'}}>
          <div className="col-md-8 col-sm-12">
            <Carousel showThumbs={false}  infiniteLoop={true} autoPlay={true}>
              <div style={{height:'100%'}}>
                <img src={require("../../assets/cover-pic.png")} style={{height:'100%'}} alt="cover-pic"/>
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div style={{height:'100%'}}>
                <img src={require("../../assets/cover-pic2.jpeg")} style={{height:'100%'}} alt="cover-pic2"/>
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div style={{height:'100%'}}>
                <img src={require("../../assets/cover-pic3.jpeg")}style={{height:'100%'}}  alt="cover-pic3"/>
                {/* <p className="legend">Legend 3</p> */}
              </div>
              <div style={{height:'100%'}}>
                <img src={require("../../assets/cover-pic4.jpeg")} style={{height:'100%'}} alt="cover-pic3"/>
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
          <div className="col-md-4 col-sm-12 font_family_montserrat">
            <p style={{textAlign:'justify',padding:'20px',}}>We <span className="text_orange font_family_montserrat_bold">Zest Ferro Benefication Pvt Ltd.</span>, are one of the most reliable and prominent organization in the Mining industry.  The company has focused on business diversification and expansion over the last couple of years, which has significantly boosted its performance. We follow a zeal to understand buyer’s needs and fulfil their requirements. </p>

            <p style={{textAlign:'justify',padding:'20px',paddingTop:'0px'}}>This endeavors to be a cost and quality front runner by achieving total integration in its operations across the Beneficiation and Trading. It maneuvers an infrastructure intensive network and integrated quality management processes aimed at satisfactorily meeting customer’s requirements.
            Apart from attaining superior technological and quality-specific edge over its competitors, we also pay close attention to the enhancement of safety, health and environmental protection. We strive to be available to our clients round the clock and ensure authentic consignment is delivered to them on time.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
