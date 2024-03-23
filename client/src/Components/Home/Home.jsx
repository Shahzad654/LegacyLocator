import React, { useState, useRef, useEffect } from "react";
import './home.css'
import VID from "../../assets/video.mp4";
import WebCam from '../WebCam/WebCam';
import { Button, Modal, Radio } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import Navbarr from '../Navbar/Navbarr'
import Pic1 from '../../assets/pic2.jpg'


const Home = () => {

  const [size, setSize] = useState("large");

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Navbarr />
      <div className="home_container">
        <div className="app-video">
          <video
            ref={videoRef}
            width="700vw"
            height="650vw"
            autoPlay
            muted
            loop
          >
            <source src={VID} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="slider">
          <img src={Pic1} alt="" style={{ width: "100%", marginTop: "13vw" }} />
        </div>

        <div className="mobile-view">
          <div className="mobile-only">
            <h3>Don't know about histrocial places</h3>
            <br />
            <h3>Let Legacy Locator be your guide.</h3>
          </div>
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Button value="large" onClick={showModal} className="try-btn">
              Try Legacy Locator <ExportOutlined />
            </Button>
          </Radio.Group>

          <Modal
            title="Legacy Locator"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ style: { backgroundColor: "orange", color:'white' } }} 
            cancelButtonProps={{ style: { backgroundColor: "red", color:'white' } }}
          >
            <WebCam />
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Home
