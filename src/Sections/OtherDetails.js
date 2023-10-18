import React, { forwardRef, useImperativeHandle } from "react";
import { Stack, TextField } from "@mui/material";

export const OtherDetails = forwardRef(({}, _ref) => {
  //Usually we will compare the data from an endpoint instead of default value
  const defaultValue = "Siging";
  const [hobbies, setHobbies] = React.useState(defaultValue);

  useImperativeHandle(_ref, () => ({
    getIsDataChanged() {
      return !(hobbies === defaultValue);
    },
  }));

  return (
    <Stack>
      Other Details
      <TextField
        label="Hobbies"
        variant="standard"
        value={hobbies}
        onChange={(event) => {
          setHobbies(event.target.value);
        }}
      />
    </Stack>
  );
});
