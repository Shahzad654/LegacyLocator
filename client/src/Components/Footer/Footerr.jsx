import React from 'react'
import { Layout } from "antd";
const { Footer } = Layout;

const Footerr = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor:'orange',
          color:'white',
          marginTop:'5vw'
        }}
      >
        Legacy Locator ©{new Date().getFullYear()} Developed by Team Shahzad
        <h4>Team Members</h4>
        <p>Muhammad Shahzad</p>
        <p>Osama Butt</p>
        <p>Ahmad Raza</p>
        <p>Wajha Chohan</p>
        <p> Abdullah Shamas</p>
      </Footer>
    </>
  );
}

export default Footerr
