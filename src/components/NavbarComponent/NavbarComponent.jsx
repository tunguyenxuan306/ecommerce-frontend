import React from "react";
import {
  WrapperContent,
  WrapperFillPrice,
  WrapperLableText,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{` từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return (
            <div>
              <WrapperFillPrice>{option}</WrapperFillPrice>
            </div>
          );
        });
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu Lanh", "TV", "May Giat"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["Dưới 40.000", "Trên 50.000", "Trên 120.000"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
