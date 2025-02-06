import { Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";

function SellerLoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-5">
        Login As Seller
      </h1>
      <div className="space-y-5">
        <Grid2 container spacing={3}>
          <TextField
            fullWidth={true}
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {true && (
            <div className="space-y-2">
              <p className="font-medium text-sm opacity-60">Enter OTP sent to your email</p>
              <TextField
                fullWidth={true}
                name="otp"
                label="OTP"
                value={formik.values.otp}
                onChange={formik.handleChange}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
            </div>
          )}
        </Grid2>
      </div>
    </div>
  );
}

export default SellerLoginForm;
