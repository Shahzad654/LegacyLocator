import React, { useState } from "react";
import "./webcam.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from "../../Components/Helper/Helper";
import { Button, Image, Spin, List } from "antd";

const WebCam = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyC7wutVlGWr46lNH4mssMNQDDKJMpMoBis"
  );

  const [image, setImage] = useState("");
  const [imageInlineData, setImageInlineData] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function aiImageRun() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      "Analyze the picture and give the name of the place, location of the place, facts about the place, nearby attractions, and reviews from other tourists with proper headings for these things",
      imageInlineData,
    ]);

    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        setImage(result);
      })
      .catch((e) => console.log(e));

    fileToGenerativePart(file).then((image) => {
      setImageInlineData(image);
    });
  };

  async function fileToGenerativePart(file) {
    const base64EncodeDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });

    return {
      inlineData: { data: await base64EncodeDataPromise, mimeType: file.type },
    };
  }

  const handleImageClick = () => {
    aiImageRun();
  };

 const renderItem = (item, index) => {
   const isBoldHeading = item.startsWith("**") && item.endsWith("**");
   const title = isBoldHeading ? item.slice(2, -2) : item;

   return (
     <List.Item>
       <List.Item.Meta
         title={isBoldHeading ? <strong>{title}</strong> : title}
       />
     </List.Item>
   );
 };


  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vw",
          }}
        >
          <input type="file" className="file-btn" onChange={(e) => handleImageChange(e)} />
          <Button
            type="primary"
            style={{
              marginLeft: "20px",
              backgroundColor: "orange",
              color: "white",
              borderColor: "orange",
            }}
            onClick={() => handleImageClick()}
          >
            Search
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vw",
          }}
        >
          <Image src={image} alt="" width={400} />
        </div>

        {loading && aiResponse === "" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5vw",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={aiResponse.split("\n")}
            renderItem={renderItem}
          />
        )}
      </div>
    </>
  );
};

export default WebCam;
