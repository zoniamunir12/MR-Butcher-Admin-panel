/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/shop1.jpg";
import team3 from "assets/images/shop2.jpg";
import team4 from "assets/images/shop3.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
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

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "id", align: "left" },
    { name: "profile", align: "left" },
    { name: "shopname", align: "left" },
    { name: "phoneNumber", align: "center" },
    { name: "address", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      id: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium" marginLeft="2px">
          1
        </SoftTypography>
      ),
      profile: <Author image={team2} name="Ali" email="Ali@creative-tim.com" />,
      name: <Function job="Manager" org="Organization" />,
      phoneNumber: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          03055454321
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          GUJRANWALA
        </SoftTypography>
      ),
      shopname: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Mr.Butcher
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      id: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium" marginLeft="2px">
          2
        </SoftTypography>
      ),
      profile: <Author image={team3} name="Ahmad" email="Ahmad@creative-tim.com" />,
      name: <Function job="Manager" org="Organization" />,
      phoneNumber: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          03055454321
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          GUJRANWALA
        </SoftTypography>
      ),
      shopname: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Mr.Butcher
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      id: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium" marginLeft="2px">
          3
        </SoftTypography>
      ),
      profile: <Author image={team4} name="Zain " email="Zain@creative-tim.com" />,
      name: <Function job="Manager" org="Organization" />,
      phoneNumber: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          03055454321
        </SoftTypography>
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Pindi
        </SoftTypography>
      ),
      shopname: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Mr.Butcher
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    // {
    //   id: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       4
    //     </SoftTypography>
    //   ),
    //   profile: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
    //   name: <Function job="Programator" org="Developer" />,
    //   Email: (
    //     <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
    //   ),
    //   address: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       MIRPUR
    //     </SoftTypography>
    //   ),
    //   action: (
    //     <SoftTypography
    //       component="a"
    //       href="#"
    //       variant="caption"
    //       color="secondary"
    //       fontWeight="medium"
    //     >
    //       Edit
    //     </SoftTypography>
    //   ),
    // },
    // {
    //   id: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       5
    //     </SoftTypography>
    //   ),
    //   id: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       6
    //     </SoftTypography>
    //   ),
    //   profile: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
    //   name: <Function job="Manager" org="Executive" />,
    //   Email: (
    //     <SoftBadge
    //       variant="gradient"
    //       badgeContent="offline"
    //       color="secondary"
    //       size="xs"
    //       container
    //     />
    //   ),
    //   address: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       PAKISTAN
    //     </SoftTypography>
    //   ),
    //   action: (
    //     <SoftTypography
    //       component="a"
    //       href="#"
    //       variant="caption"
    //       color="secondary"
    //       fontWeight="medium"
    //     >
    //       Edit
    //     </SoftTypography>
    //   ),
    // },
    // {
    //   id: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       7
    //     </SoftTypography>
    //   ),
    //   profile: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
    //   name: <Function job="Programtor" org="Developer" />,
    //   Email: (
    //     <SoftBadge
    //       variant="gradient"
    //       badgeContent="offline"
    //       color="secondary"
    //       size="xs"
    //       container
    //     />
    //   ),
    //   address: (
    //     <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    //       MULTAN
    //     </SoftTypography>
    //   ),
    //   action: (
    //     <SoftTypography
    //       component="a"
    //       href="#"
    //       variant="caption"
    //       color="secondary"
    //       fontWeight="medium"
    //     >
    //       Edit
    //     </SoftTypography>
    //   ),
    // },
  ],
};

export default authorsTableData;
