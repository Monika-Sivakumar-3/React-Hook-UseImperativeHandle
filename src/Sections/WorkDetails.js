import React, { forwardRef, useImperativeHandle } from "react";
import { Stack, TextField } from "@mui/material";

export const WorkDetails = forwardRef(({}, _ref) => {
  //Usually we will compare the data from an endpoint instead of default value
  const defaultCompanyName = "ABC Ltd";
  const defaultRole = "Consultant";
  const [companyName, setCompanyName] = React.useState(defaultCompanyName);
  const [role, setRole] = React.useState(defaultRole);

  useImperativeHandle(_ref, () => ({
    getIsDataChanged() {
      return !(defaultCompanyName === companyName && defaultRole === role);
    },
  }));

  return (
    <Stack>
      Work Details
      <TextField
        label="Compoany Name"
        variant="standard"
        value={companyName}
        onChange={(event) => {
          setCompanyName(event.target.value);
        }}
      />
      <TextField
        label="Role"
        variant="standard"
        value={role}
        onChange={(event) => {
          setRole(event.target.value);
        }}
      />
    </Stack>
  );
});
