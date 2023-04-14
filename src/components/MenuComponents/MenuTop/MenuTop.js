import React from 'react'
import { Button } from 'antd';
import Logo from "../../../assets/img/png/Logo.png"
import {MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./MenuTop.scss";

export const MenuTop = (props) => {
    const {menuCollapsed, setMenuCollapsed}= props;

  return (
    <div className="menu-top">
        <div className="menu-top__left">
            <Button 
              type="link"
              onClick={() =>setMenuCollapsed(!menuCollapsed)}
              aria-label={menuCollapsed ? "Mostrar Menu" : "Ocultar menu"}>
                {menuCollapsed ? <MenuUnfoldOutlined />: <MenuFoldOutlined/>}
            </Button>
            <img className="menu-top_left_logo" src={Logo} alt="Logo"/>
        </div>
    </div>
  )
}
