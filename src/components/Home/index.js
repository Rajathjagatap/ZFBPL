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
          <div className="col-md-8">
            <Carousel showThumbs={false}  infiniteLoop={true} autoPlay={true}>
              <div style={{height:'100%'}}>
                <img src={require("../../assets/cover-pic.png")} style={{height:'100%'}} alt="cover-pic"/>
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div style={{height:'100%'}}>
                <img src={require("../../assets/cover-pic2.png")} style={{height:'100%'}} alt="cover-pic2"/>
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
          <div className="col-md-4 font_family_montserrat">
            <p style={{textAlign:'justify',padding:'20px',}}>Zest Ferro Beneficiation Private Limited inception as a Beneficiation process plant Trading and Transportation . Zest has grown into one of the most consistent and prominent players in the Mining Industry. Over the last 12 years, the company has focused on business diversification and expansion which has significantly boosted its performance over the last 12 years .</p>

            <p style={{textAlign:'justify',padding:'20px',paddingTop:'0px'}}>With its vast experience over the years and thorough knowledge of every operative nuance of the various industries, the Zest has not only managed to carve a niche for itself, but has also emerged as a brand name that is synonymous with quality in the sector . The Zest is managed by an inspiring leadership that is young, focused and is driven by the ambition to deliver the very best. The management team comprises a mixed pool of industry professionals from various fields such as Mining & Geology, Finance & Strategy , Mechanical and Human Resources.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
