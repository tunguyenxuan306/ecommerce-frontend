import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton = "Tìm kiếm",
    borderRadius = "0px",
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13, 92, 182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: borderRadius,
        }}
      />
      <ButtonComponent
        bordered={false}
        size={size}
        icon={<SearchOutlined color={colorButton} style={{color: '#fff'}}/>}
        styleButton={{
          backgroundColor: backgroundColorButton,
          borderRadius: borderRadius,
          // border: !bordered && "none",
        }}
        textButton={textButton}
        styleTextButton={{ color: colorButton}}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
