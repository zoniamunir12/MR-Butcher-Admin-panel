import { useState, useEffect } from "react";
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useSoftUIController } from "context";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import axios from "axios";
import shopRoutes from "routes/shopRoutes";
import SoftBadge from "components/SoftBadge";
import { FaCheckCircle, FaTimesCircle, FaPowerOff, FaTrash } from "react-icons/fa";
import SoftButton from "components/SoftButton";
// Data
import team2 from "../../../assets/images/team-2.jpg";
import Sidenav from "examples/Sidenav";
import SoftAvatar from "components/SoftAvatar";
function Customer() {
  const [rows, setRows] = useState([]);
  const [controller, dispatch] = useSoftUIController();
  const { baseUrl } = controller;
  const columns = [
    { name: "no", align: "left" },
    // { name: "viewprofile", align: "center" },
    { name: "name", align: "center" },
    { name: "email", align: "center" },
    { name: "phone", align: "center" },
    { name: "address", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ];
  const toggleStatus = (userId, currentStatus) => {
    axios
      .put(`http://localhost:8000/toggleUserStatus/${userId}`)
      .then((response) => {
        if (response.data.success) {
          // Reload the customer list after successful status update
          viewProduct();
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:8000/deleteUser/${userId}`)
      .then((response) => {
        if (response.data.success) {
          // Reload the customer list after successful deletion
          viewProduct();
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const viewProduct = () => {
    axios
      .post(`http://localhost:8000/viewProduct`)
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        if (userData && userData.length > 0) {
          const newRows = userData.map((item, index) => ({
            no: (
              <SoftBox key={index} display="flex" flexDirection="column" px={2} py={1} mr={2}>
                <SoftTypography variant="caption" fontWeight="medium" color="text">
                  {index + 1}
                </SoftTypography>
              </SoftBox>
            ),
            // viewprofile: (
            //   <SoftBox key={index} display="flex" alignItems="center">
            //     <SoftBox display="flex" flexDirection="column">
            //       <a
            //         href={`http://localhost:8888/${item.profileImage}`}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //       >
            //         <SoftBox display="flex" flexDirection="column">
            //           <img
            //             src={`http://localhost:8888/${item.profileImage}`}
            //             alt="image"
            //             style={{ width: 50, height: 45, borderRadius: 40 }}
            //           />
            //         </SoftBox>
            //       </a>
            //     </SoftBox>
            //   </SoftBox>
            // ),
            name: (
              <SoftBox key={index} display="flex" alignItems="center">
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="button" fontWeight="medium">
                    {item.shopName}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            ),
            email: (
              <SoftBox key={index} display="flex" alignItems="center">
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="button" fontWeight="medium">
                    {item.email}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            ),
            phone: (
              <SoftBox key={index} display="flex" alignItems="center">
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="button" fontWeight="medium">
                    {item.shopcontactNumber}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            ),
            address: (
              <SoftBox key={index} display="flex" alignItems="center">
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="button" fontWeight="medium" color="text">
                    {item.shopAddress}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            ),
            status: (
              <SoftBadge
                variant="gradient"
                badgeContent={item.isactive == true ? "Activate" : "Deactivate"}
                color={item.isactive == true ? "success" : "danger"}
                size="medium"
                container
              />
            ),
            action: (
              <>
                <SoftButton
                  onClick={() => toggleStatus(item._id, item.isactive)} // Assuming the user ID is stored in _id
                  size="medium"
                  title={item.isactive === true ? "Deactivate" : "Activate"}
                >
                  <FaPowerOff
                    color={item.isactive === true ? "red" : "green"}
                    size={10}
                    style={{ cursor: "pointer" }}
                  />
                </SoftButton>
                <SoftButton
                  onClick={() => deleteUser(item._id)} // Assuming the user ID is stored in _id
                  size="xs"
                  title="Delete"
                >
                  <FaTrash color={"black"} size={10} style={{ cursor: "pointer" }} />
                </SoftButton>
              </>
            ),
          }));

          setRows(newRows);
        } else {
          console.error("Invalid response format");
        }
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  };

  useEffect(() => {
    viewProduct();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="dark" brandName="Mr.Butcher-shop" routes={shopRoutes} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Shop List</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              {rows.length > 0 ? <Table columns={columns} rows={rows} /> : <h1>no record </h1>}
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Customer;
