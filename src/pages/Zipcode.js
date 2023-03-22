import React, { useState, useEffect } from "react";
import { Grid, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "../index.css";
import { useSearchParams } from "react-router-dom";
import * as qs from "qs";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formSelect: {
    height: "48px !important",
  },

  submitButtonGrid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    background: "#A1E7AB",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "100px",
    width: "81px",
    height: "38px",
    fontFamily: "Source Sans Pro",
    fontWeight: "600",
    flex: "none",
    order: "0",
  },

  submitBtn: {
    textAlign: "center",
    marginTop: "20px",
  },
  zipCodeData: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submitButtonGrid2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    background: "#ffffff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "100px",
    width: "81px",
    height: "38px",
    fontFamily: "Source Sans Pro",
    fontWeight: "600",
    flex: "none",
    order: "0",
    color: "#000000",
    // "&:hover": {
    //   color: "#000",
    // },
  },
  labelHeading: {
    fontStyle: "normal",
    fontSize: "15px",
    margin: "25px 0px 0px 0px ",
    lineHeight: "25px",
  },
  successMessage: {
    fontStyle: "normal",
    fontSize: "15px",
    margin: "25px 0px 0px 0px ",
    lineHeight: "25px",
    color: "green",
  },
  labelHeadingSize2: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "25px",
    lineHeight: "28px",
  },
  fieldEmail: {
    margin: "25px 0px 0px 0px ",
  },
}));

export default function ZipCode() {
  const classes = useStyles();
  // const navigate = useNavigate();

  const search = useLocation().search;
  let selectedPlan = new URLSearchParams(search).get("pid");
  localStorage.setItem("pid", selectedPlan);
  let loadLocalStorage = localStorage.getItem("formData");

  if (loadLocalStorage != null) {
    loadLocalStorage = JSON.parse(loadLocalStorage);
  }

  const [zipcode, setZipcode] = useState();
  const [notifyZip, setNotifyZip] = useState();
  const [email, setEmail] = useState();
  const [zipCodeBusinesses, setZipCodeBusinesses] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);

  useEffect(() => {
    ValidatorForm.addValidationRule("isValidUSZip", (zip) => {
      if (zip) {
        let zipRegex = /^\d{5}(-\d{4})?$/;
        let testEx = zipRegex.test(zip);
        return testEx;
      }
      return true;
    });
  }, []);

  const handleChange = (event) => {
    setZipcode(event.target.value);
  };

  const goBack = () => {
    setSubmitted(false);
    setZipcode("");
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      let redirectPage = window.open("", "_blank");
      setNotifyZip(zipcode);

      const { data: zipCodeData } = await axios.get(
        `https://backend.binblasters.com/api/franchise/zipcodeLookup?zipcode=${zipcode}`
      );

      if (zipCodeData.length == 0) {
        redirectPage.window.close();
        setZipCodeBusinesses([]);
        setSubmitted(true);
        setZipcode("");

        return false;
      }

      setZipCodeBusinesses(zipCodeData);
      setSubmitted(true);
      const id = zipCodeData[0]._id;
      redirectPage.document.write(
        `<h2 style="text-align:center;font-family: Source Sans Pro;">Please wait while we redirect you to the Checkout Page!</h2>`
      );

      localStorage.removeItem("formData");
      localStorage.removeItem("activeStep");

      let backendUrl = `${process.env.REACT_APP_BACKEND_URL}?id=${id}&zipcde=${zipcode}&pid=${selectedPlan}`;
      let encodeUrl = await encodeURIComponent(backendUrl);

      redirectPage.location.href = `${process.env.REACT_APP_FRONT_URL}/signup?data=${encodeUrl}`;

      setTimeout(() => {
        setZipCodeBusinesses([]);
        setSubmitted(false);
        setZipcode("");
      }, 3000);

      // window.open(
      //   `${process.env.REACT_APP_FRONT_URL}/signup?data=${encodeUrl}`,
      //   "_blank"
      // );
    } catch (error) {
      setZipCodeBusinesses([]);
      setSubmitted(true);
      return false;
    }
  };

  const handleSubmitEmail = async () => {
    try {
      await axios({
        method: "post",
        url: "https://backend.binblasters.com/api/notifyEmail/create",
        data: {
          email: email ? email.trim() : "",
          zipcode: Number(notifyZip),
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setEmailMessage(true);

      setTimeout(() => {
        setEmailMessage(false);
        setSubmitted(false);
        setEmail("");
      }, 5000);
    } catch (error) {
      console.log("SOMETHING WENT WRONG");
    }
  };

  const refreshPage = () => {
    setSubmitted(false);
    setZipcode("");
    setZipCodeBusinesses([]);
  };

  return (
    <Container className="billing-page" component="main" maxWidth="md">
      {(!submitted || (submitted && zipCodeBusinesses.length > 0)) && (
        <ValidatorForm onSubmit={handleSubmit} instantValidate>
          <Grid
            container
            spacing={2}
            style={{
              border: "2px solid",
              margin: "40px auto",
              padding: "10px 15px 15px 20px",
              maxWidth: 600,
            }}
          >
            <Grid item md={12} sm={12} xs={12}>
              <FormControl fullWidth={true}>
                <span className={classes.labelHeadingSize2}>
                  Let's start with where you live
                </span>
                <span className={classes.labelHeading}>
                  Please enter your Zip Code
                </span>
                <TextValidator
                  fullWidth={true}
                  onChange={handleChange}
                  name="zipcode"
                  autoComplete="off"
                  value={zipcode}
                  validators={["required", "isValidUSZip"]}
                  errorMessages={[
                    "Zipcode is required",
                    "Please enter valid US Zip code!",
                  ]}
                  variant="outlined"
                  color="primary"
                />
              </FormControl>
            </Grid>

            {/* <List className={classes.zipCodeData}>
              {zipCodeBusinesses.map((data, index) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={data.businessName} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={(e) => handleSelect(e, data)}
                    >
                      <CheckIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List> */}

            <Grid item md={12} sm={12} xs={12}>
              {zipCodeBusinesses.length === 0 && (
                <Grid item md={6} sm={6} xs={12}>
                  <div className={classes.submitBtn}>
                    <Box>
                      <Button
                        type="submit"
                        className={classes.submitButtonGrid}
                      >
                        Submit
                      </Button>
                    </Box>
                  </div>
                </Grid>
              )}
              <Grid item md={6} sm={6} xs={12}>
                <div className={classes.submitBtn}>
                  {zipCodeBusinesses.length > 0 && (
                    <Box>
                      <Button
                        onClick={() => refreshPage()}
                        className={classes.submitButtonGrid2}
                      >
                        Cancel
                      </Button>
                    </Box>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </ValidatorForm>
      )}

      {submitted && zipCodeBusinesses.length === 0 && (
        <div>
          <ValidatorForm onSubmit={handleSubmitEmail} instantValidate>
            <Grid
              container
              spacing={2}
              style={{
                border: "2px solid",
                margin: "40px auto",
                padding: "10px 15px 15px 20px",
                maxWidth: 509,
              }}
            >
              <Grid item md={12} sm={12} xs={12}>
                <FormControl fullWidth={true}>
                  <span className={classes.labelHeadingSize2}>
                    Oh no, we don't service your location at this time.
                  </span>
                  <span className={classes.labelHeading}>
                    Enter your email and we'all notify you when we begin to
                    service your location.
                  </span>
                  <span className={classes.labelHeading}>
                    If you live in a city that we service but your zip code is
                    not recognized please contact us, 801-658-6007.
                  </span>
                  <TextValidator
                    fullWidth={true}
                    // label="Email"
                    className={classes.fieldEmail}
                    onChange={handleEmail}
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    validators={["required", "isEmail"]}
                    errorMessages={["Email is required", "Email is not valid"]}
                    variant="outlined"
                    color="primary"
                  />
                </FormControl>
              </Grid>

              <Grid item md={12} sm={12} xs={12}>
                {zipCodeBusinesses.length === 0 && (
                  <Grid item md={6} sm={6} xs={12}>
                    <div className={classes.submitBtn}>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Button
                          type="submit"
                          className={classes.submitButtonGrid}
                        >
                          Submit
                        </Button>
                        <Button
                          className={classes.submitButtonGrid2}
                          onClick={goBack}
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </div>
                  </Grid>
                )}
                <Grid item md={6} sm={6} xs={12}>
                  <div className={classes.submitBtn}>
                    {zipCodeBusinesses.length > 0 && (
                      <Box>
                        <Button
                          onClick={() => refreshPage()}
                          className={classes.submitButtonGrid2}
                        >
                          Cancel
                        </Button>
                      </Box>
                    )}
                  </div>
                </Grid>
                {emailMessage && (
                  <Grid item md={12} sm={12} xs={12}>
                    <span className={classes.successMessage}>
                      Your email has been sent to the Support team!
                    </span>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      )}
    </Container>
  );
}
