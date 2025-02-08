import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { useFormik } from "formik";
  
  function CreateDealForm() {
    const formik = useFormik({
      initialValues: {
        discount: 0,
        category: "",
      },
      onSubmit: (values) => {
        console.log("Submit ", values);
      },
    });
  
    return (
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{ my: 5, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h4" className="text-center">
          Create Deal
        </Typography>
  
        <TextField
          fullWidth
          name="discount"
          label="Discount"
          value={formik.values.discount}
          onChange={formik.handleChange}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}
        />
  
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.category}
            label="Category"
            onChange={formik.handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
  
        <Button fullWidth sx={{ py: ".99rem" }} type="submit" variant="contained">
          Create Deal
        </Button>
      </Box>
    );
  }
  
  export default CreateDealForm;
  