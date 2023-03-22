import React, { useState, useEffect } from "react";
import { Typography, Grid, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import "../index.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
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
  franchiseForm: {
    margin: "0",
  },
  customEmail: {
    position: "relative",
  },
  errormsg: {
    color: "#e53935",
    marginLeft: "14px",
    marginRight: "14px",
    margin: "0",
    fontSize: "11px",
    marginTop: "3px",
    textAlign: "left",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "13px",
    letterSpacing: "0.33px",
    marginLeft: "14px",
    marginRight: "14px",
    display: "block",
    width: "96%",
  },
  errormsgZip: {
    color: "#e53935",
    marginLeft: "14px",
    marginRight: "14px",
    margin: "0",
    fontSize: "11px",
    marginTop: "3px",
    textAlign: "left",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "13px",
    letterSpacing: "0.33px",
    marginLeft: "14px",
    marginRight: "14px",
    display: "block",
    width: "96%",
  },
  submitBtn: {
    margin: theme.spacing(1),
    position: "relative",
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  labelHeading: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "25px",
  },
  contactContainer: {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
    padding: "30px 10px",
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-12px",
    marginLeft: "-12px",
  },
}));

export default function ContactPage(props) {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [stateArray, setStateArray] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [duplicateZip, setDuplicateZip] = useState(false);
  // const [emailMessage, setEmailMessage] = useState(false);

  let storage = JSON.parse(localStorage.getItem("formData") || "{}");

  const [formData, setFormData] = useState({
    businessName: storage.businessName ? storage.businessName : "",
    phoneNumber: storage.phoneNumber ? storage.phoneNumber : "",
    address: storage.address ? storage.address : "",
    city: storage.city ? storage.city : "",
    state: storage.state ? storage.state : "",
    zipcode: storage.zipcode
      ? storage.zipcode
      : props.zipcode
      ? props.zipcode
      : "",
    email: storage.email ? storage.email : "",
  });

  useEffect(() => {
    // (async () => {
    //   try {
    //     const {
    //       data: { data: servicePlans = [] },
    //     } = await axios.get(
    //       "https://backend.binblasters.com/api/stripe/planListing"
    //     );
    //     // console.log("PLANS", servicePlans);

    //     let plan = servicePlans.find((planItem) => planItem.id == pid);
    //     let pidPrice = plan ? plan.unit_amount / 100 : 0;

    //     setFormData({
    //       ...formData,
    //     //   price: pidPrice,
    //     //   discountPrice: pidPrice,
    //     //   serviceDetail: plan,
    //     });

    //     // setBinServicePlans(servicePlans);
    //   } catch (error) {
    //     console.log(error)
    //     // setBinServicePlans([]);
    //   }
    // })();

    (async () => {
      try {
        const { data: stateList = [] } = await axios.get(
          "https://backend.binblasters.com/api/subscription/getStateList"
        );

        setStateArray(stateList);
      } catch (error) {
        setStateArray([]);
      }
    })();

    //custom validation rule for phone
    ValidatorForm.addValidationRule("isPhoneValid", (number) => {
      number = "+1" + number;
      if (!isValidPhoneNumber(number)) {
        return false;
      }
      return true;
    });
  }, []);

  const handleChange = (event) => {
    formData[event.target.name] = event.target.value ? event.target.value : "";
    setFormData({ ...formData });
  };

  const handleSubmit = async () => {
    setDuplicateEmail(false);
    setDuplicateZip(false);
    setLoading(true);

    console.log("you are here");
    try {
      let redirectURL = await axios({
        method: "post",
        url: "http://localhost:3001/api/franchise/create",
        data: {
          email: formData.email ? formData.email.trim() : "",
          businessName: formData.businessName,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      let redirectPage = window.open(redirectURL.data, "_blank");
      setLoading(false);
    } catch (error) {
      if (error.response.status == 411) {
        setDuplicateZip(true);
        setLoading(false);
      }
      if (error.response.status == 412) {
        setDuplicateEmail(true);
        setLoading(false);
      }

      console.log("SOMETHING WENT WRONG", error);
    }
  };

  return (
    <ValidatorForm
      className={classes.franchiseForm}
      onSubmit={handleSubmit}
      instantValidate
    >
      <div className="custom-franchisee">
        <Grid
          container
          id="custom-container"
          direction="row"
          justifyContent="center"
          spacing={3}
        >
          <Grid item md={8} sm={8} xs={12}>
            <Grid className={classes.contactContainer} container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: 700 }}
                  align="center"
                >
                  Franchisee Signup
                </Typography>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <FormControl fullWidth={true}>
                  <span className={classes.labelHeading}>Bussiness Name</span>
                  <TextValidator
                    fullWidth={true}
                    onChange={handleChange}
                    name="businessName"
                    value={formData.businessName}
                    validators={["required"]}
                    errorMessages={["Bussiness Name is required!"]}
                    variant="outlined"
                    color="primary"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <span className={classes.labelHeading}>Phone Number</span>
                <TextValidator
                  fullWidth
                  onChange={handleChange}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  validators={["required", "isPhoneValid"]}
                  errorMessages={[
                    "Phone number is required!",
                    "Enter number without the US country code.",
                  ]}
                  variant="outlined"
                  color="primary"
                />
              </Grid>
              <Grid className={classes.customEmail} item md={6} sm={6} xs={12}>
                <FormControl fullWidth={true}>
                  <span className={classes.labelHeading}>Email</span>
                  <TextValidator
                    fullWidth={true}
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    validators={["required", "isEmail"]}
                    errorMessages={["Email is required", "Email is not valid"]}
                    variant="outlined"
                    color="primary"
                  />
                </FormControl>
                {duplicateEmail && (
                  <Grid item>
                    <span className={classes.errormsg}>
                      Email already in use! Please use another email to sign up.
                    </span>
                  </Grid>
                )}
              </Grid>

              <Grid item md={12} sm={12} xs={12}>
                <FormControl fullWidth={true}>
                  <span className={classes.labelHeading}>Address</span>
                  <TextValidator
                    fullWidth={true}
                    onChange={handleChange}
                    name="address"
                    value={formData.address}
                    validators={["required"]}
                    errorMessages={["Address is required"]}
                    variant="outlined"
                    color="primary"
                  />
                </FormControl>
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <FormControl fullWidth={true}>
                  <span className={classes.labelHeading}>City</span>
                  <TextValidator
                    fullWidth={true}
                    onChange={handleChange}
                    name="city"
                    value={formData.city}
                    validators={["required"]}
                    errorMessages={["City is required"]}
                    variant="outlined"
                    color="primary"
                  />
                </FormControl>
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <span className={classes.labelHeading}>State</span>
                <FormControl fullWidth={true}>
                  <SelectValidator
                    value={formData.state}
                    name="state"
                    fullWidth={true}
                    onChange={handleChange}
                    validators={["required"]}
                    errorMessages={["State is required!"]}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  >
                    {stateArray.map((data, index) => (
                      <MenuItem
                        className={classes.labelHeading}
                        key={index}
                        value={data.name}
                      >
                        {data.name}
                      </MenuItem>
                    ))}
                  </SelectValidator>
                </FormControl>
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <FormControl fullWidth={true}>
                  <span className={classes.labelHeading}>Zip Code</span>
                  <TextValidator
                    fullWidth={true}
                    onChange={handleChange}
                    name="zipcode"
                    value={formData.zipcode}
                    validators={["required"]}
                    errorMessages={["Zipcode is required"]}
                    variant="outlined"
                    color="primary"
                  />
                </FormControl>
                {duplicateZip && (
                  <Grid item>
                    <span className={classes.errormsgZip}>
                      Zipcode already in use! Please use another zipcode to sign
                      up.
                    </span>
                  </Grid>
                )}
              </Grid>
              <div className={classes.submitBtn}>
                <Button type="submit" className={classes.submitButtonGrid}>
                  Submit
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ValidatorForm>
  );
}
