import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  container: {
    margin: "16px auto",
    height: "100%",
    minHeight: "calc(100vh - 215px)",
    display: "flex",
  },
  stepper: {
    margin: "auto",
    padding: theme.spacing(1),
    maxWidth: 350,
  },
  successImage: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    gap: "10px",
    background: "#FFFFFF",
    flex: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      maxWidth: "320px",
      margin: "0 auto",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      //
    },
    [theme.breakpoints.up("lg")]: {
      //
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      fontSize: "14px",
      lineHeight: "1.3",
      padding: "0 20px",
      marginTop: "10px",
    },
    [theme.breakpoints.up("md")]: {
      //
    },
    [theme.breakpoints.up("lg")]: {
      //
    },
  },
  labelHeading: {
    [theme.breakpoints.down("sm")]: {
      lineHeight: "1",
      fontSize: "33px !important",
    },
    [theme.breakpoints.up("md")]: {
      //
    },
    [theme.breakpoints.up("lg")]: {
      //
    },
  },
  flexblock: {
    display: "flex",
  },
  image1: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
      //
    },
    [theme.breakpoints.up("lg")]: {
      //
    },
  },
  Successtext: {
    display: "flex",
    width: "100%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#000000",
    flex: "none",
    // order: "1",
    flexGrow: "0",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      //
    },
    [theme.breakpoints.up("md")]: {
      //
    },
    [theme.breakpoints.up("lg")]: {
      //
    },
  },
}));

export default function CheckoutSuccess() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container
        component="main"
        maxWidth="md"
        className={classes.container}
      >
        <Grid container direction="row" justifyContent="center" spacing={3}>
          <Grid item md={12} className={classes.flexblock} direction="column" justifyContent="center" sm={12} xs={12}>
            <h1
              className={classes.labelHeading}
              style={{
                fontSize: 50,
                fontWeight: 700,
                fontFamily: "Teko, sans-serif",
                textAlign: "center",
              }}
            >
              Thank you for Signing Up!
            </h1>
            <div className={classes.Successtext}>
              <p
                className={classes.text}
                style={{
                  fontFamily: "Source Sans Pro",
                  textAlign: "center",
                  width: "51%",
                }}
              >
                You will recieve a confirmation email, and communication about
                your first cleaning service. Stink free bins are coming your
                way!
              </p>
            </div>
            <div className={classes.successImage}>
              <img className={classes.image1} src="Frame.png" />
              <img className={classes.image1} src="Group-94.png" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
