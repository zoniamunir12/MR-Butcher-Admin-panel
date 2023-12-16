/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Images
import team2 from "assets/images/meat.webp";
import team3 from "assets/images/meat3.webp";
import team4 from "assets/images/meat3.webp";
import team5 from "assets/images/meat.webp";
import team6 from "assets/images/meat3.webp";
import team7 from "assets/images/meat.webp";

import { Link, useNavigation } from "react-router-dom";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={0.1} py={0.1}>
      {image && ( // Check if image is provided before rendering SoftAvatar
        <SoftBox mr={2}>
          <SoftAvatar src={image} alt={name} size="xl" variant="rounded" />
        </SoftBox>
      )}
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ name }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {name}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "No", align: "center" },
    { name: "SubCategoryName", align: "center" },
    { name: "image", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      No: <Function name="1." />,
      SubCategoryName: <Author name="Mutton" />,
      image: <Author image={team2} />,
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      No: <Function name="2." />,
      SubCategoryName: <Author name="Beef" />,
      image: <Author image={team3} />,
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      No: <Function name="3." />,
      SubCategoryName: <Author name="Camel Meat" />,
      image: <Author image={team4} />,
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      No: <Function name="4." />,
      SubCategoryName: <Author name="Cow" />,
      image: <Author image={team5} />,
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      No: <Function name="5." fontWeight="medium" />,
      SubCategoryName: <Author name="Goat" varian="subtitle1" />,
      image: <Author image={team6} />,
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      No: <Function name="6." fontWeight="medium" />,
      SubCategoryName: <Author name="Others" varian="subtitle1" />,
      image: <Author image={team7} />,
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
  ],
};

export default authorsTableData;

//temp
// /* eslint-disable react/prop-types */
// // Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";
// import SoftAvatar from "components/SoftAvatar";
// import SoftBadge from "components/SoftBadge";

// // Images
// import team2 from "assets/images/team-2a.crdownload";
// import team3 from "assets/images/team-3a.jpg";
// import team4 from "assets/images/team-4a.jpg";

// function Author({ image, name, email }) {
//   return (
//     <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
//       <SoftBox mr={2}>
//         <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </SoftBox>
//       <SoftBox display="flex" flexDirection="column">
//         <SoftTypography variant="button" fontWeight="medium">
//           {name}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="secondary">
//           {email}
//         </SoftTypography>
//       </SoftBox>
//     </SoftBox>
//   );
// }

// function Function({ job, org }) {
//   return (
//     <SoftBox display="flex" flexDirection="column">
//       <SoftTypography variant="caption" fontWeight="medium" color="text">
//         {job}
//       </SoftTypography>
//       <SoftTypography variant="caption" color="secondary">
//         {org}
//       </SoftTypography>
//     </SoftBox>
//   );
// }

// const authorsTableData = {
//   columns: [
//     { name: "subadmin", align: "left" },
//     { name: "function", align: "left" },
//     { name: "status", align: "center" },
//     { name: "employed", align: "center" },
//     { name: "action", align: "center" },
//   ],

//   rows: [
//     {
//       subadmin: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
//       function: <Function job="Manager" org="Organization" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       subadmin: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
//       function: <Function job="Programator" org="Developer" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           11/01/19
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       subadmin: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
//       function: <Function job="Executive" org="Projects" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           19/09/17
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       subadmin: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
//       function: <Function job="Programator" org="Developer" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           24/12/08
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       subadmin: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
//       function: <Function job="Manager" org="Executive" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           04/10/21
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       subadmin: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
//       function: <Function job="Programtor" org="Developer" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           14/09/20
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//   ],
// };

// export default authorsTableData;
