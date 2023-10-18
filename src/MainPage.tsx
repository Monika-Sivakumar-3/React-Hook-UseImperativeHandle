import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { PersonalDetails } from "./Sections/PersonalDetails";
import { WorkDetails } from "./Sections/WorkDetails";
import { OtherDetails } from "./Sections/OtherDetails";

export const MainPage = () => {
  const [value, setValue] = React.useState<number>(0);
  const [showCloseConfirmationModal, setShowCloseConfirmationModal] =
    React.useState<boolean>(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSurveyClose = () => {
    if (
      selectedTabRef.current &&
      (selectedTabRef.current as any)?.getIsDataChanged()
    ) {
      console.log("Called inside");
      setShowCloseConfirmationModal(true);
    } else {
      console.log("Navigate to desired screen");
      //Do necessary changes
    }
  };

  const selectedTabRef = React.useRef();

  const renderContent = () => {
    switch (value) {
      case 0:
        return <PersonalDetails ref={selectedTabRef} />;
      case 1:
        return <WorkDetails ref={selectedTabRef} />;
      case 2:
        return <OtherDetails ref={selectedTabRef} />;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      {renderContent()}
      <Box display="Flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{ margin: 4 }}
          onClick={handleSurveyClose}
        >
          Close
        </Button>
        <Button
          variant="contained"
          sx={{ margin: 4 }}
          onClick={() => setValue(value < 2 ? value + 1 : value)}
        >
          Submit
        </Button>
      </Box>
      <Modal
        open={showCloseConfirmationModal}
        onClose={() => {
          setShowCloseConfirmationModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          There are some changes in the form. Do you want to close it without
          saving?
        </Box>
      </Modal>
    </Box>
  );
};
