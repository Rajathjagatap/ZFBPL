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
                        <img src={require("../../assets/test.jpg")} style={{height:'100%', width:'100%'}} alt="cover-pic"/>
                    </div>
                    <div className='col-md-4 col-sm-12' style={{textAlign:'justify',padding:'20px'}}>
                        <p className='font_family_montserrat' style={{marginTop:'5vh'}}>Our recent schemes for Corporate Social Responsibility scheme includes programmes under major social areas such as education, health and society development. We consider our employees and their families as assets to achieve a common goal of determined well being towards a better future. </p>
                        <p className='font_family_montserrat'> We strongly beleive in the quote! </p>
                        <p><b>Always Treat your employees exactly as you want them to treat your best customers.</b></p>
                        <p style={{float:'right'}}><b>~ Stephen R. Convey</b></p>
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