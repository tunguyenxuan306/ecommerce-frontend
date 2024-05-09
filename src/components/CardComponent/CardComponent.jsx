import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      bodyStyle={{ padding: "10px" }}
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Apple Iphone 15 Pro Max</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>4.96 </span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        25.000.000đ <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
