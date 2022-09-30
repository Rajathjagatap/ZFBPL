import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class CSR extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='col-md-12 text-center' style={{paddingRight:'10vw',paddingLeft:'10vw',paddingTop:'2vh'}}>
                    <h1 className="title-section"><span class="title-regular">CSR</span></h1>
                    <hr className="title-underline-center"></hr>
                </div>
                <div className='col-md-12 row' style={{marginBottom:'7vh', marginTop:'5vh'}}>
                    <div className='col-md-6 address'>
                        <img src={require("../../assets/help.jpg")} style={{height:'100%', width:'100%'}} alt="cover-pic"/>
                    </div>
                    <div className='col-md-4 col-sm-12' style={{textAlign:'justify',padding:'20px'}}>
                        <p className='font_family_montserrat' style={{marginTop:'5vh'}}>Corporate Social Responsibility is a business philosophy that focuses on the importance of keeping the best interests of the wider society in mind.  Our recent schemes for Corporate Social Responsibility schemes and programmes are, education, health and area development. We consider our employees and their families to achieve a common goal of determined towards a better future. The Company is guided by its values which drive it to conduct its business in a responsible manner. It firmly believes that Company’s growth goes along with the growth of society. </p>
                        
                    </div>
                    <div className='col-md-2'>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CSR;