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

const useStyles = makeStyles((theme) => ({
  formSelect: {
    height: "48px !important",
  },
  formActionContainer: {
    marginTop: theme.spacing(2),
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
  promoSuccess: {
    justifyContent: "center",
    color: "blue",
  },
  promoFail: {
    justifyContent: "center",
    color: "red",
  },
  submitBtn: {
    textAlign: "center",
    margin: "auto",
    marginTop: "20px",
  },

  timedropdown: {
    maxHeight: "100px",
  },
  autoaddress: {
    position: "relative",
    borderRadius: 4,
    border: "1px solid",
    lineHeight: "1.1876em",
    letterSpacing: "0.00938em",
    padding: "18.5px 14px",
  },
  labelHeading: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "25px",
  },
  labelHeadingSize3: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "25px",
    textAlign: "center",
  },
  labelHeadingSize2: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    // fontWeight: "700",
    // fontSize: "16px",
    // lineHeight: "28px",
  },
  promoAnchor: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "650",
    fontSize: "16px",
    letterSpacing: "0.00938em",
    lineHeight: 1.75,
    color: "blue",
  },
  contactContainer: {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
    padding: "30px 10px",
  },
  serviceContainer: {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
    padding: "7px 10px",
  },
  serviceContainer_inner: {
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: 600,
      lineHeight: "25px",
      width: "51px",
      height: "28px",
    },
    [theme.breakpoints.up("md")]: {
      fontWeight: 650,
    },
    [theme.breakpoints.up("lg")]: {
      fontWeight: 650,
    },
  },
  serviceDropdown: {
    [theme.breakpoints.down(599)]: {
      width: "250px",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

export default function ContactPage(props) {
  const classes = useStyles();
  const [binServicePlans, setBinServicePlans] = useState([]);
  const [timeArray] = useState(["Morning", "Afternoon", "Evening"]);
  const [stateArray, setStateArray] = useState([]);
  const [promoSuccessMessage, setPromoSuccessMessage] = useState("");
  const [promoFailMessage, setPromoFailMessage] = useState("");
  const [showPromoSuccessMessage, setShowPromoSuccessMessage] = useState(false);
  const [showPromoFailMessage, setShowPromoFailMessage] = useState(false);
  const [showPromoAnchor, setShowPromoAnchor] = useState(false);

  let storage = JSON.parse(localStorage.getItem("formData") || "{}");
  let pid = localStorage.getItem("pid");

  const [formData, setFormData] = useState({
    firstName: storage.firstName ? storage.firstName : "",
    lastName: storage.lastName ? storage.lastName : "",
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
    service: storage.service ? storage.service : pid != null ? pid : "",
    serviceDetail: storage.serviceDetail ? storage.serviceDetail : null,
    price: storage.price ? storage.price : 0,
    discountPrice: storage.discountPrice ? storage.discountPrice : 0,
    promoCode: storage.promoCode ? storage.promoCode : "",
    trashTime: storage.trashTime ? storage.trashTime : "Morning",
    trashDay: storage.trashDay ? storage.trashDay : "Sunday",
    franchiseeId: storage.franchiseeId
      ? storage.franchiseeId
      : props.franchiseeId
      ? props.franchiseeId
      : "",
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: servicePlans = [] },
        } = await axios.get(
          "https://backend.binblasters.com/api/stripe/planListing"
        );
        // console.log("PLANS", servicePlans);

        let plan = servicePlans.find((planItem) => planItem.id == pid);
        let pidPrice = plan ? plan.unit_amount / 100 : 0;

        setFormData({
          ...formData,
          price: pidPrice,
          discountPrice: pidPrice,
          serviceDetail: plan,
        });

        setBinServicePlans(servicePlans);
      } catch (error) {
        setBinServicePlans([]);
      }
    })();

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

  const applyPromoCode = async () => {
    try {
      if (formData.promoCode == "") {
        setShowPromoFailMessage(true);
        setShowPromoSuccessMessage(false);
        setPromoFailMessage("Invalid promo code!");
        return;
      }

      const { data: coupon = null } = await axios.get(
        `https://backend.binblasters.com/api/stripe/verifyPromoCode?couponCode=${formData.promoCode}`
      );

      if (!coupon || !coupon.valid) {
        setShowPromoFailMessage(true);
        setShowPromoSuccessMessage(false);
        setPromoFailMessage("Invalid promo code!");
        setFormData({ ...formData, discountPrice: formData.price });
        return;
      }

      if (coupon.amount_off) {
        formData.discountPrice = 0;
        if (formData.price > 0 && formData.price - coupon.amount_off > 0) {
          formData.discountPrice = formData.price - coupon.amount_off;
        }
        setShowPromoSuccessMessage(true);
        setShowPromoFailMessage(false);
        setPromoSuccessMessage(
          `The promo code of ${coupon.amount_off} amount has been applied successfully.`
        );
        setFormData({ ...formData });
        return;
      }

      if (!coupon.amount_off && coupon.percent_off) {
        formData.discountPrice = 0;
        if (
          formData.price > 0 &&
          formData.price - (formData.price * coupon.percent_off) / 100 > 0
        ) {
          formData.discountPrice =
            formData.price - (formData.price * coupon.percent_off) / 100;
        }

        setShowPromoSuccessMessage(true);
        setShowPromoFailMessage(false);
        setPromoSuccessMessage(
          `The promo code of ${coupon.percent_off}% has been applied successfully.`
        );
        setFormData({ ...formData });
      }
    } catch (error) {
      setShowPromoSuccessMessage(false);
      setShowPromoFailMessage(true);
      let { data: errorData = null } = error.response;
      if (errorData && errorData.error && errorData.error) {
        setPromoFailMessage(errorData.error);
      } else {
        setPromoFailMessage("Invalid promo code!");
      }
    }
  };

  const handleSubmit = async () => {
    setShowPromoFailMessage(false);
    setShowPromoSuccessMessage(false);
    localStorage.setItem("formData", JSON.stringify(formData));
    props.handleNext();
  };

  const togglePromo = () => {
    setShowPromoAnchor(!showPromoAnchor);
  };

  const handleServiceSelection = (event) => {
    let planId = event.target.value;
    let plan = binServicePlans.find((planItem) => planItem.id === planId);
    if (plan) {
      setFormData({
        ...formData,
        service: plan.id,
        price: plan.unit_amount / 100,
        discountPrice: plan.unit_amount / 100,
        serviceDetail: plan,
        promoCode: "",
      });
      setShowPromoFailMessage(false);
      setShowPromoSuccessMessage(false);
    }
  };

  return (
    <ValidatorForm onSubmit={handleSubmit} instantValidate>
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
                Contact Information
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <FormControl fullWidth={true}>
                <span className={classes.labelHeading}>First Name</span>
                <TextValidator
                  fullWidth={true}
                  onChange={handleChange}
                  name="firstName"
                  value={formData.firstName}
                  validators={["required"]}
                  errorMessages={["First Name is required!"]}
                  variant="outlined"
                  color="primary"
                />
              </FormControl>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <span className={classes.labelHeading}>Last Name</span>
              <FormControl fullWidth={true}>
                <TextValidator
                  fullWidth={true}
                  onChange={handleChange}
                  name="lastName"
                  value={formData.lastName}
                  validators={["required"]}
                  errorMessages={["Last name is required!"]}
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
            <Grid item md={6} sm={6} xs={12}>
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
            </Grid>

            <Grid item md={6} sm={6} xs={12}>
              <FormControl fullWidth={true}>
                <span className={classes.labelHeading}>Trash Pick Up Day</span>
                <SelectValidator
                  value={formData.trashDay}
                  name="trashDay"
                  fullWidth={true}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["Trash Pick Up Day is required!"]}
                  variant="outlined"
                  color="primary"
                  size="small"
                >
                  <MenuItem className={classes.labelHeading} value={"Sunday"}>
                    Sunday
                  </MenuItem>
                  <MenuItem className={classes.labelHeading} value={"Monday"}>
                    Monday
                  </MenuItem>
                  <MenuItem className={classes.labelHeading} value={"Tuesday"}>
                    Tuesday
                  </MenuItem>
                  <MenuItem
                    className={classes.labelHeading}
                    value={"Wednesday"}
                  >
                    Wednesday
                  </MenuItem>
                  <MenuItem className={classes.labelHeading} value={"Thursday"}>
                    Thursday
                  </MenuItem>
                  <MenuItem className={classes.labelHeading} value={"Friday"}>
                    Friday
                  </MenuItem>
                  <MenuItem className={classes.labelHeading} value={"Saturday"}>
                    Saturday
                  </MenuItem>
                </SelectValidator>
              </FormControl>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <FormControl fullWidth={true}>
                <span className={classes.labelHeading}>Trash Pick Up Time</span>
                <SelectValidator
                  value={formData.trashTime}
                  name="trashTime"
                  fullWidth={true}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["Trash Pick Up Time is required!"]}
                  variant="outlined"
                  color="primary"
                  size="small"
                >
                  {timeArray.map((time, index) => (
                    <MenuItem
                      className={classes.labelHeading}
                      key={index}
                      value={time}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </SelectValidator>
              </FormControl>
            </Grid>
            <div className={classes.submitBtn}>
              <Button type="submit" className={classes.submitButtonGrid}>
                Next
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Grid className={classes.serviceContainer} container spacing={2}>
            <Grid item md={12} sm={12} xs={12}>
              <Typography
                variant="subtitle1"
                className={classes.serviceContainer_inner}
                // style={{
                //   fontWeight: 650,
                //   fontFamily: "Source Sans Pro",
                //   fontSize: "16px",
                // }}
              >
                Service
              </Typography>
              <FormControl fullWidth={true}>
                <SelectValidator
                  value={formData.service}
                  name="service"
                  fullWidth={true}
                  onChange={handleServiceSelection}
                  validators={["required"]}
                  errorMessages={["Service slection is required!"]}
                  variant="outlined"
                  color="primary"
                  size="small"
                  className={classes.serviceDropdown}
                >
                  {binServicePlans.map((plan, index) => (
                    <MenuItem
                      className={classes.labelHeading}
                      key={index}
                      value={plan.id}
                    >
                      {plan.nickname}
                    </MenuItem>
                  ))}
                </SelectValidator>
              </FormControl>
            </Grid>

            {!showPromoAnchor && (
              <Grid item md={12} sm={12} xs={12}>
                <a
                  href="#"
                  onClick={() => {
                    togglePromo();
                  }}
                  className={classes.promoAnchor}
                >
                  <u>Promo Code</u>
                </a>
              </Grid>
            )}

            {showPromoAnchor && (
              <Grid item md={12} sm={12} xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: 650, fontFamily: "Source Sans Pro" }}
                >
                  Promo Code
                </Typography>
                <TextValidator
                  fullWidth={true}
                  onChange={handleChange}
                  name="promoCode"
                  value={formData.promoCode}
                  variant="outlined"
                  color="primary"
                  size="small"
                  className={classes.labelHeading}
                />
              </Grid>
            )}

            {showPromoAnchor && (
              <Grid item md={4} sm={4} xs={12}>
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={applyPromoCode}
                >
                  Apply
                </Button>
              </Grid>
            )}

            {showPromoAnchor && (
              <Grid item md={6} sm={6} xs={12}>
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={(event) => {
                    setShowPromoAnchor(!showPromoAnchor);
                    setShowPromoFailMessage(false);
                    setPromoSuccessMessage(false);
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            )}

            {showPromoSuccessMessage && (
              <p className={classes.promoSuccess}>{promoSuccessMessage}</p>
            )}
            {showPromoFailMessage && (
              <p className={classes.promoFail}>{promoFailMessage}</p>
            )}

            <Grid item md={12} sm={12} xs={12}>
              <h2 style={{ margin: "8px auto", fontFamily: "Source Sans Pro" }}>
                <b> Total: $ {formData.discountPrice}</b>
              </h2>
              <span className={classes.labelHeadingSize2}>
                When you sign up for a monthly or quarterly service your card
                will be charged on the same day every month or every quarter.{" "}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
}
