/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

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
    { name: "customer", align: "left" },
    { name: "address", align: "center" },
    // { name: "status", align: "center" },
    { name: "phone", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      id: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1
        </SoftTypography>
      ),
      customer: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          GGUJRANWALA
        </SoftTypography>
      ),
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      phone: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          0302121234
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
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2
        </SoftTypography>
      ),
      customer: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Multan
        </SoftTypography>
      ),
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      phone: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          0302121234
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
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
      customer: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Pindi
        </SoftTypography>
      ),
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      phone: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          0302121234
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
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          4
        </SoftTypography>
      ),
      customer: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Lahore
        </SoftTypography>
      ),
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      phone: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          0302121234
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
  ],
};

export default authorsTableData;
