import { Col } from "antd";
import React from "react";
import {
  WrapperAccount,
  WrapperHeader,
  WrapperTextAccount,
  WrapperTextHeader,
} from "./style";
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

function HeaderComponent() {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>XUANTU</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="Tìm kiếm sản phẩn, danh mục hay thương hiệu bạn mong muốn ..."
          />
        </Col>
        <Col span={6} style={{ gap: "20px", alignItems: "center" }}>
          <WrapperAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextAccount>Đăng nhập/Đăng ký</WrapperTextAccount>
              <div>
                <WrapperTextAccount>Tài Khoản</WrapperTextAccount>
                <CaretDownOutlined />
              </div>
            </div>
            <div>
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
            </div>
            <WrapperTextAccount>Giỏ hàng</WrapperTextAccount>
          </WrapperAccount>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
