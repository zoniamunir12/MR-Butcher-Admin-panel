// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import BusinessMenu from "layouts/business/BusinessMenu";
import Cashback from "layouts/business/Cashback";
import SignIn from "layouts/business/authentication/sign-in";
import Customer from "layouts/business/customer";
import Earning from "layouts/business/earning";
import Cattle from "layouts/business/Cattle";
import Meat from "layouts/business/Meat";
import SubAdmin from "layouts/business/subadmin";
import Category from "layouts/business/Category";
import SubCategory from "layouts/business/SubCategory";
import {
  FaList,
  FaWallet,
  FaUser,
  FaFirstOrder,
  FaQrcode,
  FaCalendar,
  FaMoneyBill,
  FaEdit,
} from "react-icons/fa";

const shopRoutes = [
  { type: "title", title: "Restaurant Management", key: "resmgt" },
  {
    type: "collapse",
    name: "subadmins",
    key: "subadmins",
    route: "/subAdmins",
    icon: <FaUser size="14px" />,
    component: <SubAdmin />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Shop",
    key: "Customers",
    route: "/Customers",
    icon: <FaUser size="14px" />,
    component: <Customer />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Meat",
    key: "Meat",
    route: "/Meat",
    icon: <FaWallet size="14px" />,
    component: <Meat />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Cattle",
    key: "Cattle",
    route: "/Cattle",
    icon: <FaEdit size="14px" />,
    component: <Cattle />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Butcher",
    key: "menu",
    route: "/menu",
    icon: <FaList size="14px" />,
    component: <BusinessMenu />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Order",
    key: "cashback",
    route: "/cashback",
    icon: <FaMoneyBill size="14px" />,
    component: <Cashback />,
    noCollapse: true,
  },
];

export default shopRoutes;
