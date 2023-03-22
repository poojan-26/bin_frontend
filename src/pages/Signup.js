import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactPage from "./Contact";
import CheckoutPage from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "../components/header";
import Footer from "../components/footer";
import "@fontsource/source-sans-pro";
import "../index.css";

// const stripePromise = loadStripe(
//   "pk_test_51KvPffKM6vYnX02SkyoEaMFX7kyM3fFmTou8liBWPYHWHXiqEaJGNBZ8YZKaURTQLrpA19OBHNVOAtvddsJdrgCA00uG7aPg2K"
// );

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  container: {
    margin: "16px auto",
    height: "100%",
  },
  stepper: {
    margin: "auto",
    padding: theme.spacing(1),
    maxWidth: 350,
  },
}));

export default function Signup() {
  // const location = useLocation();
  let data = new URLSearchParams(window.location.search).get("data");
  let splitData, id, getZip;

  if (data) {
    splitData = data.split("?")[1].split("&");
    id = splitData[0].split("=")[1];
    getZip = splitData[1].split("=")[1];
  }

  const [franchiseeId] = useState(id ? id : "");
  const [zipcode] = useState(getZip ? getZip : "");

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(
    Number(localStorage.getItem("activeStep")) || 0
  );
  const isLastStep = activeStep === 1;
  const isFirstStep = activeStep === 0;

  useEffect(() => {
    return () => {
      localStorage.removeItem("activeStep");
    };
  }, []);

  function handleBack() {
    if (isFirstStep) {
      return;
    }
    localStorage.setItem("activeStep", activeStep - 1);
    setActiveStep(activeStep - 1);
  }

  function handleNext() {
    if (isLastStep) {
      return;
    }
    localStorage.setItem("activeStep", activeStep + 1);
    setActiveStep(activeStep + 1);
  }

  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md" className={classes.container}>
        <Grid container direction="row" justifyContent="center" spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Typography
              variant="h4"
              align="center"
              style={{
                fontSize: 48,
                fontWeight: 700,
                fontFamily: "Teko, sans-serif",
              }}
            >
              Sign Up
            </Typography>
            <Stepper
              nonLinear
              activeStep={activeStep}
              className={classes.stepper}
            >
              <Step key="step-1" completed={activeStep === 1}>
                <StepLabel>Step 1</StepLabel>
              </Step>
              <Step key="step-2">
                <StepLabel>Step 2</StepLabel>
              </Step>
            </Stepper>
          </Grid>
          {activeStep === 0 && (
            <Grid className="mb25" item md={12} sm={12} xs={12}>
              <ContactPage
                franchiseeId={franchiseeId}
                handleBack={handleBack}
                handleNext={handleNext}
                zipcode={zipcode}
              />
            </Grid>
          )}
          {activeStep === 1 && (
            <Grid item md={12} sm={12} xs={12}>
              <Elements stripe={stripePromise}>
                <CheckoutPage handleBack={handleBack} handleNext={handleNext} />
              </Elements>
            </Grid>
          )}
          <Grid className="friendly_reminder" item md={12} sm={12} xs={12}>
            <span
              className={classes.labelHeading}
              style={{
                marginBottom: 20,
                fontWeight: 600,
                fontFamily: "Source Sans Pro",
                display: "block",
              }}
            >
              Friendly Reminder
            </span>
            <Typography
              variant="body2"
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: 700,
                fontFamily: "Source Sans Pro",
              }}
            >
              <b>CANCELLATION</b>
            </Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontFamily: "Source Sans Pro",
              }}
            >
              {" "}
              You are free to cancel at any time. If you have signed up for a
              monthly or quarterly service and cancel after the first service we
              will charge you for the difference of what a one time fee would
              be. To cancel, call our service number, or email
              blasters@binblasters.com.{" "}
            </Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: 700,
                fontFamily: "Source Sans Pro",
              }}
            >
              <b>SCHEDULING</b>
            </Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontFamily: "Source Sans Pro",
              }}
            >
              We schedule cleaning the day of or the day after your trash pick
              up day. You will be notified via email and text 1 day before
              cleaning day, and 10-30 min before the cleaning operator arrives
              to clean your bins. We reserve the right to reschedule service if
              needed.{" "}
            </Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: 700,
                fontFamily: "Source Sans Pro",
              }}
            >
              <b>BILLING</b>
            </Typography>{" "}
            <Typography
              variant="body2"
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontFamily: "Source Sans Pro",
              }}
            >
              {" "}
              All billing is done using a credit card that is securely stored
              through our scheduling and routing software. Automatic payments
              will be charged upon service completion. If you have any disputes
              or discrepancies please call us immediately to get it resolved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
