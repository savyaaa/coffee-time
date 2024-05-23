import { useState } from "react";
import "./App.css";
import "./css/responsive.css";
import Header from "./components/header";
import Main from "./components/main";
import Why from "./components/why";

function App() {
  const data = [
    {
      image: "images/mask.png",
      imageWidth: 384,
      imageHeight: 368,
      name: "John Peter",
      nameClass: "text-25",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse",
      descriptionClass: "description-9",
      vectorImage: "images/vector_smart_object_doubl_18.png",
      vectorWidth: 68,
      vectorHeight: 84,
      vectorClass: "vector-smart-object-double-clik-to-edit-35",
    },
    {
      image: "images/mask_2.png",
      imageWidth: 383,
      imageHeight: 368,
      name: "Ella Thomson",
      nameClass: "text-25",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse",
      descriptionClass: "description-10",
    },
  ];

  const images = [
    { src: "images/place_your_image_here_dou_3.jpg", width: 283, height: 281 },
    { src: "images/place_your_image_here_dou_2.png", width: 283, height: 281 },
    { src: "images/place_your_image_here_dou.png", width: 283, height: 281 },
  ];

  const headings = [
    { text: "New York", class: "text-16" },
    { text: "Jakarta", class: "jakarta" },
    { text: "Paris", class: "paris" },
  ];

  const descriptions = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq",
      class: "description-1",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq",
      class: "description-3-2",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq",
      class: "description-2-2",
    },
  ];

  return (
    <>
      <div className="background">
        <Header />
        <Main />
        <Why
          data={data}
          images={images}
          headings={headings}
          descriptions={descriptions}
        />
      </div>
    </>
  );
}

export default App;
