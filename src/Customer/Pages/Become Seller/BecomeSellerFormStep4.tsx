import { Box, Grid2, TextField } from "@mui/material";

function BecomeSellerFormStep4({ formik }: any) {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-5">Pickup Address</p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="businessDetails.businessName"
              label="Business Name"
              value={formik.values.businessDetails.businessName}
              onChange={formik.handleChange}
              error={
                formik.touched.businessDetails?.businessName &&
                Boolean(formik.errors.businessDetails?.businessName)
              }
              helperText={
                formik.touched.businessDetails?.businessName &&
                formik.errors.businessDetails?.businessName
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="sellerName"
              label="Seller Name"
              value={formik.values.bankDetails.sellerName}
              onChange={formik.handleChange}
              error={
                formik.touched.sellerName && Boolean(formik.errors.sellerName)
              }
              helperText={formik.touched.sellerName && formik.errors.sellerName}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}

export default BecomeSellerFormStep4;
