import { useState, useEffect } from "react";
import axios from "axios";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/business/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/cattle2.avif";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  //Signin Function
  const businessLogin = () => {
    navigate("/dashboard");
  };
  //states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //funchions
  const userlogin = () => {
    const formdata = new FormData();

    formdata.append("email", email);
    formdata.append("password", password);

    axios
      .post("http://localhost:8000/signIn", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        if (response.data.match === true) {
          localStorage.setItem("user", JSON.stringify(response.data.loggedInUser));
          navigate("/cattle");
        } else {
          alert("no user found");
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  useEffect(() => {
    let currentUserStatus = localStorage.getItem("user");
    if (currentUserStatus) {
      navigate("/");
    }
  }, []);
  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography color="brown" component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            color="brown"
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </SoftBox>
        {/* <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox> */}
        <SoftBox mt={4} mb={1}>
          <SoftButton
            onClick={() => {
              userlogin();
              // businessLogin();
            }}
            variant="gradient"
            color="info"
            fullWidth
          >
            sign in
          </SoftButton>
        </SoftBox>
        {/* <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/signUp"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox> */}
      </SoftBox>
    </CoverLayout>
  );
}
export default SignIn;
