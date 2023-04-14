import React from 'react'
import {Layout, Menu} from "antd";
import "./MenuSider.scss";
import {
    HomeOutlined,
    TeamOutlined,
    AppstoreOutlined
} from "@ant-design/icons";
import {useLocation, useNavigate } from 'react-router-dom';


export const MenuSider = (props) => {
    const {Sider} = Layout;
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems=[
        {key:"users",
        icon:<HomeOutlined />,
        label:"Gestion de usuarios"},
        {key:"products",
        icon:<TeamOutlined />,
        label: "Portafolio de servicios",
        },
        {key:"clients",
        icon:<AppstoreOutlined />,
        label: "Clientes",
        subMenu: [
            {key: "clients/list", icon: <TeamOutlined />, label: "Lista de cleintes"},
            {key: "clients/new", icon:<TeamOutlined />, label: "Nuevo Cliente"},    
        ],
        },
        {key: "news",
        icon: <AppstoreOutlined />,
        label: "Gestion de noticias",
        },
    ];

    const navigateTo=(e) =>{
        const path =e.key;
        console.log(path);
        navigate(path);
    }

    const itemRender=(item,index)=>{
        const{ icon,label, subMenu}=item;
        const isSelected = location.pathname === item.key;
        if(subMenu){
            return(
                <Menu.SubMenu key={item.key} icon={icon} title={label}>
                    {subMenu.map((subMenuItem)=>(
                        <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
                            {subMenuItem.label}
                        </Menu.Item>
                    ) )}
                </Menu.SubMenu>
            );
        }
    }

  return (
    <Sider className='menu-sider' collapsed= {props.menuCollapsed}>
        <Menu
          mode="inline"
          onClick={navigateTo}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={menuItems
            .filter((item)=>item.subMenu)
        .map((item)=> item.key)}>
           {menuItems.map((item)=> itemRender(item))}   
        </Menu>
    </Sider>
  );

};
