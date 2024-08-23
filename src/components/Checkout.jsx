import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Info from "./Info";
import ToggleColorMode from "./ToggleColorMode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Shipping Adress", "Payment Details", "Review Order"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <div>Address</div>;
    case 1:
      return <div>Payment Details</div>;
    case 2:
      return <div>Reviews Order</div>;
    default:
      return <div>Unknown Step</div>;
  }
};
export default function Checkout() {
  const [mode, setMode] = useState("light");
  const [activeStep, setActiveStep] = useState(0);

  const defaultTheme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item lg={4} xs={12} className="flex flex-col border-r">
          <Button startIcon={<ArrowBackRoundedIcon />} component="a" href="#">
            Back to
          </Button>
          <Box>
            <Info />
          </Box>
        </Grid>
        <Grid item lg={8} xs={12}>
          <ToggleColorMode mode={mode} toggle={toggleColorMode} />
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
          {activeStep !== 0 && (
            <Button onClick={() => setActiveStep(activeStep - 1)}>
              Previous
            </Button>
          )}
          <Button onClick={() => setActiveStep(activeStep + 1)}>
            {activeStep === steps.length - 1 ? "Place Order" : "Next"}
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
