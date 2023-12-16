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
    { name: "profile", align: "left" },
    { name: "priceKG", align: "left" },
    { name: "priceGM", align: "left" },

    // { name: "name", align: "left" },
    // { name: "Email", align: "center" },
    { name: "detail", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      id: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1
        </SoftTypography>
      ),
      profile: <Author image={team2} name="John Michael" />,
      priceKG: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      priceGM: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      Email: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      detail: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          GUJRANWALA
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
      profile: <Author image={team3} name="Alexa Liras" />,
      priceKG: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      priceGM: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      Email: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      detail: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          DFGHJKL
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
      profile: <Author image={team4} name="Laurent Perrier" />,
      priceKG: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      priceGM: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      Email: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      detail: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SF
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
          7
        </SoftTypography>
      ),
      profile: <Author image={team4} name="Miriam Eric" />,
      priceKG: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      priceGM: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1KG
        </SoftTypography>
      ),
      Email: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      detail: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          ACB
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
