import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import icon1 from '../assets/bestIcon1.png'
import icon2 from '../assets/bestIcon2.png'
import icon3 from '../assets/bestIcon3.png'
import icon4 from '../assets/bestIcon4.png'


const TextContainer = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    // line-height: 32px;
    color: #333333;
    margin-top: 15px;
`
const BestContainer = styled.div`
    background: #E4EDF6;
    padding: 2em 0em;
`
const Icons = styled.img`
    // width: 25.6px;
    // height: 25.6px;
    background: #ffff;
    padding: 7px;
    width: 52px;
    height: 52px;
    border-radius: 20%;
`
const Best = () => (
  <BestContainer>
        <h2>Why we are the best</h2>
        <div className='row mt-5'>
            <div className='col-sm-4 col-md-6'>
                <div className='d-flex justify-content-around '>
                    <div className=''>
                        <Icons src={icon1} width={25.6} height={25.6} alt='' />
                        <TextContainer>Exceptional dry<br/> cleaning services</TextContainer>
                    </div>
                    <div className=''>
                        <Icons src={icon2}  alt='' />
                        <TextContainer>Convenient booking<br/> and tracking options</TextContainer>
                    </div> 
                </div>   
            </div>
            <div className='col-sm-4 col-md-6'>
                <div className='d-flex justify-content-around '>
                    <div className=''>
                        <Icons src={icon3} width={25.6} height={25.6} alt='' />
                        <TextContainer>Different methods for<br/> different clothes </TextContainer>
                    </div>
                    <div className=''>
                        <Icons src={icon4} width={25.6} height={25.6} alt='' />
                        <TextContainer>Top-notch customer<br/> experience</TextContainer>
                    </div> 
                </div>   
            </div>
           
        </div>
  </BestContainer>
);

export default Best;
