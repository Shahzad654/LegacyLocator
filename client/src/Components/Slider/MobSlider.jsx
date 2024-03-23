import React from "react";
import { Carousel } from "antd";
import P1 from '../../assets/pic1.jpg'
import P2 from "../../assets/pic2.jpg";
import P3 from "../../assets/pic3.jpg";


const MobSlider= () => {
const contentStyle = {
  width: '100vw',
  height: "100vw",
  lineHeight: "160px",
  textAlign: "center",
};

  return (
    <Carousel effect="fade" style={{height:'40vw'}}>
      <div>
        <img src={P1} alt="" style={contentStyle} />
      </div>
      <div>
        <img src={P2} alt="" style={contentStyle} />
      </div>
      <div>
        <img src={P3} alt="" style={contentStyle} />
      </div>
    </Carousel>
  );
};

export default MobSlider;
