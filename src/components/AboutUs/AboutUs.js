import React from "react";
import styled from "styled-components";
import aboutus2 from "../../assets/aboutus2.jpg";
import awardsImg from '../../assets/awards.png';
import { BESTCONTENT_1, BESTCONTENT_2, BESTCONTENT_3 } from "../../Constant/Constant";

import "./AboutUs.css";

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 250px;
  min-width: 250px;
`;

export const AboutUs = () => {
  return (
    <>
      <div className="main-app-aboutus">
        <h1 className="abt-us-heading">About Us</h1>
        <div className="aboutus-first-sec">
          <div className="about-first-left">
            <h5 className="about-us-cnt">{BESTCONTENT_1}</h5>
            <h5 className="about-us-cnt">{BESTCONTENT_2}</h5>
            <h5 className="about-us-cnt">{BESTCONTENT_3}</h5>
          </div>
          <div className="about-first-right">
            <ProductImage src={aboutus2} alt={"about-us-main-logo"} />
          </div>
        </div>
        <div className="aboutus-second-sec">
            <div className="aboutus-sec-sub-cls">
                <h1 className="no1-txt">No. 1 Motors Manufacturing Company in Salem</h1>
                <div className="certified-cls-wrap">
                    <div className="certify-cls-main">We are certified with</div>
                </div>
                <div className="award-img-main-wrap">
                    <img src={awardsImg} alt="awards-img" className="awards-img"></img>
                </div>

            </div>

        </div>
      </div>
    </>
  );
};
