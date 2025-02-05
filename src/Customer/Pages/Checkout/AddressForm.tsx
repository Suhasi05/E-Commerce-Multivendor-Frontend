import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressFormSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.number()
    .required("Pincode is required"),
  locality: Yup.string().required("Locality is required"),
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .required("Mobile is required")
    .matches(/^[6-9]\d{9}$/, "Invalid Mobile number"),
});

function AddressForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      addressname: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      locality: "",
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-5">Contact Details</p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth={true}
              name="mobile"
              label="Mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth={true}
              name="pincode"
              label="Pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth={true}
              name="locality"
              label="Locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth={true}
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth={true}
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid2>
          <Grid2 size={{xs: 12}}>
            <Button fullWidth type="submit" variant="contained" sx={{py: "14px"}}>Add Address</Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}

export default AddressForm;
