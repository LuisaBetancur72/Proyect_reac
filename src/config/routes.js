/*  de componentes >a layouts > a  pages >a   routes  */

import { LayoutGeneral } from "../layouts/LayoutGeneral";
import {Home} from "../pages/Home"
import {Users} from "../pages/users/Users";
import {Products} from "../pages/Products";
import {Clients} from "../pages/clients/Client";

const AdminRoutes=[
    {path: "/users",component: Users, layout: LayoutGeneral},
    {path: "/clients", component: Clients, layout: LayoutGeneral},
    {path: "/clients/list", component: Clients, layout: LayoutGeneral},
    {path: "/clients/nuevo", component: Clients, layout: LayoutGeneral}
];
const GeneralRoutes=[
    {path: "/",component: Home, layout:LayoutGeneral},
    {path: "/products",component: Products, layout:LayoutGeneral}

];
const allRoutesProject=[...AdminRoutes,...GeneralRoutes];
export default allRoutesProject;