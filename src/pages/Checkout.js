import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Container,
  MenuItem,
  Paper,
  List,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import "../index.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  ElementsConsumer,
  CardExpiryElement,
  CardCvcElement,
  CardNumberElement,
  CardElement,
} from "@stripe/react-stripe-js";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
    marginRight: "0",
  },
  submitButtonGridBack: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "100px",
    width: "81px",
    height: "38px",
    fontFamily: "Source Sans Pro",
    fontWeight: "600",
    flex: "none",
    order: "0",
    display: "flex",
    justifyContent: "center",
    marginRight: "20px",
  },

  submitBtn: {
    textAlign: "center",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  termsLabel: {
    // marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  promoSuccess: {
    justifyContent: "center",
    color: "blue",
  },
  promoFail: {
    justifyContent: "center",
    color: "red",
  },
  cardElement: {
    position: "relative",
    borderRadius: 4,
    border: "1px solid",
    lineHeight: "1.1876em",
    letterSpacing: "0.00938em",
    padding: "18.5px 14px",
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
    lineHeight: "28px",
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
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "0.00938em",
    lineHeight: 1.75,
    color: "blue",
    cursor: "pointer",
  },
  gridParagraph: {
    overflowY: "scroll",
    height: "350px",
    width: "100%",
    border: "1px solid #ddd",
    padding: "10px",
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
  checkLabel: {
    fontFamily: '"Source Sans Pro" !important',
    fontSize: "16px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "28px",
    display: "inline-block",
    verticalAlign: "middle",
    color: "#263238",
    cursor: "pointer",
    letterSpacing: "-0.05px",
  },
  labelCheckBox: {
    marginRight: "0",
  },
  checkLabelLink: {
    color: "#263238",
  },
  paper: {
    fontFamily: '"Source Sans Pro" !important',
    fontSize: "14px",
    fontStyle: "normal",
  },
  paperTitle: {},
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    fontFamily: '"Source Sans Pro" !important',
    fontSize: "18px",
    fontStyle: "normal",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h3">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert" style={{ color: "red" }}>
    {children}
  </div>
);

const CardWrapper = (props) => {
  const classes = useStyles();

  const [cardNumberError, setCardNumberError] = useState({
    message: "",
    complete: false,
  });
  const [cardExpiryError, setCardExpiryError] = useState({
    message: "",
    complete: false,
  });
  const [cardCvvError, setCardCvvError] = useState({
    message: "",
    complete: false,
  });

  const handleCardNumberChange = (event) => {
    setCardNumberError({
      ...cardNumberError,
      complete: event.complete || false,
      message:
        event && event.error && event.error.message ? event.error.message : "",
    });

    props.onButtonChange(
      event.complete && cardExpiryError.complete && cardCvvError.complete
    );
  };

  const handleExpiryChange = (event) => {
    setCardExpiryError({
      ...cardExpiryError,
      complete: event.complete || false,
      message:
        event && event.error && event.error.message ? event.error.message : "",
    });
    props.onButtonChange(
      cardNumberError.complete && event.complete && cardCvvError.complete
    );
  };

  const handleCVVChange = (event) => {
    setCardCvvError({
      ...cardCvvError,
      complete: event.complete || false,
      message:
        event && event.error && event.error.message ? event.error.message : "",
    });

    props.onButtonChange(
      cardNumberError.complete && cardExpiryError.complete && event.complete
    );
  };

  return (
    <Grid container direction="row" spacing={3}>
      <Grid item md={12} sm={12} xs={12}>
        <span className={classes.labelHeading}>Credit Card Number</span>
        <CardNumberElement
          id="card-element-1"
          options={{
            showIcon: true,
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          onChange={handleCardNumberChange}
          className={classes.cardElement}
        />
        {cardNumberError && (
          <ErrorMessage>{cardNumberError.message}</ErrorMessage>
        )}
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <span className={classes.labelHeading}>Expiration</span>
        <CardExpiryElement
          id="card-element-3"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          onChange={handleExpiryChange}
          className={classes.cardElement}
          key={3}
        />
        {cardExpiryError && (
          <ErrorMessage>{cardExpiryError.message}</ErrorMessage>
        )}
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <span className={classes.labelHeading}>CVV </span>
        <CardCvcElement
          id="card-element-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          onChange={handleCVVChange}
          className={classes.cardElement}
          key={2}
        />
        {cardCvvError && <ErrorMessage>{cardCvvError.message}</ErrorMessage>}
      </Grid>
    </Grid>
  );
};

function CheckoutPage(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [contactData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {}
  );

  const [open, setOpen] = React.useState(false);

  const [stripeValidationFlag, setStripeValidationFlag] = useState(true);
  const [submitFlag, setSubmitFlag] = useState(false);

  const [stateArray, setStateArray] = useState([]);
  const [binServicePlans, setBinServicePlans] = useState([]);
  const [promoSuccessMessage, setPromoSuccessMessage] = useState("");
  const [promoFailMessage, setPromoFailMessage] = useState("");
  const [showPromoSuccessMessage, setShowPromoSuccessMessage] = useState(false);
  const [showPromoFailMessage, setShowPromoFailMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showPromoAnchor, setShowPromoAnchor] = useState(false);
  const [franchiseeInfo, setFranchiseeInfo] = useState({});
  const [formData, setFormData] = useState({
    email: contactData.email || "",
    phoneNumber: contactData.phoneNumber || "",
    cardName: `${contactData.firstName || ""} ${contactData.lastName || ""}`,
    addressCheck: contactData.address ? true : false,
    validationCheck: false,
    service: contactData.service || "",
    serviceDetail: contactData.serviceDetail || "",
    address: contactData.address || "",
    city: contactData.city || "",
    state: contactData.state || "Alabama",
    zipcode: contactData.zipcode || "",
    price: contactData.price || 0,
    discountPrice: contactData.discountPrice || 0,
    promoCode: contactData.promoCode || "",
    billingAddress: contactData.address || "",
    billingCity: contactData.city || "",
    billingState: contactData.state || "Alabama",
    billingZipcode: contactData.zipcode || "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      contactData.price > 0 &&
      contactData.discountPrice > 0 &&
      contactData.discountPrice !== contactData.price
    ) {
      setPromoSuccessMessage("Discount coupon applied.");
      setShowPromoSuccessMessage(true);
    }

    (async () => {
      try {
        const {
          data: { data: servicePlans = [] },
        } = await axios.get(
          "https://backend.binblasters.com/api/stripe/planListing"
        );
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

    (async () => {
      try {
        const { data: franchiseeInfo = {} } = await axios.get(
          `https://backend.binblasters.com/api/franchise/info?id=${contactData.franchiseeId}`
        );

        setFranchiseeInfo(franchiseeInfo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    formData[event.target.name] =
      event.target.value == undefined ? "" : event.target.value;
    setFormData({ ...formData });
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

  const handleCheckChange = (event) => {
    if (event.target.name == "checkedA") {
      formData["addressCheck"] = !formData.addressCheck;
      if (formData.addressCheck) {
        formData["address"] = contactData.address;
      }

      setFormData({ ...formData });
    }
    if (event.target.name == "checkedB") {
      formData["validationCheck"] = !formData.validationCheck;
      setFormData({ ...formData });
    }
    formData[event.target.name] =
      event.target.value == undefined ? "" : event.target.value;
  };

  const applyPromoCode = async () => {
    try {
      if (formData.promoCode == "") {
        setShowPromoFailMessage(true);
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

  const processOneTimePayment = async () => {
    try {
      setSubmitFlag(true);
      setStatusMessage("Creating stripe customer..");

      let cardToken = await props.stripe.createToken(
        props.elements.getElement(CardNumberElement)
      );

      let { data: customer } = await axios({
        method: "post",
        url: "https://backend.binblasters.com/api/stripe/customer",
        data: {
          email: formData.email ? formData.email.trim() : "",
          firstName: `${contactData.firstName || ""}`,
          lastName: `${contactData.lastName || ""}`,
          trashDay: contactData.trashDay,
          trashTime: contactData.trashTime,
          cardToken: cardToken.token.id,
          address: {
            street: formData.address,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!customer) {
        setStatusMessage(
          "Something went wrong while creating stripe customer!"
        );
        return Promise.resolve();
      }

      let applicationFees = Math.round(
        (formData.discountPrice / 100) *
          franchiseeInfo.stripeInfo.applicationPercent
      );

      setStatusMessage("Creating payment intent...");
      let { data: intentData } = await axios({
        method: "post",
        url: "https://backend.binblasters.com/api/stripe/createPaymentIntent",
        data: {
          amount: parseInt(formData.discountPrice * 100),
          currency: "usd",
          customer: customer.id,
          application_fee_amount: applicationFees * 100,
          transfer_data: {
            destination: franchiseeInfo.stripeInfo.stripeAccountId,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!intentData.client_secret) {
        setStatusMessage("Invalid intent data...");
        return Promise.resolve();
      }

      setStatusMessage("Payment confirmation initiated...");
      const { paymentIntent } = await props.stripe.confirmCardPayment(
        intentData.client_secret,
        {
          receipt_email: formData.email,
          payment_method: {
            card: props.elements.getElement(CardNumberElement),
            billing_details: {
              name: formData.cardName,
              address: {
                line1: formData.addressCheck
                  ? formData.address
                  : formData.billingAddress,
                city: formData.addressCheck
                  ? formData.city
                  : formData.billingCity,
                state: formData.addressCheck
                  ? formData.state
                  : formData.billingState,
                postal_code: formData.addressCheck
                  ? formData.zipcode
                  : formData.billingZipcode,
                country: "US",
              },
              phone: formData.phoneNumber,
            },
          },
          shipping: {
            name: formData.cardName,
            address: {
              line1: formData.address,
              city: formData.city,
              state: formData.state,
              postal_code: formData.zipcode,
              country: "US",
            },
            phone: formData.phoneNumber,
          },
        }
      );

      let plan = binServicePlans.find(
        (planItem) => planItem.id === formData.service
      );

      let updatingUserPlan = await axios({
        method: "post",
        url: "https://backend.binblasters.com/api/user/updateUser",
        data: {
          customer: customer.id,
          id: plan.id,
          nickname: plan.nickname,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      let zapierUpdate = axios({
        method: "post",
        url: "https://backend.binblasters.com/api/user/zapierUpdate",
        data: {
          email: formData.email ? formData.email.trim() : "",
          firstName: `${contactData.firstName || ""}`,
          lastName: `${contactData.lastName || ""}`,
          trashDay: contactData.trashDay,
          trashTime: contactData.trashTime,
          phone: contactData.phoneNumber,
          address: {
            street: formData.address,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
          },
          plan: formData.serviceDetail,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatusMessage(
        `Payment intent ${paymentIntent.id}: ${paymentIntent.status}`
      );

      setTimeout(() => {
        setStatusMessage(`Payment ${paymentIntent.status}`);
        navigate(`/success`);
      }, 5000);

      return Promise.resolve();
    } catch (error) {
      setStatusMessage(`Payment failed: ${error.message}`);
      return Promise.resolve();
    }
  };

  const processRecurringPayment = async () => {
    try {
      setSubmitFlag(true);
      setStatusMessage("Creating stripe customer..");

      let cardToken = await props.stripe.createToken(
        props.elements.getElement(CardNumberElement)
      );

      let { data: customer } = await axios({
        method: "post",
        url: "https://backend.binblasters.com/api/stripe/customer",
        data: {
          email: formData.email ? formData.email.trim() : "",
          firstName: `${contactData.firstName || ""}`,
          lastName: `${contactData.lastName || ""}`,
          trashDay: contactData.trashDay,
          trashTime: contactData.trashTime,
          cardToken: cardToken.token.id,
          address: {
            street: formData.address,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!customer) {
        setStatusMessage(
          "Something went wrong while creating stripe customer!"
        );
        return Promise.resolve();
      }

      setStatusMessage("Creating recurring subscription...");
      let { data: recurringData } = await axios({
        method: "post",
        url: "https://backend.binblasters.com/api/stripe/createRecurringPayment",
        data: {
          customer: customer.id,
          price: formData.service,
          application_fee_percent: franchiseeInfo.stripeInfo.applicationPercent,
          destination: franchiseeInfo.stripeInfo.stripeAccountId,
          coupon: formData.promoCode,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatusMessage(`Subscription created successfully!`);

      let zapierUpdate = axios({
        method: "post",
        url: "https://backend.binblasters.com/api/user/zapierUpdate",
        data: {
          email: formData.email ? formData.email.trim() : "",
          firstName: `${contactData.firstName || ""}`,
          lastName: `${contactData.lastName || ""}`,
          trashDay: contactData.trashDay,
          trashTime: contactData.trashTime,
          phone: contactData.phoneNumber,
          address: {
            street: formData.address,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
          },
          plan: formData.serviceDetail,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTimeout(() => {
        navigate(`/success`);
      }, 5000);

      return Promise.resolve();
    } catch (error) {
      setStatusMessage(`Payment failed: ${error.message}`);
      return Promise.resolve();
    }
  };

  const handleSubmit = async () => {
    setShowPromoFailMessage(false);
    setShowPromoSuccessMessage(false);

    if (!props.stripe || !props.elements) {
      setStatusMessage("Internal error: stripe setup issue, try again later!");
      return;
    }

    let { serviceDetail: plan, service: planId } = formData;
    if (!planId || !plan || !plan.type) {
      setStatusMessage("Invalid service plan!");
      return;
    }

    switch (plan.type) {
      case "one_time":
        await processOneTimePayment();
        break;
      case "recurring":
        await processRecurringPayment();
        break;
      default:
        setStatusMessage("Invalid plan type!");
        break;
    }

    localStorage.removeItem("formData");
    localStorage.removeItem("activeStep");
  };

  const togglePromo = () => {
    setShowPromoAnchor(!showPromoAnchor);
  };

  const goBackPage = () => {
    props.handleBack();
  };

  return (
    <React.Fragment>
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
                  style={{
                    fontWeight: 650,
                    fontFamily: "Source Sans Pro",
                    fontSize: "28px",
                  }}
                  align="center"
                >
                  Payment Information
                </Typography>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <FormControl fullWidth={true}>
                  <CardWrapper
                    onButtonChange={(flag) => {
                      setStripeValidationFlag(!flag);
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <span className={classes.labelHeading}>Name on Card</span>
                <TextValidator
                  id="Name on card"
                  fullWidth
                  name="cardName"
                  value={formData.cardName}
                  className="name-on-card input-field w-100"
                  onChange={handleChange}
                  variant="outlined"
                  color="primary"
                  validators={["required"]}
                  errorMessages={["Please provide name"]}
                />
              </Grid>
              {!formData.addressCheck && (
                <>
                  <Grid item md={12} sm={12} xs={12}>
                    <FormControl fullWidth={true}>
                      <span className={classes.labelHeading}>Address</span>
                      <TextValidator
                        fullWidth={true}
                        onChange={handleChange}
                        name="billingAddress"
                        value={formData.billingAddress}
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
                        name="billingCity"
                        value={formData.billingCity}
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
                        value={formData.billingState}
                        name="billingState"
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
                            value={index}
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
                        name="billingZipcode"
                        value={formData.billingZipcode}
                        validators={["required"]}
                        errorMessages={["Zipcode is required"]}
                        variant="outlined"
                        color="primary"
                      />
                    </FormControl>
                  </Grid>
                </>
              )}
              <Grid item md={12} sm={12} xs={12}>
                <FormControlLabel
                  onChange={handleCheckChange}
                  className="billing-check input-check w-100"
                  control={
                    <Checkbox checked={formData.addressCheck} name="checkedA" />
                  }
                  label="Billing address same as contact information"
                />
              </Grid>
              {/* <img src="../../public/sslImage.png" /> */}
              <img src="sslImage.png" />

              {/* <Grid item md={12} sm={12} xs={12}> */}
              {/* <span
                  className={classes.labelHeading}
                  style={{ fontWeight: 600 }}
                >
                  Friendly Reminder
                </span>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body2">
                    <b>CANCELLATION</b> You are free to cancel at any time. If
                    you have signed up for a monthly or quarterly service and
                    cancel after the first service we will charge you for the
                    difference of what a one time fee would be. To cancel, call
                    our service number, or email blasters@binblasters.com.{" "}
                    <b>SCHEDULING</b> We schedule cleaning the day of or the day
                    after your trash pick up day. You will be notified via email
                    and text 1 day before cleaning day, and 10-30 min before the
                    cleaning operator arrives to clean your bins. We reserve the
                    right to reschedule service if needed. <b>BILLING</b> All
                    billing is done using a credit card that is securely stored
                    through our scheduling and routing software. Automatic
                    payments will be charged upon service completion. If you
                    have any disputes or discrepancies please call us
                    immediately to get it resolved.
                  </Typography>
                </Grid> */}
              <Grid item md={12} sm={12} xs={12}>
                <FormControlLabel
                  onChange={handleCheckChange}
                  className={classes.labelCheckBox}
                  control={
                    <Checkbox
                      checked={formData.validationCheck}
                      name="checkedB"
                      id="checkeDB"
                      required={true}
                    />
                  }
                />
                <label for="checkeDB" className={classes.checkLabel}>
                  {" "}
                  I agree to{" "}
                  <a
                    href="#"
                    onClick={handleOpen}
                    className={classes.checkLabelLink}
                  >
                    Terms of Service
                  </a>
                  .
                </label>

                {/* <Modal
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  BackdropComponent={Backdrop}
                > */}
                <Dialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                  >
                    Terms of service
                  </DialogTitle>
                  <DialogContent dividers>
                    <Typography
                      component={"span"}
                      className={classes.paper}
                      gutterBottom
                    >
                      <h3>Service Agreement</h3>
                      Bin Blasters is committed to providing an outstanding bin
                      cleaning service and customer experience. Our cleaning
                      process and equipment allows us to clean your bins with
                      outstanding results.
                    </Typography>
                    <Typography className={classes.paper} gutterBottom>
                      We strive to make your bin cleaning experience as easy as
                      possible.. We will notify you 24 hours before your
                      scheduled bin cleaning day, and text you 10-30 min before
                      the cleaning operator arrives.
                    </Typography>
                    <Typography className={classes.paper} gutterBottom>
                      Customers are responsible for leaving bins on the curb on
                      cleaning day and ensuring that they are empty. Bin
                      Blasters schedules cleaning times either the same day or
                      the day after trash pickup. If your bins are full of
                      trash, or not left on the curb when the cleaning operator
                      arrives, customers will be subject to the scheduled
                      service charge.
                    </Typography>
                    <Typography
                      className={classes.paper}
                      component={"span"}
                      gutterBottom
                    >
                      <h3>Cancellation</h3>
                      You are free to cancel at any time. If you cancel a
                      monthly or quarterly service prior to 3 services there is
                      a $50 cancellation charge.To cancel, call 800-479-0794, or
                      email info@binblasters.com.
                    </Typography>
                    <Typography
                      component={"span"}
                      className={classes.paper}
                      gutterBottom
                    >
                      <h3> Scheduling</h3> We schedule cleaning the day of or
                      the day after your trash pick up day. You will be notified
                      via email and text 1 day before cleaning day, and 10-30
                      min before the cleaning operator arrives to clean your
                      bins.We reserve the right to reschedule service if needed.
                    </Typography>
                    <Typography
                      component={"span"}
                      className={classes.paper}
                      gutterBottom
                    >
                      <h3>Recycle bins scheduling </h3>Occasionally recycling
                      bins pick schedules do not coincide with your regular
                      trash pick up schedules.If your recycle bin is full of
                      trash we can not clean that bin.
                      <br />
                    </Typography>
                    <Typography className={classes.paper} gutterBottom>
                      There are 2 options for cleaning recycling bins when trash
                      pick up day does not sync:
                    </Typography>
                    <Typography className={classes.paper} gutterBottom>
                      1) If your recycling bin is full of trash, but you want it
                      clean it is your responsibility to empty the contents of
                      the recycle bin out before our operator arrives.
                      <br /> 2) We will skip cleaning the recycling bin and
                      clean another bin, and get it next time the trash pick up
                      schedule matches up.
                    </Typography>

                    <Typography
                      component={"span"}
                      className={classes.paper}
                      gutterBottom
                    >
                      <h3> Billing</h3> All billing is done using a credit card
                      that is securely stored through Stripe. Automatic payments
                      will be charged the same day each month or quarter. If you
                      have any disputes or discrepancies please call us
                      immediately to get it resolved.
                    </Typography>
                  </DialogContent>
                </Dialog>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <div className={classes.submitBtn} style={{}}>
                  <Button
                    onClick={() => {
                      goBackPage();
                    }}
                    className={classes.submitButtonGridBack}
                    disabled={submitFlag}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className={classes.submitButtonGrid}
                    disabled={stripeValidationFlag || submitFlag}
                  >
                    Sign Up
                  </Button>
                </div>
              </Grid>
              {/* </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Grid className={classes.serviceContainer} container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: 650, fontFamily: "Source Sans Pro" }}
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
                    errorMessages={["Service Type is required!"]}
                    variant="outlined"
                    color="primary"
                    size="small"
                  >
                    {binServicePlans.map((plan, index) => (
                      <MenuItem key={index} value={plan.id}>
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
                      return false;
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
                <h2
                  style={{ margin: "8px auto", fontFamily: "Source Sans Pro" }}
                >
                  Total: $ {formData.discountPrice}
                </h2>
                <span className={classes.labelHeadingSize2}>
                  When you sign up for a monthly or quarterly service your card
                  will be charged on the same day every month or every quarter.
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ValidatorForm>

      {statusMessage && <p>{statusMessage}</p>}
    </React.Fragment>
  );
}

export default function InjectedCheckoutForm(props) {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutPage stripe={stripe} elements={elements} {...props} />
      )}
    </ElementsConsumer>
  );
}
