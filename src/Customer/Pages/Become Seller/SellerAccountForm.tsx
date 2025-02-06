import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

function SellerAccountForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (value: number) => {
    (activeStep > 0 || activeStep < steps.length - 1) &&
      setActiveStep((prevStep) => prevStep + value);
    activeStep === steps.length - 1 && handleCreateAccount();
  };

  const handleCreateAccount = () => {
    console.log("create Account");
  };

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      GSTIN: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        localioty: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "formik submitted");
      console.log("active step", activeStep);
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <section className="mt-20 space-y-10">
        <div>
          {activeStep === 0 ? (
            <BecomeSellerFormStep1 formik={formik} />
          ) : activeStep === 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activeStep === 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : activeStep === 3 ? (
            <BecomeSellerFormStep4 formik={formik} />
          ) : (
            ""
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            onClick={() => handleStep(-1)}
            variant="contained"
            disabled={activeStep === 0}
          >
            Back
          </Button>

          <Button onClick={() => handleStep(1)} variant="contained">
            {activeStep === steps.length - 1 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SellerAccountForm;
