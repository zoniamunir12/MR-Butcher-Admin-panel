/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";

// Authentication layout components
import BasicLayout from "layouts/business/authentication/components/BasicLayout";
import Socials from "layouts/business/authentication/components/Socials";
import Separator from "layouts/business/authentication/components/Separator";

// Images
import curved6 from "assets/images/meat.webp";
import team2 from "assets/images/meat.webp";
function Form() {
  return (
    <BasicLayout
    // title="Welcome!"
    // description="Use these awesome forms to login or create new account in your project for free."
    // image={team2}
    >
      <Sidenav color="info" brandName="Mr.Butcher" routes={shopRoutes} />
      <Card>
        <SoftBox p={2} mb={1} textAlign="center">
          {" "}
          {/* view k lia isy use kia*/}
          <SoftTypography variant="h5" fontWeight="medium">
            {" "}
            {/* view k lia isy use kia*/}
            Add Category
          </SoftTypography>
        </SoftBox>

        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="No" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput placeholder=" Name" />
            </SoftBox>
            <SoftBox mb={2}>
              <img
                src={team2}
                alt="Team 2"
                style={{ width: "40%", marginLeft: "70px", borderRadius: "10px", height: "90px" }}
              />
            </SoftBox>

            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth>
                Add Category
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Form;
