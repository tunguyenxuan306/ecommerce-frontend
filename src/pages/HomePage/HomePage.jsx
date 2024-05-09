import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProducts } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/sliders/slider1.jpg";
import slider2 from "../../assets/images/sliders/slider2.jpg";
import slider3 from "../../assets/images/sliders/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "LapTop"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProducts>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProducts>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "0 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
        </div>
        <NavbarComponent />
      </div>
    </>
  );
};

export default HomePage;
