import { Box, Grid2, TextField } from "@mui/material";

function BecomeSellerFormStep3({ formik }: any) {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-5">Pickup Address</p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="bankDetails.accountNumber"
              label="Account Number"
              value={formik.values.bankDetails.accountNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.bankDetails?.accountNumber &&
                Boolean(formik.errors.bankDetails?.accountNumber)
              }
              helperText={
                formik.touched.bankDetails?.accountNumber &&
                formik.errors.bankDetails?.accountNumber
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="bankDetails.ifscCode"
              label="IFSC Code"
              value={formik.values.bankDetails.ifscCode}
              onChange={formik.handleChange}
              error={
                formik.touched.bankDetails?.ifscCode &&
                Boolean(formik.errors.bankDetails?.ifscCode)
              }
              helperText={
                formik.touched.bankDetails?.ifscCode &&
                formik.errors.bankDetails?.ifscCode
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="bankDetails.accountHolderName"
              label="Account Holder Name"
              value={formik.values.bankDetails.accountHolderName}
              onChange={formik.handleChange}
              error={
                formik.touched.bankDetails?.accountHolderName &&
                Boolean(formik.errors.bankDetails?.accountHolderName)
              }
              helperText={
                formik.touched.bankDetails?.accountHolderName &&
                formik.errors.bankDetails?.accountHolderName
              }
            />
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}

export default BecomeSellerFormStep3;
