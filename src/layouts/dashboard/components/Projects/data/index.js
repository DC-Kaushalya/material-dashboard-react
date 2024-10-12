/* eslint-disable react/prop-types */

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

export default function data() {
  const Container = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "container number", accessor: "companies", width: "23%", align: "left" },
      { Header: "lorry Number", accessor: "lorry", align: "center" },
      { Header: "created at", accessor: "created", align: "center" },
      { Header: "updated at", accessor: "updated", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Container name="CAA-OP-0001" />,
        lorry: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB-1234
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            01/01/2020
          </MDTypography>
        ),
        updated: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            21/03/2020
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Container name="CAA-OP-0001" />,
        lorry: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB-1234
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            01/01/2020
          </MDTypography>
        ),
        updated: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            21/03/2020
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Container name="CAA-OP-0001" />,
        lorry: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB-1234
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            01/01/2020
          </MDTypography>
        ),
        updated: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            21/03/2020
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Container name="CAA-OP-0001" />,
        lorry: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB-1234
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            01/01/2020
          </MDTypography>
        ),
        updated: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            21/03/2020
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Container name="CAA-OP-0001" />,
        lorry: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB-1234
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            01/01/2020
          </MDTypography>
        ),
        updated: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            21/03/2020
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Container name="CAA-OP-0001" />,
        lorry: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            AB-1234
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            01/01/2020
          </MDTypography>
        ),
        updated: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            21/03/2020
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
