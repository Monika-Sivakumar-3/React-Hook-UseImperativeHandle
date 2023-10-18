import React, { forwardRef, useImperativeHandle } from "react";
import { Stack, TextField } from "@mui/material";

export const PersonalDetails = forwardRef(({}, _ref) => {
  //Usually we will compare the data from an endpoint instead of default value
  const defaultName = "Monika";
  const defaultLastName = "Sivakumar";
  const [name, setName] = React.useState(defaultName);
  const [lastName, setLastName] = React.useState(defaultLastName);

  useImperativeHandle(_ref, () => ({
    getIsDataChanged() {
      return !(defaultName === name && defaultLastName === lastName);
    },
  }));

  return (
    <Stack>
      Persoanl Details
      <TextField
        label="Name"
        variant="standard"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        label="Last Name"
        variant="standard"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
    </Stack>
  );
});
